import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiGet, apiPost } from '../../api/http.js';
import BackgroundFrame from '../../components/BackgroundFrame.jsx';
import BackButton from '../../components/BackButton.jsx';

export default function GestionarPage() {
  const [params] = useSearchParams();
  const token = useMemo(() => params.get('token') || '', [params]);
  const [reservation, setReservation] = useState(null);
  const [msg, setMsg] = useState('');

  async function fetchReservation() {
    try {
      const data = await apiGet(`/public/manage?token=${encodeURIComponent(token)}`);
      setReservation(data);
      setMsg('');
    } catch {
      setMsg('Token inválido o vencido.');
    }
  }

  async function cancel() {
    await apiPost('/public/manage/cancel', { token, reason: 'Cancelación cliente' });
    setMsg('Reserva cancelada.');
    fetchReservation();
  }

  async function reschedule() {
    const startAt = prompt('Nueva fecha/hora ISO (ej: 2030-05-01T19:00:00.000Z)');
    if (!startAt) return;
    const durationMinutes = reservation?.durationMinutes === 120 ? 120 : 60;
    await apiPost('/public/manage/reschedule', { token, startAt, durationMinutes });
    setMsg('Reprogramación iniciada en HOLD. Confirmá nuevamente.');
    fetchReservation();
  }

  return (
    <BackgroundFrame tone="tone-manage">
      <main className="min-h-screen p-4 md:p-8">
        <section className="card max-w-2xl mx-auto grid gap-3">
          <BackButton fallback="/" />
          <h2 className="text-2xl font-semibold">Gestionar reserva</h2>
          <button className="btn-primary" onClick={fetchReservation}>Ver detalles</button>
          {reservation && (
            <>
              <p><strong>ID:</strong> {reservation.id}</p>
              <p><strong>Estado:</strong> {reservation.status}</p>
              <p><strong>Inicio:</strong> {new Date(reservation.startAt).toLocaleString()}</p>
              <div className="flex gap-3">
                <button className="btn-danger" onClick={cancel}>Cancelar</button>
                <button className="btn-secondary" onClick={reschedule}>Reprogramar</button>
              </div>
            </>
          )}
          {msg && <p className="text-sm">{msg}</p>}
        </section>
      </main>
    </BackgroundFrame>
  );
}

