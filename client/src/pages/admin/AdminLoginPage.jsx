import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../../api/http.js';
import BackgroundFrame from '../../components/BackgroundFrame.jsx';
import BackButton from '../../components/BackButton.jsx';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@club.local');
  const [password, setPassword] = useState('admin1234');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const data = await apiPost('/admin/auth/login', { email, password });
      localStorage.setItem('admin_access_token', data.accessToken);
      localStorage.setItem('admin_refresh_token', data.refreshToken);
      localStorage.setItem('admin_role', data.user.role);
      navigate('/admin/agenda');
    } catch {
      setError('Credenciales inválidas');
    }
  }

  return (
    <BackgroundFrame tone="tone-admin">
      <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <form className="card w-full max-w-md grid gap-3" onSubmit={submit}>
          <BackButton fallback="/" />
          <h2 className="text-2xl font-semibold">Admin login</h2>
          <input className="border rounded p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" className="border rounded p-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          {error && <p className="text-red-700 text-sm">{error}</p>}
          <button className="btn-primary">Entrar</button>
        </form>
      </main>
    </BackgroundFrame>
  );
}

