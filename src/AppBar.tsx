import { Brightness4, Brightness7, GitHub } from '@mui/icons-material';
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { ColorModeContext } from './ThemeProvider';

function AppBar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Verilog Playground
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          sx={{ mr: 2 }}
          href="https://github.com/verilog-playground"
          target="_blank"
        >
          <GitHub />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
