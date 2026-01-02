import * as PIXI from "pixi.js";

export class Camera {
    readonly view: PIXI.Container;

    private zoom = 1;
    private minZoom = 0.5;
    private maxZoom = 3;

    constructor() {
        this.view = new PIXI.Container();
    }

    setZoom(value: number) {
        this.zoom = Math.min(this.maxZoom, Math.max(this.minZoom, value));
        this.view.scale.set(this.zoom);
    }

    zoomBy(delta: number) {
        this.setZoom(this.zoom + delta);
    }

    pan(dx: number, dy: number) {
        this.view.position.x += dx;
        this.view.position.y += dy;
    }
}
