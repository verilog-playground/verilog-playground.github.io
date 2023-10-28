import { Box, CircularProgress } from '@mui/material';
import Simulator from './simulator/Simulator';
import { TranspilationContext } from './App';
import React from 'react';

function SimulatorWrapper() {
  const transpilationContext = React.useContext(TranspilationContext);

  return (
    <Box position="relative" margin="2rem auto" width="fit-content">
      <Simulator />
      {transpilationContext.isTranspiling && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          sx={{ backgroundColor: 'rgba(200, 200, 200, 0.5)' }}
        >
          <CircularProgress size={100} />
        </Box>
      )}
    </Box>
  );
}

export default SimulatorWrapper;
