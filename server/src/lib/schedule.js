function toMinutes(hhmm) {
  if (typeof hhmm !== 'string') return null;
  const m = hhmm.match(/^(\d{2}):(\d{2})$/);
  if (!m) return null;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  return hh * 60 + mm;
}

function normalizeRanges(rawRanges) {
  if (!Array.isArray(rawRanges)) return [];
  return rawRanges
    .map((r) => ({
      startMinute: toMinutes(r?.start),
      endMinute: toMinutes(r?.end)
    }))
    .filter((r) => Number.isInteger(r.startMinute) && Number.isInteger(r.endMinute) && r.endMinute > r.startMinute);
}

export function parseScheduleJson(scheduleJson) {
  if (!scheduleJson) return {};
  if (typeof scheduleJson === 'object') return scheduleJson;
  try {
    return JSON.parse(scheduleJson);
  } catch {
    return {};
  }
}

export function getActiveRangesForDate(scheduleJson, date) {
  const schedule = parseScheduleJson(scheduleJson);
  const day = new Date(`${date}T00:00:00`).getDay();

  const dayRanges = normalizeRanges(schedule[String(day)]);
  if (dayRanges.length > 0) return dayRanges;

  const defaultRanges = normalizeRanges(schedule.default);
  if (defaultRanges.length > 0) return defaultRanges;

  return [{ startMinute: 0, endMinute: 24 * 60 }];
}

export function buildDaySlots(date, intervalMinutes = 60) {
  const base = new Date(`${date}T00:00:00`);
  const slots = [];
  for (let minute = 0; minute < 24 * 60; minute += intervalMinutes) {
    const start = new Date(base);
    start.setMinutes(minute, 0, 0);
    slots.push({ startAt: start.toISOString(), minuteOfDay: minute });
  }
  return slots;
}

export function isInsideActiveRanges(ranges, startDate, endDate) {
  const startMinute = startDate.getHours() * 60 + startDate.getMinutes();
  const endMinute = endDate.getHours() * 60 + endDate.getMinutes();
  return ranges.some((r) => startMinute >= r.startMinute && endMinute <= r.endMinute);
}
