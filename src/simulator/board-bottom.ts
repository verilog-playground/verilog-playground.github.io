import { Board } from './board';
import { ComponentProps } from './component';
import { Lcd } from './lcd';
import boardBottomSrc from './board-bottom.png';
import Util from './util';

export interface BoardBottomProps extends ComponentProps {
  readonly boardBottomImg: HTMLImageElement;
}

export class BoardBottom extends Board {
  private constructor(props: BoardBottomProps) {
    super({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      boardImg: props.boardBottomImg,

      width: 511,
      height: 176,

      top: 3,
      bottom: 3,
      left: 3,
      right: 3,
    });
  }

  static async create(props: ComponentProps) {
    const img = await Util.loadImage(boardBottomSrc);

    const instance = new BoardBottom({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      boardBottomImg: img,
    });

    await Lcd.create({
      x: props.x + 6,
      y: props.y + 6,
      canvasCtx: props.canvasCtx,
    });

    return instance;
  }
}
