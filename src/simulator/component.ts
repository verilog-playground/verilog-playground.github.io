export interface ComponentProps {
  readonly x: number;
  readonly y: number;
  readonly canvasCtx: CanvasRenderingContext2D;
}

export class Component {
  readonly props: ComponentProps;

  constructor(props: ComponentProps) {
    this.props = props;
  }
}
