import BackgroundFrame from '../../components/BackgroundFrame.jsx';

const upcomingEvents = [
  {
    title: 'Torneo Apertura ClubPaddle',
    date: 'Sábado 21 de febrero - 10:00',
    description: 'Cuadros por categorías intermedia y avanzada. Incluye premios y cierre social.'
  },
  {
    title: 'Clínica de Técnica y Táctica',
    date: 'Miércoles 25 de febrero - 19:30',
    description: 'Sesión intensiva con entrenador certificado para mejorar posicionamiento y toma de decisiones.'
  },
  {
    title: 'Liga Nocturna por Equipos',
    date: 'Desde marzo - Jueves 20:30',
    description: 'Formato por fechas con ranking acumulado y finales mensuales.'
  }
];

export default function EventosPage() {
  return (
    <BackgroundFrame tone="tone-public" logoPosition="panel-x" showMainNav>
      <main className="min-h-screen pt-32 pb-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-6">
          <section className="panel-shell p-6 md:p-8">
            <p className="text-xs uppercase tracking-wider muted-text">Agenda del club</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Eventos</h1>
            <p className="mt-3 text-sm md:text-base muted-text max-w-3xl">
              En esta sección publicamos toda la actividad del club: torneos, clínicas y encuentros especiales.
              La agenda se actualiza cada semana con cupos y horarios confirmados.
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <article key={event.title} className="panel-shell p-5">
                <p className="text-xs font-semibold text-brand-700">{event.date}</p>
                <h2 className="text-lg font-semibold mt-2">{event.title}</h2>
                <p className="text-sm muted-text mt-2">{event.description}</p>
                <button className="btn-secondary text-xs mt-4">Solicitar información</button>
              </article>
            ))}
          </section>

          <section className="panel-shell p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <article>
              <h3 className="text-xl font-semibold">¿Cómo participar?</h3>
              <p className="text-sm muted-text mt-2">
                Podés inscribirte desde recepción del club o por WhatsApp. Si el evento tiene cupos,
                se respeta el orden de confirmación.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Organizá tu evento</h3>
              <p className="text-sm muted-text mt-2">
                También armamos formatos a medida para empresas, grupos privados o clases especiales.
                Coordinamos horarios, canchas y soporte operativo.
              </p>
            </article>
          </section>

        </div>
      </main>
    </BackgroundFrame>
  );
}
