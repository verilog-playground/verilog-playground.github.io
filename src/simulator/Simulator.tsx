import React from 'react';
import MainBoard from './MainBoard';

interface SimulatorProps {}

function Simulator(props: SimulatorProps) {
  const [value, setValue] = React.useState(0);

  return (
    <MainBoard
      sevenSegmentsDisplayValue={value}
      switchesDefaultValue={value}
      ledsValue={value}
      onSwitchesChange={(value) => setValue(value)}
    />
  );
}

export default Simulator;
