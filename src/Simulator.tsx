import { Box } from '@mui/material';
import Simulator from './simulator/Simulator';

function SimulatorWrapper() {
  return (
    <Box position="relative" margin="2rem auto" width="fit-content">
      <Simulator />
    </Box>
  );
}

export default SimulatorWrapper;
