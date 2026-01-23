import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isLoggedIn] = useState(false);
  return (
    <main>
      {isLoggedIn ? (
        <Link to="/perfil">Ir a Perfil</Link>
      ) : (
        <Link to="/login">Iniciar Sesión</Link>
      )}
    </main>
  );
}
