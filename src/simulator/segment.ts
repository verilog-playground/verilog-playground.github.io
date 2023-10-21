import { Component, ComponentProps } from './component';
import Util from './util';
import hOffSrc from './images/horizontal-segment-off.png';
import hOnSrc from './images/horizontal-segment-on.png';
import vOffSrc from './images/vertical-segment-off.png';
import vOnSrc from './images/vertical-segment-on.png';
import dOffSrc from './images/dot-segment-off.png';
import dOnSrc from './images/dot-segment-on.png';

export interface SegmentProps extends ComponentProps {
  offImg: HTMLImageElement;
  onImg: HTMLImageElement;
}

export interface SegmentCreateProps extends ComponentProps {
  readonly type: 'h' | 'v' | 'd';
}

export class Segment extends Component {
  constructor(props: SegmentProps) {
    super(props);

    props.canvasCtx.drawImage(props.offImg, props.x, props.y);
  }

  static async create(props: SegmentCreateProps) {
    let offSrc = hOffSrc;
    if (props.type === 'v') {
      offSrc = vOffSrc;
    } else if (props.type === 'd') {
      offSrc = dOffSrc;
    }

    let onSrc = hOnSrc;
    if (props.type === 'v') {
      onSrc = vOnSrc;
    } else if (props.type === 'd') {
      onSrc = dOnSrc;
    }

    const offImg = await Util.loadImage(offSrc);
    const onImg = await Util.loadImage(onSrc);

    return new Segment({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      offImg,
      onImg,
    });
  }
}
