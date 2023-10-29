import React from 'react';
import lcdDisplayCharacterMap from './lcdDisplayCharacterMap';

interface LcdDisplayCharacterProps {
  readonly text: string[];
}

function LcdDisplayCharacter(props: LcdDisplayCharacterProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const context = React.useMemo(() => {
    if (canvasRef.current === null) {
      return undefined;
    }

    const canvas = canvasRef.current;
    return canvas.getContext('2d')!;
  }, [canvasRef.current]);

  React.useEffect(() => {
    if (context === undefined) {
      return;
    }

    context.fillStyle = '#87ad34';
    context.fillRect(0, 0, 16 * 19 + 15 * 4, 2 * 31 + 4);

    for (let i = 0; i < 2; i++) {
      const line = props.text[i];
      for (let j = 0; j < 16; j++) {
        const character = line?.[j];

        const matrix = lcdDisplayCharacterMap.get(character);
        for (let y = 0; y < 8; y++) {
          for (let x = 0; x < 5; x++) {
            context.fillStyle = '#81a632';
            if ((matrix?.[y]?.charAt(x) ?? '0') === '1') {
              context.fillStyle = '#506625';
            }

            context.fillRect(23 * j + 4 * x, 35 * i + 4 * y, 3, 3);
          }
        }
      }
    }
  }, [context, props.text]);

  return (
    <canvas ref={canvasRef} width={16 * 19 + 15 * 4} height={2 * 31 + 4} />
  );
}

export default LcdDisplayCharacter;
