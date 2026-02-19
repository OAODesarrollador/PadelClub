import { useEffect, useMemo, useState } from 'react';
import { apiGet } from '../api/http.js';

function buildEmbedUrl(mapLink, address) {
  try {
    if (mapLink) {
      const url = new URL(mapLink);
      if (url.searchParams.get('output') === 'embed') return url.toString();
      const q = url.searchParams.get('q');
      if (q) return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
    }
  } catch {
    // ignore invalid URL and fallback
  }

  if (address) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  }

  return '';
}

export default function CompanyFooter({ clubSlug = 'club-paddle-demo' }) {
  const [club, setClub] = useState(null);

  useEffect(() => {
    let active = true;
    apiGet(`/public/club/${clubSlug}`)
      .then((data) => {
        if (active) setClub(data);
      })
      .catch(() => {
        if (active) setClub(null);
      });
    return () => {
      active = false;
    };
  }, [clubSlug]);

  const mapEmbedUrl = useMemo(
    () => buildEmbedUrl(club?.mapLink, club?.address),
    [club?.mapLink, club?.address]
  );

  return (
    <footer className="app-footer-track p-5 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section>
          <h3 className="text-lg font-semibold text-slate-100">{club?.name || 'ClubPaddle'}</h3>
          <p className="text-sm text-slate-200/90 mt-2">{club?.address || 'Dirección no configurada'}</p>
          <p className="text-sm text-slate-200/90 mt-1">WhatsApp: {club?.whatsapp || 'No configurado'}</p>
          {club?.mapLink && (
            <a className="inline-block mt-3 text-sm underline text-emerald-200 hover:text-emerald-100" href={club.mapLink} target="_blank" rel="noreferrer">
              Abrir mapa
            </a>
          )}
        </section>

        <section>
          {mapEmbedUrl ? (
            <iframe
              title="Ubicación del club"
              src={mapEmbedUrl}
              loading="lazy"
              className="w-full h-44 rounded-lg border border-white/20"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-44 rounded-lg border border-white/20 flex items-center justify-center text-sm text-slate-200/90 bg-black/20">
              Mapa no disponible
            </div>
          )}
        </section>
      </div>

      <p className="text-xs text-slate-300/85 mt-4">© {new Date().getFullYear()} {club?.name || 'ClubPaddle'}. Todos los derechos reservados.</p>
    </footer>
  );
}
