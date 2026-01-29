import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../features/auth/useAuth";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
    navigate("/perfil");
  };

  return (
    <main>
      <h1>Inicio de sesión</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" disabled={loading}>
          Iniciar sesión
        </button>

        <p>
          ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </form>
    </main>
  );
}
