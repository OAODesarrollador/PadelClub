import { useEffect, useState } from 'react';
import { apiGet, apiPost } from '../../api/http.js';

export default function AdminAgendaPage() {
  const token = localStorage.getItem('admin_access_token');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [items, setItems] = useState([]);

  async function load() {
    const data = await apiGet(`/admin/agenda?date=${date}`, token);
    setItems(data);
  }

  useEffect(() => {
    load().catch(console.error);
  }, []);

  async function markNoShow(id) {
    await apiPost(`/admin/reservations`, { id });
  }

  return (
    <section className="card">
      <h2 className="text-2xl font-semibold">Agenda</h2>
      <div className="flex gap-2 mt-3">
        <input className="border rounded p-2" value={date} onChange={(e) => setDate(e.target.value)} />
        <button className="btn-primary" onClick={load}>Cargar</button>
      </div>
      <div className="mt-4 grid gap-2">
        {items.map((r) => (
          <article key={r.id} className="border rounded p-3 bg-white">
            <p><strong>{new Date(r.startAt).toLocaleTimeString()}</strong> - {r.court.name}</p>
            <p>{r.customerName} ({r.customerWhatsapp})</p>
            <p>Estado: {r.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
