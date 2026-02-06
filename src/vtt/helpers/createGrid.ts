import type { Camera } from "../engine/camera";
import { GridLayer } from "../layers/GridLayer";

interface GridOptions {
    cellSize: number;
    worldWidth: number;
    worldHeight: number;
}
export function createGrid(camera: Camera, options: GridOptions) {
    const gridLayer = new GridLayer(options);
    camera.view.addChild(gridLayer.view);
    return gridLayer;
}