import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Moleman</h1>
      <Link to="/login">Login</Link>
      <Link to="/partidas">Partidas</Link>
      <Link to="/vtt">Virtual Tabletop</Link>
    </main>
  );
}
