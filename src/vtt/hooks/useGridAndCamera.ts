import * as PIXI from "pixi.js"
import { useEffect } from "react"
import { createCamera } from "../helpers/createCamera";
import { createGrid } from "../helpers/createGrid";

export function useGridAndCamera(
    app: PIXI.Application | null,
    worldWidth: number,
    worldHeight: number) {

    useEffect(() => {
        if (!app) return;
        if (!app.canvas) return;
        const canvas = app.canvas;
        const camera = createCamera(app, worldWidth, worldHeight);
        const gridLayer = createGrid(camera, { cellSize: 50, worldWidth, worldHeight });
        camera.view.addChild(gridLayer.view);
        app.stage.addChild(camera.view)

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
            camera.zoomBy(zoomDelta);
        };

        canvas.addEventListener("wheel", onWheel);
        return () => {

            canvas.removeEventListener("wheel", onWheel);
            gridLayer.destroy();
            camera.view.destroy({ children: true });
        };
    }, [app, worldWidth, worldHeight]);
}