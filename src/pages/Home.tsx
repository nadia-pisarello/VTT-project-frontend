import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <main>
      {isAuthenticated ? (
        <>
          <Link to="/perfil">Perfil</Link>
          <br />
          <button onClick={logout}>Salir</button>
        </>
      ) : (
        <>
          <Link to="/login">Iniciar sesión</Link>
        </>
      )}
    </main>
  );
}
