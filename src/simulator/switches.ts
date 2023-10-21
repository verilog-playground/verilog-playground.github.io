import { Component, ComponentProps } from './component';
import { Switch } from './switch';

export class Switches extends Component {
  static readonly count = 8;

  static readonly gap = 24;

  static readonly width =
    Switches.count * Switch.width + (Switches.count - 1) * Switches.gap;
  static readonly height = Switch.height;

  static async create(props: ComponentProps) {
    const instance = new Switches(props);

    for (let i = 0; i < Switches.count; i++) {
      await Switch.create({
        x: props.x + i * (Switch.width + Switches.gap),
        y: props.y,
        canvasCtx: props.canvasCtx,
      });
    }

    return instance;
  }
}
