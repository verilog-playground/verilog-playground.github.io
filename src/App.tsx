import React from 'react';
import AppBar from './AppBar';
import SimulatorWrapper from './Simulator';
import AccordionsWrapper from './AccordionsWrapper';
import Transpiler from './Transpiler';
import Log from './Log';
import ToggleColorMode from './ToggleColorMode';
import { CssBaseline } from '@mui/material';

export const TranspilationContext = React.createContext({
  isTranspiling: false,
  logs: new Array<Log>(),
  onRunClick: (_code: string) => {},
  onClearLogsClick: () => {},
});

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

  const transpilationContext = React.useMemo(() => {
    return {
      isTranspiling,
      logs,
      onRunClick,
      onClearLogsClick,
    };
  }, [isTranspiling, logs]);

  return (
    <ToggleColorMode>
      <CssBaseline />
      <AppBar />
      <TranspilationContext.Provider value={transpilationContext}>
        <SimulatorWrapper />
        <AccordionsWrapper />
      </TranspilationContext.Provider>
    </ToggleColorMode>
  );
}

export default App;
