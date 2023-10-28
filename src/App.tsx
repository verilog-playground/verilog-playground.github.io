import React from 'react';
import AppBar from './AppBar';
import SimulatorWrapper from './Simulator';
import AccordionsWrapper from './AccordionsWrapper';
import Transpiler from './Transpiler';
import Log from './Log';
import ToggleColorMode from './ToggleColorMode';
import { CssBaseline } from '@mui/material';

function App() {
  const [isTranspiling, setIsTranspiling] = React.useState(false);
  const [logs, setLogs] = React.useState<Log[]>([]);

  const onRunClick = (code: string) => {
    setIsTranspiling(true);

    Transpiler.transpile(code, (log) => setLogs((logs) => [...logs, log]))
      .then()
      .catch(() => {})
      .finally(() => setIsTranspiling(false));
  };

  const onClearLogsClick = () => {
    setLogs([]);
  };

  return (
    <ToggleColorMode>
      <CssBaseline />
      <AppBar />
      <SimulatorWrapper isTranspiling={isTranspiling} />
      <AccordionsWrapper
        isTranspiling={isTranspiling}
        logs={logs}
        onRunClick={onRunClick}
        onClearLogsClick={onClearLogsClick}
      />
    </ToggleColorMode>
  );
}

export default App;
