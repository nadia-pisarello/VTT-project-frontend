import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main>
      <Link to="/">Home</Link>
      <h1>Inicio de sesión</h1>
      <form action="">
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
        <p>
          ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </form>
    </main>
  );
}
