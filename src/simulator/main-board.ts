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
  static readonly topPadding = 7;
  static readonly bottomPadding = 9;
  static readonly leftPadding = 7;
  static readonly rightPadding = 9;

  static readonly midGap = 24;

  static readonly width =
    this.leftPadding +
    Math.max(TopBoard.width, BottomBoard.width) +
    this.rightPadding;
  static readonly height =
    this.topPadding +
    TopBoard.height +
    this.midGap +
    BottomBoard.height +
    this.bottomPadding;

  private constructor(props: MainBoardProps) {
    super({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: props.img,

      width: MainBoard.width,
      height: MainBoard.height,

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
      x: Math.floor(
        props.x +
          this.leftPadding +
          (this.width - this.leftPadding - this.rightPadding) / 2 -
          TopBoard.width / 2,
      ),
      y: props.y + MainBoard.topPadding,
      canvasCtx: props.canvasCtx,
    });

    await BottomBoard.create({
      x: props.x + MainBoard.leftPadding,
      y: props.y + MainBoard.topPadding + TopBoard.height + MainBoard.midGap,
      canvasCtx: props.canvasCtx,
    });

    return instance;
  }
}
