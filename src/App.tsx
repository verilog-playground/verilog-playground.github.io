import React from 'react';
import AppBar from './AppBar';
import SimulatorWrapper from './Simulator';
import AccordionsWrapper from './AccordionsWrapper';
import Transpiler from './Transpiler';
import Log from './Log';
import ToggleColorMode from './ToggleColorMode';
import { CssBaseline } from '@mui/material';

export const TranspilationContext = React.createContext({
  transpilationState: '',
  isTranspiling: false,
  logs: new Array<Log>(),
  transpiledCode: '',
  onRunClick: (_code: string) => {},
  onClearLogsClick: () => {},
});

function App() {
  const [transpilationState, setTranspilationState] = React.useState('initial');
  const [isTranspiling, setIsTranspiling] = React.useState(false);
  const [logs, setLogs] = React.useState<Log[]>([]);
  const [transpiledCode, setTranspiledCode] = React.useState('');

  const onRunClick = (code: string) => {
    setTranspilationState('transpiling');
    setIsTranspiling(true);
    setTranspiledCode('');

    Transpiler.transpile(code, (log) => setLogs((logs) => [...logs, log]))
      .then((transpiledCode) => {
        setTranspilationState('success');
        setTranspiledCode(transpiledCode);
      })
      .catch(() => {
        setTranspilationState('error');
      })
      .finally(() => setIsTranspiling(false));
  };

  const onClearLogsClick = () => {
    setLogs([]);
  };

  const transpilationContext = React.useMemo(() => {
    return {
      transpilationState,
      isTranspiling,
      logs,
      transpiledCode,
      onRunClick,
      onClearLogsClick,
    };
  }, [isTranspiling, logs, transpilationState, transpiledCode]);

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
