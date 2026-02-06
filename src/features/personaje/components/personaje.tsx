import { useAsync } from "../../../hooks/useAsync";
import { PersonajeService } from "../personaje.service";
import type { Personaje } from "../personaje.dto";
export function Personaje({ partidaId }: { partidaId: number }) {
  const { data, loading, error } = useAsync<Personaje[]>(() =>
    PersonajeService.getPersonajesDePartida(partidaId),
  );
  if (loading) {
    return <div>Cargando personajes...</div>;
  }
  if (error) {
    return <div>Error al cargar los personajes: {error.message}</div>;
  }
  if (!data) {
    return <div>No hay datos de personajes</div>;
  }
  return (
    <section>
      {data.map((personaje) => (
        <div key={personaje.id}>
          <h3>{personaje.nombre}</h3>
        </div>
      ))}
    </section>
  );
}
