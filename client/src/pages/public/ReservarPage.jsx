import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { apiGet, apiPost } from '../../api/http.js';
import BackgroundFrame from '../../components/BackgroundFrame.jsx';
import BackButton from '../../components/BackButton.jsx';

const formSchema = z.object({
  clubId: z.string().min(1),
  courtId: z.string().optional(),
  startAt: z.string().min(1),
  durationMinutes: z.number().int().refine((v) => [60, 120].includes(v)),
  customerName: z.string().min(2),
  customerWhatsapp: z.string().regex(/^\+[1-9]\d{7,14}$/),
  customerEmail: z.string().optional(),
  note: z.string().optional()
});

function normalizeE164Phone(raw) {
  const trimmed = String(raw || '').trim();
  if (!trimmed) return '';
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/\D/g, '');
  if (hasPlus) return `+${digits}`;
  if (digits.startsWith('54')) return `+${digits}`;
  return `+54${digits}`;
}

export default function ReservarPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const queryDuration = Number(searchParams.get('duration') || 60);
  const initialDuration = [60, 120].includes(queryDuration) ? queryDuration : 60;

  const [form, setForm] = useState({
    clubId: 'club-paddle-demo',
    courtId: searchParams.get('courtId') || '',
    courtName: searchParams.get('courtName') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    durationMinutes: initialDuration,
    customerName: '',
    customerWhatsapp: '',
    customerEmail: '',
    note: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (form.courtName || !form.courtId) return;
    let active = true;
    apiGet('/public/club/club-paddle-demo')
      .then((club) => {
        if (!active) return;
        const match = (club.courts || []).find((c) => c.id === form.courtId);
        if (match?.name) {
          setForm((prev) => ({ ...prev, courtName: match.name }));
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [form.courtId, form.courtName]);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const startAt = new Date(`${form.date}T${form.time}:00`).toISOString();
      const payload = formSchema.parse({
        clubId: form.clubId,
        courtId: form.courtId || undefined,
        startAt,
        durationMinutes: Number(form.durationMinutes),
        customerName: form.customerName,
        customerWhatsapp: normalizeE164Phone(form.customerWhatsapp),
        customerEmail: form.customerEmail || undefined,
        note: form.note || undefined
      });

      const hold = await apiPost('/public/reservations/hold', payload);
      await apiPost('/public/reservations/confirm', { reservationId: hold.reservation.id });
      navigate(`/confirmacion/${hold.reservation.id}`, { state: { manageToken: hold.manageToken } });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const hasPhoneError = err.issues.some((i) => i.path?.[0] === 'customerWhatsapp');
        if (hasPhoneError) {
          setError('WhatsApp inválido. Ingresá un número válido (ej: 1122334455 o +5491122334455).');
        } else {
          setError('Hay datos inválidos. Revisá el formulario.');
        }
      } else {
        if (err?.code === 'SLOT_CONFLICT') {
          setError('Ese horario ya no está disponible. Elegí otro turno.');
        } else if (err?.code === 'PHONE_THROTTLED') {
          setError('Se alcanzó el límite de intentos con ese teléfono. Esperá unos minutos.');
        } else if (err?.code === 'OUTSIDE_ACTIVE_HOURS') {
          setError('El horario seleccionado está fuera del rango activo del club.');
        } else {
          setError('No se pudo reservar. Revisá datos o disponibilidad.');
        }
      }
      if (err?.code !== 'SLOT_CONFLICT') {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <BackgroundFrame tone="tone-reserve">
      <main className="h-screen pt-32 pb-6 px-3 md:px-6 flex items-start justify-center overflow-hidden">
        <section className="card w-full max-w-xl p-4 md:p-5">
          <h2 className="text-2xl font-semibold">Reservar cancha</h2>
          <form className="grid gap-2 mt-3" onSubmit={submit}>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              <label className="grid gap-1">
                <span className="text-[11px] text-slate-600">Fecha</span>
                <input className="border rounded p-1.5 text-sm bg-slate-100 text-slate-700" value={form.date} readOnly />
              </label>
              <label className="grid gap-1">
                <span className="text-[11px] text-slate-600">Hora</span>
                <input className="border rounded p-1.5 text-sm bg-slate-100 text-slate-700" value={form.time} readOnly />
              </label>
              <label className="grid gap-1">
                <span className="text-[11px] text-slate-600">Duración</span>
                <input
                  className="border rounded p-1.5 text-sm bg-slate-100 text-slate-700"
                  value={form.durationMinutes === 120 ? '2 horas' : '1 hora'}
                  readOnly
                />
              </label>
              <label className="grid gap-1">
                <span className="text-[11px] text-slate-600">Cancha</span>
                <input
                  className="border rounded p-1.5 text-sm bg-slate-100 text-slate-700"
                  value={form.courtName || form.courtId || 'Primera disponible'}
                  readOnly
                />
              </label>
            </fieldset>
            <input
              className="border rounded p-1.5 text-sm"
              placeholder="Nombre"
              autoComplete="name"
              value={form.customerName}
              onChange={(e) => setForm({ ...form, customerName: e.target.value })}
              required
            />
            <input
              className="border rounded p-1.5 text-sm"
              placeholder="WhatsApp (ej: 1122334455)"
              autoComplete="tel-national"
              inputMode="tel"
              value={form.customerWhatsapp}
              onChange={(e) => setForm({ ...form, customerWhatsapp: e.target.value })}
              required
            />
            <input
              className="border rounded p-1.5 text-sm"
              placeholder="Email opcional"
              autoComplete="email"
              inputMode="email"
              value={form.customerEmail}
              onChange={(e) => setForm({ ...form, customerEmail: e.target.value })}
            />
            <textarea
              className="border rounded p-1.5 text-sm h-16 resize-none"
              placeholder="Nota opcional"
              autoComplete="on"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
            {error && <p className="text-red-700 text-sm">{error}</p>}
            <div className="flex items-center justify-between gap-2 pt-1">
              <BackButton fallback="/" className="text-sm px-3 py-1.5" />
              <button className="btn-primary text-sm px-3 py-1.5" disabled={loading}>
                {loading ? 'Reservando...' : 'Confirmar reserva'}
              </button>
            </div>
          </form>
        </section>
      </main>
    </BackgroundFrame>
  );
}
