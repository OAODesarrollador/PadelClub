import { Link, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/public/LandingPage.jsx';
import EventosPage from './pages/public/EventosPage.jsx';
import NosotrosPage from './pages/public/NosotrosPage.jsx';
import ReservarPage from './pages/public/ReservarPage.jsx';
import ConfirmacionPage from './pages/public/ConfirmacionPage.jsx';
import GestionarPage from './pages/public/GestionarPage.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminAgendaPage from './pages/admin/AdminAgendaPage.jsx';
import AdminConfigPage from './pages/admin/AdminConfigPage.jsx';
import BackgroundFrame from './components/BackgroundFrame.jsx';
import BackButton from './components/BackButton.jsx';

function AdminLayout({ children }) {
  return (
    <BackgroundFrame tone="tone-admin">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <nav className="card flex gap-4 mb-4">
            <BackButton fallback="/" />
            <Link to="/admin/agenda">Agenda</Link>
            <Link to="/admin/config">Configuración</Link>
          </nav>
          {children}
        </div>
      </div>
    </BackgroundFrame>
  );
}

function Protected({ children }) {
  const token = localStorage.getItem('admin_access_token');
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/eventos" element={<EventosPage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/reservar" element={<ReservarPage />} />
      <Route path="/confirmacion/:id" element={<ConfirmacionPage />} />
      <Route path="/gestionar" element={<GestionarPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin/agenda"
        element={
          <Protected>
            <AdminLayout>
              <AdminAgendaPage />
            </AdminLayout>
          </Protected>
        }
      />
      <Route
        path="/admin/config"
        element={
          <Protected>
            <AdminLayout>
              <AdminConfigPage />
            </AdminLayout>
          </Protected>
        }
      />
    </Routes>
  );
}
