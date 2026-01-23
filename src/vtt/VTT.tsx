import { useRef } from "react";
import { usePixiApp } from "./hooks/usePixiApp";
import { useGridAndCamera } from "./hooks/useGridAndCamera";
import { useParams } from "react-router-dom";
import { usePersonaje } from "../personaje/usePersojane";

export default function VTT() {
  const { id } = useParams<{ id: string }>();
  const { personaje, loading } = usePersonaje(Number(id));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { app } = usePixiApp(containerRef);
  useGridAndCamera(app, 5000, 5000);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* UI React */}

      {!loading && personaje.length === 0 && (
        <p>No tenés personajes en esta partida</p>
      )}

      {!loading && personaje.length > 0 && (
        <p>Tenés {personaje.length} personaje/s</p>
      )}
      <pre>
        loading:{loading.toString()} - id partida:{id} - personaje/s:
        {personaje.length}
      </pre>
      {/* VTT / Pixi */}
      <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}
