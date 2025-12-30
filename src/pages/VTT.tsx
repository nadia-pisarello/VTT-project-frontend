import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
// import { Link } from "react-router-dom";

export default function VTT() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;
    const app = new PIXI.Application();
    (async () => {
      await app.init({
        resizeTo: window,
        backgroundColor: 0x2b2b2b,
        antialias: true,
      });
      app.canvas.style.display = "block";
      container.current!.appendChild(app.canvas);
      // Create grid background
      const grid = new PIXI.Graphics();
      const gridSize = 50;
      // líneas verticales
      for (let x = 0; x <= window.innerWidth; x += gridSize) {
        grid.moveTo(x, 0).lineTo(x, innerHeight);
      }
      // líneas horizontales
      for (let y = 0; y <= window.innerHeight; y += gridSize) {
        grid.moveTo(0, y).lineTo(innerWidth, y);
      }
      grid.stroke({ width: 1, color: 0xffffff });
      app.stage.addChild(grid);
    })();

    return () => {
      app.destroy(true);
    };
  }, []);

  return (
    <main>
      <div ref={container} style={{ width: "100vw", height: "100vh" }} />
    </main>
  );
}
