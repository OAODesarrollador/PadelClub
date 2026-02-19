import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { apiGet, apiPost } from '../../api/http.js';
import BackgroundFrame from '../../components/BackgroundFrame.jsx';
import BackButton from '../../components/BackButton.jsx';

const LOADING = {
  NONE: '',
  CASH: 'cash',
  CARD: 'card',
  TRANSFER: 'transfer',
  MANUAL_TRANSFER: 'manual-transfer',
  SUBMIT: 'card-submit'
};

const BRICK = {
  NONE: '',
  CARD: 'card',
  TRANSFER: 'transfer'
};

const PAYMENT_METHOD = {
  CASH: 'cash',
  CARD: 'card',
  TRANSFER: 'transfer',
  MANUAL_TRANSFER: 'manual-transfer'
};

function formatMpStatus(mpPayment) {
  const status = mpPayment?.status || 'unknown';
  const detail = mpPayment?.status_detail || mpPayment?.statusDetail || '';

  if (status === 'approved') {
    return `Pago aprobado. Estado MP: ${status}${detail ? ` (${detail})` : ''}.`;
  }
  if (status === 'in_process') {
    return `Pago en proceso. Estado MP: ${status}${detail ? ` (${detail})` : ''}.`;
  }
  if (status === 'pending') {
    return `Pago pendiente. Estado MP: ${status}${detail ? ` (${detail})` : ''}.`;
  }
  if (status === 'rejected') {
    return `Pago rechazado. Estado MP: ${status}${detail ? ` (${detail})` : ''}.`;
  }

  return `Pago procesado. Estado MP: ${status}${detail ? ` (${detail})` : ''}.`;
}

