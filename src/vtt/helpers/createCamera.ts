import * as PIXI from "pixi.js";
import { Camera } from "../engine/camera";
export function createCamera(
    app: PIXI.Application,
    worldWidth: number,
    worldHeight: number
) {
    const camera = new Camera();
    app.stage.addChild(camera.view);

    const zoomX = app.screen.width / worldWidth;
    const zoomY = app.screen.height / worldHeight;
    camera.setZoom(Math.min(zoomX, zoomY));
    camera.view.position.set(
        app.screen.width / 2 - (worldWidth * camera.view.scale.x) / 2,
        app.screen.height / 2 - (worldHeight * camera.view.scale.y) / 2
    );
    const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
        camera.zoomBy(zoomDelta);
    }
    app.canvas.addEventListener("wheel", onWheel);
    return camera;
}