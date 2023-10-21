import { SevenSegmentsDisplay } from './seven-segments-display';
import { Board } from './board';
import { ComponentProps } from './component';
import topBoardSrc from './images/top-board.png';
import Util from './util';
import { Switches } from './switches';

export interface TopBoardProps extends ComponentProps {
  readonly img: HTMLImageElement;
}

export class TopBoard extends Board {
  static readonly topPadding = 7;
  static readonly bottomPadding = 15;
  static readonly leftPadding = 13;
  static readonly rightPadding = 15;

  static readonly midGap = 24;

  static readonly width =
    TopBoard.leftPadding + Switches.width + TopBoard.rightPadding;
  static readonly height =
    TopBoard.topPadding +
    SevenSegmentsDisplay.height +
    TopBoard.midGap +
    Switches.height +
    TopBoard.bottomPadding;

  private constructor(props: TopBoardProps) {
    super({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: props.img,

      width: TopBoard.width,
      height: TopBoard.height,

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

    await Switches.create({
      x: props.x + TopBoard.leftPadding,
      y:
        props.y +
        TopBoard.topPadding +
        SevenSegmentsDisplay.height +
        TopBoard.midGap,
      canvasCtx: props.canvasCtx,
    });

    return instance;
  }
}
