import { Board } from './board';
import { ComponentProps } from './component';
import { Lcd } from './lcd';
import bottomBoardSrc from './images/bottom-board.png';
import Util from './util';

export interface BottomBoardProps extends ComponentProps {
  readonly img: HTMLImageElement;
}

export class BottomBoard extends Board {
  static readonly topPadding = 7;
  static readonly bottomPadding = 9;
  static readonly leftPadding = 7;
  static readonly rightPadding = 9;

  static readonly width = this.leftPadding + Lcd.width + this.rightPadding;
  static readonly height = this.topPadding + Lcd.height + this.bottomPadding;

  private constructor(props: BottomBoardProps) {
    super({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: props.img,

      width: BottomBoard.width,
      height: BottomBoard.height,

      top: 3,
      bottom: 3,
      left: 3,
      right: 3,
    });
  }

  static async create(props: ComponentProps) {
    const img = await Util.loadImage(bottomBoardSrc);

    const instance = new BottomBoard({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img: img,
    });

    await Lcd.create({
      x: props.x + 7,
      y: props.y + 7,
      canvasCtx: props.canvasCtx,
    });

    return instance;
  }
}
