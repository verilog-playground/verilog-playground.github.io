import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

interface ToggleColorModeProps {
  readonly children: React.ReactNode;
}

function ToggleColorMode(props: ToggleColorModeProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
