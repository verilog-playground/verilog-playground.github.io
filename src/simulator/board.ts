import { Component, ComponentProps } from './component';

export interface BoardProps extends ComponentProps {
  readonly img: HTMLImageElement;

  readonly width: number;
  readonly height: number;

  readonly top: number;
  readonly bottom: number;
  readonly left: number;
  readonly right: number;
}

export class Board extends Component {
  constructor(props: BoardProps) {
    super(props);

    // Center
    props.canvasCtx.drawImage(
      props.img,

      props.left,
      props.top,
      props.img.width - props.left - props.right,
      props.img.height - props.top - props.bottom,

      props.x + props.left,
      props.y + props.top,
      props.width - props.left - props.right,
      props.height - props.top - props.bottom,
    );

    // Right
    props.canvasCtx.drawImage(
      props.img,

      props.img.width - props.right,
      props.top,
      props.right,
      props.img.height - props.top - props.bottom,

      props.x + props.width - props.right,
      props.y + props.top,
      props.right,
      props.height - props.top - props.bottom,
    );

    // Bottom-right
    props.canvasCtx.drawImage(
      props.img,

      props.img.width - props.right,
      props.img.height - props.bottom,
      props.right,
      props.bottom,

      props.x + props.width - props.right,
      props.y + props.height - props.bottom,
      props.right,
      props.bottom,
    );

    // Bottom
    props.canvasCtx.drawImage(
      props.img,

      props.left,
      props.img.height - props.bottom,
      props.img.width - props.left - props.right,
      props.bottom,

      props.x + props.left,
      props.y + props.height - props.bottom,
      props.width - props.left - props.right,
      props.bottom,
    );

    // Bottom-left
    props.canvasCtx.drawImage(
      props.img,

      0,
      props.img.height - props.bottom,
      props.left,
      props.bottom,

      props.x,
      props.y + props.height - props.bottom,
      props.left,
      props.bottom,
    );

    // Left
    props.canvasCtx.drawImage(
      props.img,

      0,
      props.top,
      props.left,
      props.img.height - props.top - props.bottom,

      props.x,
      props.y + props.top,
      props.left,
      props.height - props.top - props.bottom,
    );

    // Top-left
    props.canvasCtx.drawImage(
      props.img,

      0,
      0,
      props.left,
      props.top,

      props.x,
      props.y,
      props.left,
      props.top,
    );

    // Top
    props.canvasCtx.drawImage(
      props.img,

      props.left,
      0,
      props.img.width - props.left - props.right,
      props.top,

      props.x + props.left,
      props.y,
      props.width - props.left - props.right,
      props.top,
    );

    // Top-right
    props.canvasCtx.drawImage(
      props.img,

      props.img.width - props.right,
      0,
      props.right,
      props.top,

      props.x + props.width - props.right,
      props.y,
      props.right,
      props.top,
    );
  }
}
