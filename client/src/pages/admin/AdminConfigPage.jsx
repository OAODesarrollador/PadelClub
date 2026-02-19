import { useEffect, useState } from 'react';
import { apiGet, apiPost, apiPut } from '../../api/http.js';

export default function AdminConfigPage() {
  const token = localStorage.getItem('admin_access_token');
  const role = localStorage.getItem('admin_role');
  const [clubs, setClubs] = useState([]);
  const [license, setLicense] = useState(null);
  const [licenseKey, setLicenseKey] = useState('');
  const [message, setMessage] = useState('');
  const [selectedClubId, setSelectedClubId] = useState('');
  const [activeStart, setActiveStart] = useState('08:00');
  const [activeEnd, setActiveEnd] = useState('23:00');
  const [transferAlias, setTransferAlias] = useState('');
  const [transferCvuCbu, setTransferCvuCbu] = useState('');

  async function load() {
    const [clubData, licenseData] = await Promise.all([
      apiGet('/admin/clubs', token),
      apiGet('/admin/license/status', token)
    ]);
    setClubs(clubData);
    setLicense(licenseData);
    if (clubData.length > 0) {
      const first = clubData[0];
      setSelectedClubId(first.id);
      try {
        const schedule = typeof first.scheduleJson === 'string' ? JSON.parse(first.scheduleJson) : first.scheduleJson;
        const range = schedule?.default?.[0];
        if (range?.start) setActiveStart(range.start);
        if (range?.end) setActiveEnd(range.end);
      } catch {
        // keep defaults
      }
    }
  }

  useEffect(() => {
    load().catch(() => setMessage('No se pudo cargar configuración.'));
  }, []);

  useEffect(() => {
    const selectedClub = clubs.find((c) => c.id === selectedClubId);
    if (!selectedClub) return;
    try {
      const schedule = typeof selectedClub.scheduleJson === 'string' ? JSON.parse(selectedClub.scheduleJson) : selectedClub.scheduleJson;
      const range = schedule?.default?.[0];
      if (range?.start) setActiveStart(range.start);
      if (range?.end) setActiveEnd(range.end);
    } catch {
      setActiveStart('08:00');
      setActiveEnd('23:00');
    }
    setTransferAlias(selectedClub.transferAlias || '');
    setTransferCvuCbu(selectedClub.transferCvuCbu || '');
  }, [selectedClubId, clubs]);

  async function createBackup() {
    const res = await apiPost('/admin/backups/create', {}, token);
    setMessage(`Backup creado: ${res.backupDir}`);
  }

  async function activateLicense() {
    try {
      await apiPost('/admin/license/activate', { licenseKey }, token);
      setMessage('Licencia activada');
      load();
    } catch {
      setMessage('No se pudo activar la licencia');
    }
  }

  async function saveActiveRange() {
    if (!selectedClubId) return;
    try {
      await apiPut(`/admin/clubs/${selectedClubId}`, {
        scheduleJson: {
          default: [{ start: activeStart, end: activeEnd }]
        },
        transferAlias,
        transferCvuCbu
      }, token);
      setMessage('Configuración del club guardada.');
      load();
    } catch {
      setMessage('No se pudo guardar la configuración del club.');
    }
  }

  return (
    <section className="grid gap-4">
      <article className="card">
        <h2 className="text-2xl font-semibold">Configuración</h2>
        <p className="text-sm mt-1">Rol actual: <strong>{role}</strong></p>
        <button className="btn-primary mt-3" onClick={load}>Recargar datos</button>
        <ul className="mt-3 text-sm">
          {clubs.map((c) => <li key={c.id}>{c.name} ({c.slug})</li>)}
        </ul>
      </article>

      <article className="card">
        <h3 className="text-xl font-semibold">Horario activo del club</h3>
        <p className="text-sm mt-1">Define el rango que se verá como reservable en la agenda pública.</p>
        <select className="border rounded p-2 mt-3 w-full" value={selectedClubId} onChange={(e) => setSelectedClubId(e.target.value)}>
          {clubs.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <input className="border rounded p-2" type="time" value={activeStart} onChange={(e) => setActiveStart(e.target.value)} />
          <input className="border rounded p-2" type="time" value={activeEnd} onChange={(e) => setActiveEnd(e.target.value)} />
        </div>
        <div className="grid gap-3 mt-4">
          <input
            className="border rounded p-2"
            value={transferAlias}
            onChange={(e) => setTransferAlias(e.target.value)}
            placeholder="Alias de transferencia"
          />
          <input
            className="border rounded p-2"
            value={transferCvuCbu}
            onChange={(e) => setTransferCvuCbu(e.target.value)}
            placeholder="CVU/CBU de transferencia"
          />
        </div>
        <button className="btn-primary mt-3" onClick={saveActiveRange}>Guardar configuración del club</button>
      </article>

      <article className="card">
        <h3 className="text-xl font-semibold">Backups</h3>
        <button className="btn-primary mt-3" onClick={createBackup}>Crear backup</button>
      </article>

      <article className="card">
        <h3 className="text-xl font-semibold">Licencia</h3>
        <p className="text-sm mt-1">Machine hash: {license?.machineHash || '-'}</p>
        <input className="border rounded p-2 w-full mt-3" value={licenseKey} onChange={(e) => setLicenseKey(e.target.value)} placeholder="Pegar license key" />
        <button className="btn-primary mt-3" onClick={activateLicense}>Activar</button>
      </article>

      {message && <p className="text-sm">{message}</p>}
    </section>
  );
}
