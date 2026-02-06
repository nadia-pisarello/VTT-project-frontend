import { useRef } from "react";
import { usePixiApp } from "./hooks/usePixiApp";
import { useGridAndCamera } from "./hooks/useGridAndCamera";
import { Link, useParams } from "react-router-dom";
import { usePersonaje } from "../features/personaje/usePersojane";
import { Overlay } from "./components/overlay";
import { Invitar } from "./components/invitar";
import { CrearPersonaje } from "../features/personaje/components/crearPersonaje";

export default function VTT() {
  const { id } = useParams<{ id: string }>();
  const { personaje } = usePersonaje(Number(id));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { app } = usePixiApp(containerRef);
  useGridAndCamera(app, 5000, 5000);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* UI React */}
      <Overlay>
        <div style={{ pointerEvents: "auto", color: "white" }}>
          <Link to={"/perfil"}>Perfil</Link>
          {personaje.length === 0 && (
            <section>
              <p>No tenés personajes en esta partida</p>
              <CrearPersonaje />
            </section>
          )}{" "}
          {personaje.length > 0 && <p>Tenés {personaje.length} personaje/s</p>}
          <Invitar canInvite={true} partidaId={Number(id)} />
        </div>
      </Overlay>

      {/* Pixi */}
      <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}
