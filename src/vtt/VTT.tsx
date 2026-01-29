import { useRef } from "react";
import { usePixiApp } from "./hooks/usePixiApp";
import { useGridAndCamera } from "./hooks/useGridAndCamera";
import { useParams } from "react-router-dom";
import { usePersonaje } from "../features/personaje/usePersojane";

export default function VTT() {
  const { id } = useParams<{ id: string }>();
  const { personaje } = usePersonaje(Number(id));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { app } = usePixiApp(containerRef);
  useGridAndCamera(app, 5000, 5000);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* UI React */}
      {personaje.length === 0 && (
        <p>No tenés personajes en esta partida</p>
      )}{" "}
      {personaje.length > 0 && <p>Tenés {personaje.length} personaje/s</p>}
      {/* VTT / Pixi */}
      <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}
