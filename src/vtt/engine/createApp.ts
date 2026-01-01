import * as PIXI from "pixi.js";

export async function createPixiApp(container: HTMLDivElement) {
  const app = new PIXI.Application();

  await app.init({
    resizeTo: window,
    backgroundColor: 0x2b2b2b,
  });

  app.canvas.style.display = "block";
  container.appendChild(app.canvas);

  return app;
}
