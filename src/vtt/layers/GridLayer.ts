import * as PIXI from "pixi.js";

type GridConfig = {
  cellSize: number;
  color?: number;
};

export class GridLayer {
  readonly view: PIXI.Graphics;
  private cellSize: number;
  private color: number;

  constructor({ cellSize, color = 0x444444 }: GridConfig) {
    this.cellSize = cellSize;
    this.color = color;
    this.view = new PIXI.Graphics();
  }

  resize(width: number, height: number) {
    this.view.clear();

    for (let x = 0; x <= width; x += this.cellSize) {
      this.view
        .moveTo(x, 0)
        .lineTo(x, height)
        .stroke({ width: 1, color: this.color });
    }

    for (let y = 0; y <= height; y += this.cellSize) {
      this.view
        .moveTo(0, y)
        .lineTo(width, y)
        .stroke({ width: 1, color: this.color });
    }
  }

  destroy() {
    this.view.destroy();
  }
}
