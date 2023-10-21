import { MainBoard } from './main-board';

export class Simulator {
  static width = 1000;
  static height = 1000;

  static async create(canvasCtx: CanvasRenderingContext2D) {
    await MainBoard.create({
      x: 0,
      y: 0,
      canvasCtx,
    });

    return new Simulator();
  }
}