export default function ConfirmacionPage() {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [payMsg, setPayMsg] = useState('');
  const [payLoading, setPayLoading] = useState(LOADING.NONE);
  const [showMpBrick, setShowMpBrick] = useState(false);
  const [mpPublicKey, setMpPublicKey] = useState('');
  const [mpBrickMode, setMpBrickMode] = useState(BRICK.NONE);
  const [transferPreferenceId, setTransferPreferenceId] = useState('');
  const [brickReady, setBrickReady] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(PAYMENT_METHOD.CASH);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const mpBrickRef = useRef(null);

  useEffect(() => {
    setError(null);
    apiGet(`/public/reservations/${id}/summary`)
      .then(setData)
      .catch((err) => {
        console.error(err);
        setError('No se pudo cargar el resumen de la reserva. Por favor, intentá recargar la página.');
      });
  }, [id]);

  useEffect(() => {
    let active = true;
    const q = new URLSearchParams(location.search);
    const payment = q.get('payment');
    if (!payment) return;

    if (payment === 'success' || payment === 'pending') {
      apiGet(`/public/payments/status/${id}`)
        .then((result) => {
          if (!active) return;
          setPayMsg(formatMpStatus(result?.mpPayment));
          if (result?.mpPayment?.status === 'approved') {
            setPaymentCompleted(true);
          }
        })
        .catch(() => {
          if (!active) return;
          setPayMsg(`Checkout finalizado. Mercado Pago devolvió: ${payment}.`);
        });
      return () => {
        active = false;
      };
    }
    if (payment === 'failure') {
      setPayMsg('Checkout finalizado. Mercado Pago devolvió: failure.');
    }
    return () => {
      active = false;
    };
  }, [location.search, id]);

  async function payCash() {
    setPayLoading(LOADING.CASH);
    setPayMsg('');
    try {
      await apiPost('/public/payments/cash', { reservationId: id });
      setPayMsg('Pago en efectivo registrado correctamente.');
      setPaymentCompleted(true);
    } catch {
      setPayMsg('No se pudo registrar el pago en efectivo.');
    } finally {
      setPayLoading(LOADING.NONE);
    }
  }

  async function ensureMercadoPagoScript() {
    if (window.MercadoPago) return;
    await new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-mp-sdk="true"]');
      if (existing) {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.async = true;
      script.dataset.mpSdk = 'true';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  async function showIntegratedMercadoPago() {
    setPayLoading(LOADING.CARD);
    setPayMsg('');
    try {
      const cfg = await apiGet('/public/payments/mercadopago/config');
      if (!cfg?.enabled || !cfg?.publicKey) {
        setPayMsg('Mercado Pago no está configurado. Cargá MP_PUBLIC_KEY y MP_ACCESS_TOKEN en el servidor.');
        return;
      }
      setMpPublicKey(cfg.publicKey);
      setMpBrickMode(BRICK.CARD);
      setTransferPreferenceId('');
      setShowMpBrick(true);
      setBrickReady(false);
    } catch (error) {
      setPayMsg('No se pudo inicializar Mercado Pago integrado.');
    } finally {
      setPayLoading(LOADING.NONE);
    }
  }

  async function payTransferMercadoPago() {
    setPayLoading(LOADING.TRANSFER);
    setPayMsg('');
    setMpBrickMode(BRICK.TRANSFER);
    setBrickReady(false);
    try {
      const pref = await apiPost('/public/payments/mercadopago/preference', {
        reservationId: id,
        mode: 'transfer'
      });
      if (!pref?.preferenceId || !pref?.mpPublicKey) {
        setPayMsg('Respuesta del servidor inválida: No se recibió ID de preferencia o Llave Pública.');
        return;
      }
      setMpPublicKey(pref.mpPublicKey);
      setTransferPreferenceId(pref.preferenceId);
      setShowMpBrick(true);
    } catch (error) {
      console.error('[MP_TRANSFER_INIT_ERROR]', error);
      if (error?.code === 'MP_NOT_CONFIGURED') {
        setPayMsg('Mercado Pago no está configurado. Cargá MP_PUBLIC_KEY y MP_ACCESS_TOKEN en el servidor.');
      } else if (error?.code === 'MP_PREFERENCE_ERROR' || error?.error === 'INTERNAL_ERROR') {
        const detail = String(error?.detail || '');
        setPayMsg(detail ? `Error del servidor: ${detail.slice(0, 150)}` : 'No se pudo iniciar la transferencia (Error de Preferencia).');
      } else {
        const detail = String(error?.detail || error?.message || '');
        setPayMsg(detail ? `Error: ${detail.slice(0, 150)}` : 'Error al conectar con el servidor para iniciar la transferencia.');
      }
    } finally {
      setPayLoading(LOADING.NONE);
    }
  }

  useEffect(() => {
    let canceled = false;

    async function mountBrick() {
      if (!showMpBrick || !mpPublicKey || !data?.reservation || !mpBrickMode) return;
      try {
        await ensureMercadoPagoScript();
        if (canceled) return;

        if (mpBrickRef.current?.unmount) {
          await mpBrickRef.current.unmount();
        }

        const amount = Number(data.reservation.amount);
        if (!amount || amount <= 0) {
          setPayMsg('El monto de la reserva no es válido.');
          setPayLoading(LOADING.NONE);
          return;
        }

        const mp = new window.MercadoPago(mpPublicKey, { locale: 'es-AR' });
        const bricksBuilder = mp.bricks();
        if (mpBrickMode === BRICK.CARD) {
          mpBrickRef.current = await bricksBuilder.create('cardPayment', 'mp-card-payment-container', {
            initialization: {
              amount,
              payer: {
                email: data.reservation.customerEmail || ''
              }
            },
            customization: {
              visual: {
                style: {
                  theme: 'default'
                }
              }
            },
            callbacks: {
              onReady: () => {
                setBrickReady(true);
              },
              onSubmit: async (formData) => {
                setPayLoading(LOADING.SUBMIT);
                setPayMsg('');
                try {
                  const result = await apiPost('/public/payments/mercadopago/card-pay', {
                    reservationId: id,
                    ...formData
                  });
                  setPayMsg(formatMpStatus(result?.mpPayment));
                  if (result?.mpPayment?.status === 'approved') {
                    setPaymentCompleted(true);
                  }
                } catch (error) {
                  const detail = String(error?.detail || '');
                  setPayMsg(detail ? `Mercado Pago rechazó la solicitud: ${detail.slice(0, 180)}` : 'No se pudo procesar el pago con tarjeta.');
                } finally {
                  setPayLoading(LOADING.NONE);
                }
              },
              onError: () => {
                setPayMsg('No se pudo inicializar Mercado Pago. Revisá bloqueadores del navegador y recargá la página.');
                setBrickReady(false);
                setPayLoading(LOADING.NONE);
              }
            }
          });
          return;
        }

        if (!transferPreferenceId) {
          setPayMsg('No se pudo inicializar transferencia integrada con Mercado Pago.');
          setPayLoading(LOADING.NONE);
          return;
        }

        mpBrickRef.current = await bricksBuilder.create('wallet', 'mp-wallet-container', {
          initialization: {
            preferenceId: transferPreferenceId
          },
          customization: {
            texts: {
              valueProp: 'smart_option'
            }
          },
          callbacks: {
            onReady: () => {
              setBrickReady(true);
              setPayLoading(LOADING.NONE);
            },
            onError: () => {
              setPayMsg('No se pudo inicializar la transferencia con Mercado Pago.');
              setBrickReady(false);
              setPayLoading(LOADING.NONE);
            }
          }
        });
      } catch (error) {
        console.error('[MP_BRICK_MOUNT_ERROR]', error);
        setPayMsg('No se pudo inicializar la interfaz de pago de Mercado Pago. Revisá conexión y bloqueadores.');
        setPayLoading(LOADING.NONE);
      }
    }

    mountBrick();

    return () => {
      canceled = true;
      if (mpBrickRef.current?.unmount) {
        mpBrickRef.current.unmount();
        mpBrickRef.current = null;
      }
    };
  }, [showMpBrick, mpPublicKey, data, id, mpBrickMode, transferPreferenceId]);

  useEffect(() => {
    if (!showMpBrick || brickReady) return;
    const t = setTimeout(() => {
      setPayMsg((prev) =>
        prev ||
        'Mercado Pago está tardando en cargar. Si usás AdBlock/Brave Shield, desactivalo para este sitio y recargá.'
      );
    }, 6000);
    return () => clearTimeout(t);
  }, [showMpBrick, brickReady]);

  async function selectCashAndPay() {
    setSelectedPaymentMethod(PAYMENT_METHOD.CASH);
    setShowMpBrick(false);
    setBrickReady(false);
    setMpBrickMode(BRICK.NONE);
    setTransferPreferenceId('');
    await payCash();
  }

  async function selectCardAndPay() {
    setSelectedPaymentMethod(PAYMENT_METHOD.CARD);
    await showIntegratedMercadoPago();
  }

  async function selectTransferAndPay() {
    setSelectedPaymentMethod(PAYMENT_METHOD.TRANSFER);
    await payTransferMercadoPago();
  }

  function openManualTransferPanel() {
    setSelectedPaymentMethod(PAYMENT_METHOD.MANUAL_TRANSFER);
    setShowMpBrick(false);
    setBrickReady(false);
    setMpBrickMode(BRICK.NONE);
    setTransferPreferenceId('');
    setPayMsg('');
  }

  async function copyToClipboard(value) {
    const text = String(value || '').trim();
    if (!text) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const helper = document.createElement('textarea');
      helper.value = text;
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.focus();
      helper.select();
      document.execCommand('copy');
      document.body.removeChild(helper);
    } catch {
      setPayMsg('No se pudo copiar al portapapeles.');
    }
  }

  async function notifyManualTransferDone() {
    setPayLoading(LOADING.MANUAL_TRANSFER);
    setPayMsg('');
    try {
      await apiPost('/public/payments/transfer-notify', {
        reservationId: id,
        note: 'Cliente informó transferencia manual desde confirmación pública'
      });
      setPayMsg('Aviso enviado. El club verificará la transferencia y confirmará el pago.');
      setPaymentCompleted(true);
    } catch {
      setPayMsg('No se pudo registrar el aviso de transferencia.');
    } finally {
      setPayLoading(LOADING.NONE);
    }
  }

  const transferAlias =
    data?.reservation?.club?.transferAlias ||
    data?.reservation?.club?.alias ||
    import.meta.env.VITE_TRANSFER_ALIAS ||
    '';
  const transferCvuCbu =
    data?.reservation?.club?.transferCvuCbu ||
    data?.reservation?.club?.transferCvu ||
    data?.reservation?.club?.transferCbu ||
    data?.reservation?.club?.cvu ||
    data?.reservation?.club?.cbu ||
    import.meta.env.VITE_TRANSFER_CVU_CBU ||
    '';

  return (
    <BackgroundFrame tone="tone-confirm" logoPosition="panel-x" showHeader showMainNav showFooter>
      <main className="min-h-screen pt-32 pb-24 px-3 md:px-6 overflow-auto flex items-center">
        <section className="w-full max-w-6xl mx-auto my-auto">
          <div className="card p-4 md:p-5">
            <h2 className="text-2xl font-semibold">Reserva confirmada</h2>
            {!data && !error && <p className="mt-3 text-sm">Cargando...</p>}
            {error && (
              <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-700 text-sm font-medium">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary mt-3 text-xs"
                >
                  Recargar página
                </button>
              </div>
            )}
            {data && (
              <div className="mt-4 grid grid-cols-1 gap-4 md:gap-5">
                <div className="grid gap-1 text-sm leading-5">
                  <p><strong>ID:</strong> {data.reservation.id}</p>
                  <p><strong>Cancha:</strong> {data.reservation.court.name}</p>
                  <p><strong>Fecha:</strong> {new Date(data.reservation.startAt).toLocaleString()}</p>
                  <p><strong>Total:</strong> ${Number(data.reservation.amount || 0).toLocaleString('es-AR')}</p>
                  <div className="mt-1 border rounded-lg p-3 bg-slate-50 grid gap-2">
                    <p className="text-sm font-semibold">Modalidad de pago</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={selectedPaymentMethod === PAYMENT_METHOD.CASH ? 'btn-primary' : 'btn-secondary'}
                        disabled={payLoading !== LOADING.NONE}
                        onClick={selectCashAndPay}
                      >
                        {payLoading === LOADING.CASH ? 'Registrando...' : 'Efectivo'}
                      </button>
                      <button
                        className={selectedPaymentMethod === PAYMENT_METHOD.CARD ? 'btn-primary' : 'btn-secondary'}
                        disabled={payLoading !== LOADING.NONE}
                        onClick={selectCardAndPay}
                      >
                        {payLoading === LOADING.CARD ? 'Cargando...' : 'Mercado Pago (integrado)'}
                      </button>
                      <button
                        className={selectedPaymentMethod === PAYMENT_METHOD.TRANSFER ? 'btn-primary' : 'btn-secondary'}
                        disabled={payLoading !== LOADING.NONE}
                        onClick={selectTransferAndPay}
                      >
                        {payLoading === LOADING.TRANSFER ? 'Cargando...' : 'Transferencia (Mercado Pago)'}
                      </button>
                      <button
                        className={selectedPaymentMethod === PAYMENT_METHOD.MANUAL_TRANSFER ? 'btn-primary' : 'btn-secondary'}
                        disabled={payLoading !== LOADING.NONE}
                        onClick={openManualTransferPanel}
                      >
                        Transferencia (Alias/CVU-CBU)
                      </button>
                    </div>
                    {payMsg && <p className="text-sm text-slate-700">{payMsg}</p>}
                  </div>
                  {location.state?.manageToken && !paymentCompleted && (
                    <Link className="btn-link mt-2 inline-block" to={`/gestionar?token=${location.state.manageToken}`}>
                      Ir a gestionar reserva
                    </Link>
                  )}
                </div>
                {selectedPaymentMethod !== PAYMENT_METHOD.CASH && (
                  <div className="border rounded-lg bg-slate-50 p-3">
                    <p className="text-sm font-semibold mb-2">Ventana de pago</p>
                    {selectedPaymentMethod === PAYMENT_METHOD.MANUAL_TRANSFER ? (
                      <div className="border rounded-md p-3 bg-white min-h-[360px] grid gap-3 content-start">
                        <h3 className="text-base font-semibold">Transferencia del club</h3>
                        <p className="text-sm text-slate-600">Copiá los datos y luego avisá cuando completes la transferencia.</p>
                        <div className="border rounded-lg p-3 grid gap-2">
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs text-slate-500">Alias</p>
                              <p className="text-sm font-medium break-all">{transferAlias || 'No configurado'}</p>
                            </div>
                            <button className="btn-secondary" disabled={!transferAlias} onClick={() => copyToClipboard(transferAlias)}>Copiar</button>
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs text-slate-500">CVU/CBU</p>
                              <p className="text-sm font-medium break-all">{transferCvuCbu || 'No configurado'}</p>
                            </div>
                            <button className="btn-secondary" disabled={!transferCvuCbu} onClick={() => copyToClipboard(transferCvuCbu)}>Copiar</button>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <button className="btn-primary" disabled={payLoading !== LOADING.NONE} onClick={notifyManualTransferDone}>
                            {payLoading === LOADING.MANUAL_TRANSFER ? 'Enviando...' : 'Ya realicé la transferencia'}
                          </button>
                        </div>
                      </div>
                    ) : showMpBrick ? (
                      <div className="border rounded-md p-2 bg-white min-h-[360px]">
                        {mpBrickMode === BRICK.CARD ? <div id="mp-card-payment-container" /> : <div id="mp-wallet-container" />}
                        {!brickReady && <p className="text-[11px] text-slate-500 mt-1">Inicializando interfaz de Mercado Pago...</p>}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-600">
                        Seleccioná una modalidad online para inicializar el checkout.
                      </p>
                    )}
                  </div>
                )}
                <BackButton fallback="/reservar" className="mt-1" />
              </div>
            )}
          </div>
        </section>
      </main>
    </BackgroundFrame>
  );
}

