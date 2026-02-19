import BackgroundFrame from '../../components/BackgroundFrame.jsx';

export default function NosotrosPage() {
  return (
    <BackgroundFrame tone="tone-public" logoPosition="panel-x" showMainNav>
      <main className="min-h-screen pt-32 pb-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-6">
          <section className="panel-shell p-6 md:p-8">
            <p className="text-xs uppercase tracking-wider muted-text">Conocé ClubPaddle</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Nosotros</h1>
            <p className="mt-3 text-sm md:text-base muted-text max-w-3xl">
              Somos un club orientado a brindar una experiencia simple y profesional para jugadores de todos los niveles.
              Combinamos infraestructura cuidada, gestión ordenada de turnos y atención cercana.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="panel-shell p-5">
              <h2 className="text-lg font-semibold">Misión</h2>
              <p className="text-sm muted-text mt-2">
                Facilitar que cada persona pueda reservar, jugar y disfrutar sin fricción.
              </p>
            </article>
            <article className="panel-shell p-5">
              <h2 className="text-lg font-semibold">Visión</h2>
              <p className="text-sm muted-text mt-2">
                Ser referencia local en calidad operativa, comunidad y desarrollo del pádel.
              </p>
            </article>
            <article className="panel-shell p-5">
              <h2 className="text-lg font-semibold">Valores</h2>
              <p className="text-sm muted-text mt-2">
                Respeto, puntualidad, transparencia y mejora continua en cada servicio.
              </p>
            </article>
          </section>

          <section className="panel-shell p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article>
              <h3 className="text-xl font-semibold">Qué ofrecemos</h3>
              <ul className="mt-3 text-sm muted-text space-y-2">
                <li>Canchas en óptimas condiciones.</li>
                <li>Agenda clara de turnos y disponibilidad.</li>
                <li>Eventos deportivos y sociales durante todo el año.</li>
                <li>Atención personalizada para jugadores y grupos.</li>
              </ul>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Contacto</h3>
              <p className="text-sm muted-text mt-3">
                Estamos disponibles para resolver dudas, coordinar actividades y ayudarte a encontrar el mejor horario.
              </p>
              <button className="btn-primary text-sm mt-4">Hablar con el club</button>
            </article>
          </section>

        </div>
      </main>
    </BackgroundFrame>
  );
}
