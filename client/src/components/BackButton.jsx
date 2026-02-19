import { useNavigate } from 'react-router-dom';

export default function BackButton({ fallback = '/', className = '' }) {
  const navigate = useNavigate();

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(fallback);
  }

  return (
    <button type="button" className={`btn-secondary ${className}`.trim()} onClick={goBack}>
      Volver
    </button>
  );
}
