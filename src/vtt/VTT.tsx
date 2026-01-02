import { useRef } from "react";
import { usePixiApp } from "./hooks/usePixiApp";
import { useGridAndCamera } from "./hooks/useGridAndCamera";

export default function VTT() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { app } = usePixiApp(containerRef);
  useGridAndCamera(app, 5000, 5000);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
}
