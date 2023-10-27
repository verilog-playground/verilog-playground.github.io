import { GitHub } from '@mui/icons-material';
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

function AppBar() {
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
          aria-label="GitHub"
          sx={{ mr: 2 }}
          href="https://github.com/verilog-playground"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
