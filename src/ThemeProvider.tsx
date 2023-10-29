import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import React from 'react';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

interface ThemeProviderProps {
  readonly children: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
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
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeProvider;
