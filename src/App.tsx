import React from 'react';
import MainBoard from './simulator/MainBoard';

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <MainBoard
        sevenSegmentsDisplayValue={value}
        switchesDefaultValue={value}
        ledsValue={value}
        onSwitchesChange={(value) => setValue(value)}
      />
    </div>
  );
}

export default App;
