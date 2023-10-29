import React from 'react';
import MainBoard from './MainBoard';
import { TranspilationContext } from '../App';

function Simulator() {
  const [seg, setSeg] = React.useState(0);
  const [swi, setSwi] = React.useState(0);
  const [led, setLed] = React.useState(0);
  const [clk, setClk] = React.useState(false);

  const transpilationContext = React.useContext(TranspilationContext);

  const module = React.useMemo(() => {
    if (transpilationContext.transpiledCode === '') {
      return null;
    }

    // eslint-disable-next-line no-new-func
    return new Function(
      transpilationContext.transpiledCode + '\n\nreturn Module;',
    )();
  }, [transpilationContext.transpiledCode]);

  const trySimulate = React.useCallback(() => {
    if (module === null || module.simulate === undefined) {
      return;
    }

    const simulation = JSON.parse(module.simulate(swi, clk));
    setLed(simulation.led);
    setSeg(simulation.seg);
  }, [clk, module, swi]);

  const onSwiChange = (swi: number) => {
    setSwi(swi);

    trySimulate();
  };

  React.useEffect(() => {
    setTimeout(() => {
      setClk(!clk);
    }, 1000);

    trySimulate();
  }, [clk, trySimulate]);

  return (
    <MainBoard
      sevenSegmentsDisplayValue={seg}
      switchesDefaultValue={swi}
      ledsValue={led}
      onSwitchesChange={onSwiChange}
    />
  );
}

export default Simulator;
