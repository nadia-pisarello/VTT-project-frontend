import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../features/auth/auth.service";
import { useAuth } from "../features/auth/useAuth";

export function Registro() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await AuthService.register({
      email,
      password,
      nombre,
    });
    await login({ email, password });
    navigate("/perfil");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}
