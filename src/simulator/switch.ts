import { Component, ComponentProps } from './component';
import Util from './util';
import offSrc from './images/switch-off.png';
import onSrc from './images/switch-on.png';

export interface SwitchProps extends ComponentProps {
  offImg: HTMLImageElement;
  onImg: HTMLImageElement;
}

export class Switch extends Component {
  static readonly width = 36;
  static readonly height = 82;

  constructor(props: SwitchProps) {
    super(props);

    props.canvasCtx.drawImage(props.offImg, props.x, props.y);
  }

  static async create(props: ComponentProps) {
    const offImg = await Util.loadImage(offSrc);
    const onImg = await Util.loadImage(onSrc);

    return new Switch({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      offImg,
      onImg,
    });
  }
}
