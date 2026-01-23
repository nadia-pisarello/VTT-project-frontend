import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Link to="/perfil">Perfil</Link>
      <br />
      <Link to="/login">Iniciar Sesión</Link>
    </main>
  );
}
