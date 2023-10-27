import React from 'react';
import MainBoard from './MainBoard';

function Simulator() {
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
