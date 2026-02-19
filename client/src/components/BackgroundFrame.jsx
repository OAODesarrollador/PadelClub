import { Link, NavLink } from 'react-router-dom';
import CompanyFooter from './CompanyFooter.jsx';

export default function BackgroundFrame({
  tone = 'tone-default',
  logoPosition = 'default',
  showMainNav = false,
  showHeader = true,
  showFooter = true,
  children
}) {
  return (
    <div className={`app-frame ${tone}`}>
      <div className="app-bg-image" />
      <video className="app-bg-video" autoPlay loop muted playsInline poster="/assets/padel-bg.svg">
        <source src="/assets/padel-match.mp4" type="video/mp4" />
      </video>
      <div className="app-bg-overlay" />

      {showHeader && (
        <header className={`app-logo-bar ${logoPosition === 'panel-x' ? 'app-logo-bar--panel-x' : ''}`}>
          <div className={`app-logo-track ${showMainNav ? 'app-logo-track--nav' : ''}`}>
            <Link to="/" className="app-logo-link" aria-label="Ir al inicio">
              <img src="/assets/logoPadel.png" alt="Logo ClubPaddle" className="app-logo-img" />
              <span className="app-logo-text-wrap">
                <strong className="app-logo-title">ClubPaddle</strong>
                <small className="app-logo-subtitle">Reservas de canchas</small>
              </span>
            </Link>

            {showMainNav && (
              <nav className="app-main-nav" aria-label="Menu principal">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'btn-primary text-xs' : 'btn-secondary text-xs'}>
                  Reservas
                </NavLink>
                <NavLink to="/eventos" className={({ isActive }) => isActive ? 'btn-primary text-xs' : 'btn-secondary text-xs'}>
                  Eventos
                </NavLink>
                <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'btn-primary text-xs' : 'btn-secondary text-xs'}>
                  Nosotros
                </NavLink>
              </nav>
            )}
          </div>
        </header>
      )}

      <div className="relative z-10 min-h-screen">
        {children}
        {showFooter && (
          <div className="app-footer-wrap pb-8">
            <CompanyFooter clubSlug="club-paddle-demo" />
          </div>
        )}
      </div>
    </div>
  );
}
