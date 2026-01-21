import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Moleman</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/partidas">Partidas</Link>
    </main>
  );
}
