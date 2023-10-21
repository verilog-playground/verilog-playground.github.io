import { SevenSegmentsDisplay } from './seven-segments-display';
import { Board } from './board';
import { ComponentProps } from './component';
import topBoardSrc from './images/top-board.png';
import Util from './util';

export interface TopBoardProps extends ComponentProps {
  readonly img: HTMLImageElement;
}

export class TopBoard extends Board {
  private constructor(props: TopBoardProps) {
    super({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: props.img,

      width: 511,
      height: 180,

      top: 3,
      bottom: 3,
      left: 3,
      right: 3,
    });
  }

  static async create(props: ComponentProps) {
    const img = await Util.loadImage(topBoardSrc);

    const instance = new TopBoard({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: img,
    });

    await SevenSegmentsDisplay.create({
      x: props.x + 198,
      y: props.y + 7,
      canvasCtx: props.canvasCtx,
    });

    return instance;
  }
}
