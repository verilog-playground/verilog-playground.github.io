import React from 'react';
import { Simulator } from './simulator/simulator';

function App() {
  const [simulator, setSimulator] = React.useState<Simulator | undefined>(
    undefined,
  );

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) {
      return;
    }

    const canvasCtx = canvas.getContext('2d')!;
    canvasCtx.imageSmoothingEnabled = false;

    Simulator.create(canvasCtx).then((simulator) => setSimulator(simulator));
  }, [canvasRef]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={Simulator.width}
        height={Simulator.height}
      />
    </div>
  );
}

export default App;
