import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { createPixiApp } from "./engine/createApp";
import { GridLayer } from "./layers/GridLayer";

export default function VTT() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<PIXI.Application | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let destroyed = false;

    (async () => {
      const app = await createPixiApp(containerRef.current!);
      if (destroyed) return;

      appRef.current = app;
      const gridLayer = new GridLayer({ cellSize: 50 });
      app.stage.addChild(gridLayer.view);
      gridLayer.resize(app.screen.width, app.screen.height);

      window.addEventListener("resize", () => {
        gridLayer.resize(app.screen.width, app.screen.height);
      });
    })();

    return () => {
      destroyed = true;
      window.removeEventListener("resize", () => {});
      appRef.current?.destroy(true);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
}
