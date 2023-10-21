import { Board } from './board';
import { BottomBoard } from './bottom-board';
import { ComponentProps } from './component';
import mainBoardSrc from './images/main-board.png';
import { TopBoard } from './top-board';
import Util from './util';

export interface MainBoardProps extends ComponentProps {
  readonly img: HTMLImageElement;
}

export class MainBoard extends Board {
  private constructor(props: MainBoardProps) {
    super({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: props.img,

      width: 511 + 1 + 6 + 3 + 6,
      height: 176 + 1 + 6 + 3 + 6,

      top: 3,
      bottom: 3,
      left: 3,
      right: 3,
    });
  }

  static async create(props: ComponentProps) {
    const img = await Util.loadImage(mainBoardSrc);

    const instance = new MainBoard({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: img,
    });

    await TopBoard.create({
      x: props.x + 1 + 6,
      y: props.y + 1 + 6,
      canvasCtx: props.canvasCtx,
    });

    await BottomBoard.create({
      x: props.x + 1 + 6,
      y: 200,
      canvasCtx: props.canvasCtx,
    });

    return instance;
  }
}
