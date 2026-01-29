import { useState } from "react";
import { useAsync } from "../../../hooks/useAsync";
import {
  type MisPartidasResponseDTO,
  type PartidaResponseDTO,
} from "../partida.dto";
import { PartidaService } from "../partida.service";
import { ListaPartidas } from "./listarPartidas";

export function Partidas() {
  const {
    data,
    loading,
    error,
    execute: refetch,
  } = useAsync<MisPartidasResponseDTO>(PartidaService.getAll);
  const [nombre, setNombre] = useState("");

  const handletCrearPartida = async () => {
    if (!nombre.trim()) return;
    const nuevaPartida: PartidaResponseDTO = await PartidaService.create({
      nombre,
    });
    setNombre("");
    await refetch();
    console.log("Partida creada:", nuevaPartida);
  };

  if (loading) {
    return <div>Cargando partidas...</div>;
  }
  if (error) {
    return <div>Error al cargar las partidas: {error.message}</div>;
  }
  if (!data) {
    return <div>No hay datos de partidas</div>;
  }
  const { dm, jugador } = data;
  const sinPartidas = dm.length === 0 && jugador.length === 0;

  return (
    <section>
      {sinPartidas && <p>No tienes partidas aún. Puedes crear una</p>}
      {dm.length > 0 && <ListaPartidas partidas={dm} />}
      {jugador.length > 0 && <ListaPartidas partidas={jugador} />}
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre de la partida"
      />
      <button onClick={handletCrearPartida} disabled={!nombre.trim()}>
        Crear partida
      </button>
    </section>
  );
}
