import { Link } from "react-router-dom";
import type { PartidaResponseDTO } from "../partida.dto";

export function ListaPartidas({
  partidas,
}: {
  partidas: PartidaResponseDTO[];
}) {
  return (
    <ul>
      {partidas.map((partida) => (
        <li key={partida.id}>
          <Link to={`/partida/${partida.id}/vtt`}>{partida.nombre}</Link>
        </li>
      ))}
    </ul>
  );
}
