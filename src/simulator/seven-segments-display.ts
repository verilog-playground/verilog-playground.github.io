import { Component, ComponentProps } from './component';
import { Segment } from './segment';
import src from './images/seven-segments-display.png';
import Util from './util';

export interface SevenSegmentsDisplayProps extends ComponentProps {
  img: HTMLImageElement;
}

export class SevenSegmentsDisplay extends Component {
  static readonly height = 164;

  constructor(props: SevenSegmentsDisplayProps) {
    super(props);

    props.canvasCtx.drawImage(props.img, props.x, props.y);
  }

  static async create(props: ComponentProps) {
    const img = await Util.loadImage(src);

    const instance = new SevenSegmentsDisplay({
      x: props.x,
      y: props.y,
      canvasCtx: props.canvasCtx,

      img,
    });

    Segment.create({
      x: props.x + 19,
      y: props.y + 17,
      canvasCtx: props.canvasCtx,

      type: 'h',
    });

    Segment.create({
      x: props.x + 67,
      y: props.y + 25,
      canvasCtx: props.canvasCtx,

      type: 'v',
    });

    Segment.create({
      x: props.x + 67,
      y: props.y + 80,
      canvasCtx: props.canvasCtx,

      type: 'v',
    });

    Segment.create({
      x: props.x + 19,
      y: props.y + 127,
      canvasCtx: props.canvasCtx,

      type: 'h',
    });

    Segment.create({
      x: props.x + 10,
      y: props.y + 80,
      canvasCtx: props.canvasCtx,

      type: 'v',
    });

    Segment.create({
      x: props.x + 10,
      y: props.y + 25,
      canvasCtx: props.canvasCtx,

      type: 'v',
    });

    Segment.create({
      x: props.x + 19,
      y: props.y + 72,
      canvasCtx: props.canvasCtx,

      type: 'h',
    });

    Segment.create({
      x: props.x + 84,
      y: props.y + 126,
      canvasCtx: props.canvasCtx,

      type: 'd',
    });

    return instance;
  }
}
