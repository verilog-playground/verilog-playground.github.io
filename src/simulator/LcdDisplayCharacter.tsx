import React from 'react';
import lcdDisplayCharacterMap from './lcdDisplayCharacterMap';

interface LcdDisplayCharacterProps {
  readonly text: string[];
}

function LcdDisplayCharacter(props: LcdDisplayCharacterProps) {
  const PIXEL_L = 3;
  const PIXEL_GAP = 1;

  const LINES = 2;
  const LINE_L = 16;

  const CHAR_C = 5;
  const CHAR_L = 8;
  const CHAR_GAP = 4;

  const CHAR_W = CHAR_C * PIXEL_L + (CHAR_C - 1) * PIXEL_GAP;
  const CHAR_H = CHAR_L * PIXEL_L + (CHAR_L - 1) * PIXEL_GAP;

  const CANVAS_W = LINE_L * CHAR_W + (LINE_L - 1) * CHAR_GAP;
  const CANVAS_H = LINES * CHAR_H + CHAR_GAP;

  const [canvasContext, setCanvasContext] =
    React.useState<CanvasRenderingContext2D>();

  const canvasRef = React.useCallback(
    (canvas: HTMLCanvasElement) => {
      if (canvas === null) {
        return undefined;
      }

      const context = canvas.getContext('2d')!;
      context.imageSmoothingEnabled = false;

      setCanvasContext(context);
    },
    [setCanvasContext],
  );

  React.useEffect(() => {
    if (canvasContext === undefined) {
      return;
    }

    canvasContext.fillStyle = '#87ad34';
    canvasContext.fillRect(0, 0, CANVAS_W, CANVAS_H);

    for (let i = 0; i < LINES; i++) {
      const line = props.text[i];
      for (let j = 0; j < LINE_L; j++) {
        const character = line?.[j];

        const matrix = lcdDisplayCharacterMap.get(character);
        for (let y = 0; y < CHAR_L; y++) {
          for (let x = 0; x < CHAR_C; x++) {
            canvasContext.fillStyle = '#81a632';
            if ((matrix?.[y]?.charAt(x) ?? '0') === '1') {
              canvasContext.fillStyle = '#506625';
            }

            canvasContext.fillRect(
              (CHAR_W + CHAR_GAP) * j + (PIXEL_L + PIXEL_GAP) * x,
              (CHAR_H + CHAR_GAP) * i + (PIXEL_L + PIXEL_GAP) * y,
              PIXEL_L,
              PIXEL_L,
            );
          }
        }
      }
    }
  }, [CANVAS_H, CANVAS_W, CHAR_H, CHAR_W, canvasContext, props.text]);

  return <canvas ref={canvasRef} width={CANVAS_W} height={CANVAS_H} />;
}

export default LcdDisplayCharacter;
