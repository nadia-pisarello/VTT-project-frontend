import * as PIXI from "pixi.js";

type GridConfig = {
  cellSize: number;
  worldWidth: number;
  worldHeight: number;
  color?: number;
};

export class GridLayer {
  readonly view: PIXI.Graphics;
  private cellSize: number;
  private worldWidth: number;
  private worldHeight: number;
  private color: number;

  constructor({ cellSize, worldWidth,
    worldHeight, color = 0x444444 }: GridConfig) {
    this.cellSize = cellSize;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.color = color;
    this.view = new PIXI.Graphics();
    this.build()
  }
  private build() {
    this.view.clear();

    for (let x = 0; x <= this.worldWidth; x += this.cellSize) {
      this.view
        .moveTo(x, 0)
        .lineTo(x, this.worldHeight)
        .stroke({ width: 1, color: this.color });
    }

    for (let y = 0; y <= this.worldHeight; y += this.cellSize) {
      this.view
        .moveTo(0, y)
        .lineTo(this.worldWidth, y)
        .stroke({ width: 1, color: this.color });
    }
  }

  destroy() {
    this.view.destroy();
  }
}
