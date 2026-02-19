import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiGet } from '../../api/http.js';
import BackgroundFrame from '../../components/BackgroundFrame.jsx';

function toDateInput(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function shiftDate(dateStr, deltaDays) {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setDate(d.getDate() + deltaDays);
  return toDateInput(d);
}

function formatHumanDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString('es-AR', {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  });
}

function isBeforeToday(dateStr) {
  const today = toDateInput(new Date());
  return dateStr < today;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(value || 0);
}

export default function LandingPage() {
  const navigate = useNavigate();
  const gridContainerRef = useRef(null);
  const popupRef = useRef(null);
  const todayStr = toDateInput(new Date());
  const [selectedDate, setSelectedDate] = useState(toDateInput(new Date()));
  const [duration, setDuration] = useState(60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dayData, setDayData] = useState(null);
  const [selection, setSelection] = useState(null);
  const [popupHeight, setPopupHeight] = useState(132);
  const [slotNotice, setSlotNotice] = useState({ type: '', text: '' });
  const [hoverTip, setHoverTip] = useState({ visible: false, text: '', type: '', x: 0, y: 0 });

  useEffect(() => {
    let active = true;

    async function loadDay() {
      setLoading(true);
      setError('');
      try {
        const data = await apiGet(
          `/public/availability?clubId=club-paddle-demo&date=${selectedDate}&duration=${duration}`
        );
        if (active) setDayData(data);
      } catch {
        if (active) setError('No se pudo cargar disponibilidad.');
      } finally {
        if (active) setLoading(false);
      }
    }

    loadDay();
    return () => {
      active = false;
    };
  }, [selectedDate, duration]);

  useEffect(() => {
    setSlotNotice({ type: '', text: '' });
  }, [selectedDate, duration]);

  const timeColumns = useMemo(() => {
    if (!dayData) return [];
    return dayData.slots.filter((slot) => slot.isWithinActiveRange);
  }, [dayData]);

  useEffect(() => {
    if (!selection) return;
    const slot = timeColumns.find((s) => s.startAt === selection.startAt);
    const court = slot?.courts?.find((c) => c.courtId === selection.courtId);
    if (!court?.startAllowed) {
      setSelection(null);
    }
  }, [timeColumns, selection]);

  const courts = useMemo(() => {
    if (!timeColumns?.length) return [];
    return timeColumns[0].courts;
  }, [timeColumns]);

  const slotSections = useMemo(() => {
    const block1 = timeColumns.filter((slot) => {
      const h = new Date(slot.startAt).getHours();
      return h >= 0 && h < 12;
    });
    const block2 = timeColumns.filter((slot) => {
      const h = new Date(slot.startAt).getHours();
      return h >= 12 && h <= 23;
    });

    return [
      { key: 'block-1', title: 'Rango 00:00 - 11:59', slots: block1 },
      { key: 'block-2', title: 'Rango 12:00 - 23:59', slots: block2 }
    ];
  }, [timeColumns]);

  const selectedCourtSlot = useMemo(() => {
    if (!selection) return null;
    const slot = timeColumns.find((s) => s.startAt === selection.startAt);
    return slot?.courts?.find((c) => c.courtId === selection.courtId) || null;
  }, [timeColumns, selection]);

  function isAvailable(courtId, startAt) {
    const slot = timeColumns.find((s) => s.startAt === startAt);
    if (!slot) return false;
    const c = slot.courts.find((x) => x.courtId === courtId);
    return Boolean(c?.available);
  }

  function isStartAllowed(courtId, startAt) {
    const slot = timeColumns.find((s) => s.startAt === startAt);
    if (!slot) return false;
    const c = slot.courts.find((x) => x.courtId === courtId);
    return Boolean(c?.startAllowed);
  }

  function onCellClick(event, court, startAt) {
    const available = isAvailable(court.courtId, startAt);
    const startAllowed = isStartAllowed(court.courtId, startAt);
    if (!available || !startAllowed) {
      setSlotNotice({ type: 'busy', text: 'Horario ocupado' });
      return;
    }
    setSlotNotice({ type: 'free', text: 'Horario disponible' });
    const cellRect = event.currentTarget.getBoundingClientRect();
    setDuration(60);
    setSelection({
      courtId: court.courtId,
      courtName: court.courtName,
      startAt,
      cellTopViewport: cellRect.top || 0,
      cellLeftViewport: cellRect.left || 0,
      cellWidth: cellRect.width || 24
    });
  }

  function onCellHover(courtId, startAt) {
    const available = isAvailable(courtId, startAt);
    const startAllowed = isStartAllowed(courtId, startAt);
    if (!available || !startAllowed) {
      setSlotNotice({ type: 'busy', text: 'Horario ocupado' });
      setHoverTip((prev) => ({ ...prev, visible: true, text: 'Horario ocupado', type: 'busy' }));
      return;
    }
    setSlotNotice({ type: 'free', text: 'Horario disponible' });
    setHoverTip((prev) => ({ ...prev, visible: true, text: 'Horario disponible', type: 'free' }));
  }

  function onCellMove(event) {
    setHoverTip((prev) => ({
      ...prev,
      x: event.clientX + 12,
      y: event.clientY + 12
    }));
  }

  function onCellLeave() {
    setHoverTip((prev) => ({ ...prev, visible: false }));
  }

  function goToReservation() {
    if (!selection) return;
    const time = new Date(selection.startAt).toTimeString().slice(0, 5);
    const courtNameParam = encodeURIComponent(selection.courtName || '');
    navigate(
      `/reservar?date=${selectedDate}&time=${time}&duration=${duration}&courtId=${selection.courtId}&courtName=${courtNameParam}`
    );
  }

  function closeSelection() {
    setSelection(null);
    setDuration(60);
  }

  useLayoutEffect(() => {
    if (!selection || !popupRef.current) return;
    const h = popupRef.current.offsetHeight;
    if (h && Math.abs(h - popupHeight) > 1) {
      setPopupHeight(h);
    }
  }, [selection, popupHeight]);

  return (
    <BackgroundFrame tone="tone-public" logoPosition="panel-x" showMainNav>
      <section className="h-screen max-h-screen p-3 md:p-6 pt-24 flex items-center justify-center overflow-hidden">
        <article className="w-full max-w-6xl h-[60vh] panel-shell overflow-hidden">
          <header className="panel-topbar px-4 md:px-6 py-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">Agenda de Reservas</h1>
                <p className="text-sm muted-text mt-1">Elegí una hora libre y continuá con la reserva.</p>
              </div>
              <Link to="/admin/login" className="btn-secondary text-xs px-3 py-1.5">Admin</Link>
            </div>
          </header>

          <div className="flex items-center justify-between gap-2 px-3 md:px-4 py-2 border-b bg-white">
            <div className="flex items-center gap-2">
              <button
                className="btn-icon disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={() => {
                  const prev = shiftDate(selectedDate, -1);
                  if (!isBeforeToday(prev)) setSelectedDate(prev);
                }}
                disabled={isBeforeToday(shiftDate(selectedDate, -1))}
              >
                ‹
              </button>
              <span className="text-sm md:text-base font-semibold capitalize">{formatHumanDate(selectedDate)}</span>
              <button className="btn-icon" onClick={() => setSelectedDate(shiftDate(selectedDate, 1))}>›</button>
              <input
                type="date"
                className="border rounded px-2 py-1 text-xs md:text-sm"
                value={selectedDate}
                min={todayStr}
                onChange={(e) => {
                  const next = e.target.value;
                  if (!next || isBeforeToday(next)) return;
                  setSelectedDate(next);
                }}
              />
            </div>

            <p className="text-xs md:text-sm muted-text">
              Seleccioná un horario para elegir duración.
            </p>
          </div>
          <div ref={gridContainerRef} className="relative p-2 md:p-3 bg-white h-[calc(60vh-116px)] overflow-visible">
            {loading && <p className="text-sm px-2 py-1 muted-text">Cargando horarios...</p>}
            {error && <p className="text-sm text-red-700 px-2 py-1">{error}</p>}

            {!loading && !error && dayData && (
              <div className="grid gap-1.5">
                {slotSections.map((section) => (
                  <section key={section.key} className="border rounded-lg overflow-hidden border-slate-200">
                    <div
                      className="grid"
                      style={{ gridTemplateColumns: `160px repeat(${Math.max(section.slots.length, 1)}, minmax(0, 1fr))` }}
                    >
                      <div className="h-5 border-r border-b bg-slate-100 text-[11px] font-semibold text-slate-700 px-2 flex items-center">
                        {section.title}
                      </div>
                      {section.slots.map((slot) => (
                        <div key={slot.startAt} className="h-5 border-b border-r bg-slate-50 text-[11px] font-medium text-slate-700 flex items-center justify-center">
                          {new Date(slot.startAt).toTimeString().slice(0, 5)}
                        </div>
                      ))}
                      {section.slots.length === 0 && (
                        <div className="h-5 border-b border-r bg-slate-50 text-[11px] text-slate-500 flex items-center justify-center">
                          sin horarios
                        </div>
                      )}

                      {courts.map((court) => (
                        <Fragment key={`${section.key}-${court.courtId}`}>
                          <div className="h-6 border-r border-b px-2 text-[11px] flex items-center bg-white font-medium text-slate-800">
                            {court.courtName}
                          </div>
                          {section.slots.map((slot) => {
                            const available = isAvailable(court.courtId, slot.startAt);
                            const selected =
                              selection?.courtId === court.courtId && selection?.startAt === slot.startAt;
                            return (
                              <button
                                key={`${section.key}-${court.courtId}-${slot.startAt}`}
                                type="button"
                                onClick={(event) => onCellClick(event, court, slot.startAt)}
                                onMouseEnter={() => onCellHover(court.courtId, slot.startAt)}
                                onMouseMove={onCellMove}
                                onMouseLeave={onCellLeave}
                                className={`h-6 border-r border-b transition relative ${
                                  selected
                                    ? 'z-20 bg-[var(--slot-selected-bg)] ring-2 ring-white shadow-md'
                                    : available
                                      ? 'bg-[var(--slot-available-bg)] hover:bg-[var(--slot-available-hover)]'
                                      : 'bg-[var(--slot-unavailable-bg)]'
                                }`}
                              />
                            );
                          })}
                          {section.slots.length === 0 && <div className="h-6 border-r border-b bg-slate-100" />}
                        </Fragment>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {selection && (
              <div className="absolute inset-0 z-10 bg-black/15 pointer-events-none" />
            )}

            {selection && (
              <div
                ref={popupRef}
                className="fixed z-50 w-56 bg-white border border-slate-200 rounded-lg shadow-lg p-2.5"
                style={(() => {
                  const popupWidth = 224;
                  const margin = 8;
                  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1280;
                  const preferredLeft = (selection.cellLeftViewport || 0) + ((selection.cellWidth || 24) * 0.5) - (popupWidth * 0.5);
                  const left = Math.max(margin, Math.min(preferredLeft, viewportWidth - popupWidth - margin));
                  const topAbove = (selection.cellTopViewport || 0) - popupHeight - margin;
                  const top = Math.max(72, topAbove);

                  return {
                    left,
                    top
                  };
                })()}
              >
                <p className="font-bold text-base">{selection.courtName}</p>
                <p className="text-xs muted-text">{new Date(selection.startAt).toTimeString().slice(0, 5)}</p>
                <div className="mt-2 grid gap-1.5">
                  <label className="text-[11px] font-medium text-slate-700">Duración</label>
                  <select
                    className="border rounded px-2 py-1 text-xs bg-white"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                  >
                    <option value={60}>1 hora</option>
                    <option value={120}>2 horas</option>
                  </select>
                </div>
                <div className="mt-2 rounded bg-blue-100 px-2 py-1 text-xs flex justify-between">
                  <span>{duration === 60 ? '1 hora' : '2 horas'}</span>
                  <span>{formatCurrency(selectedCourtSlot?.price)}</span>
                </div>
                <button className="mt-2 w-full btn-primary text-sm font-semibold" onClick={goToReservation}>
                  Continuar
                </button>
                <button className="mt-1.5 w-full text-xs btn-link" onClick={closeSelection}>
                  Cerrar
                </button>
              </div>
            )}

            <div className="mt-2 flex justify-end gap-4 text-[11px] text-slate-700 px-1">
              <p><span className="inline-block w-3 h-3 border mr-1 align-middle" />Disponible</p>
              <p><span className="inline-block w-3 h-3 bg-slate-400 mr-1 align-middle" />No disponible</p>
              <p><span className="inline-block w-3 h-3 bg-blue-600 mr-1 align-middle" />Tu reserva</p>
            </div>
            {hoverTip.visible && (
              <div
                className={`fixed z-50 pointer-events-none px-2 py-1 rounded text-[11px] font-medium shadow ${
                  hoverTip.type === 'free' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                }`}
                style={{ left: hoverTip.x, top: hoverTip.y }}
              >
                {hoverTip.text}
              </div>
            )}
          </div>
        </article>
      </section>
    </BackgroundFrame>
  );
}
