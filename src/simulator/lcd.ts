import { Component, ComponentProps } from './component';
import lcdSrc from './lcd.png';
import Util from './util';

export interface LcdProps extends ComponentProps {
  img: HTMLImageElement;
}

export class Lcd extends Component {
  constructor(props: LcdProps) {
    super(props);

    props.canvasCtx.drawImage(props.img, props.x, props.y);
  }

  static async create(props: ComponentProps) {
    const img = await Util.loadImage(lcdSrc);

    return new Lcd({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img,
    });
  }
}
