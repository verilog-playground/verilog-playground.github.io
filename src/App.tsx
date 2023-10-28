import React from 'react';
import AppBar from './AppBar';
import SimulatorWrapper from './Simulator';
import AccordionsWrapper from './AccordionsWrapper';
import Transpiler from './Transpiler';

function App() {
  const [isTranspiling, setIsTranspiling] = React.useState(false);

  const onRunClick = (code: string) => {
    setIsTranspiling(true);

    Transpiler.transpile(code)
      .then()
      .catch(() => {})
      .finally(() => setIsTranspiling(false));
  };

  return (
    <>
      <AppBar />
      <SimulatorWrapper isTranspiling={isTranspiling} />
      <AccordionsWrapper
        isTranspiling={isTranspiling}
        onRunClick={onRunClick}
      />
    </>
  );
}

export default App;
