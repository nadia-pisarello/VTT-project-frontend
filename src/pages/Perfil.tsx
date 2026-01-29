import { Link } from "react-router-dom";
import { Partidas } from "../features/partida/components/partida";

export default function Perfil() {
  return (
    <main>
      <h1>Perfil</h1>
      <Link to="/">Home</Link>
      <Partidas />
    </main>
  );
}
