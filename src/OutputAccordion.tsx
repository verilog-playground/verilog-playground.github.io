import { Clear, ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Log from './Log';
import React from 'react';

interface OutputAccordionProps {
  logs: Log[];
  onClearLogsClick(): void;
}

function OutputAccordion(props: OutputAccordionProps) {
  const theme = useTheme();

  // Same as FilledInput.
  const backgroundColor = React.useMemo(() => {
    const light = theme.palette.mode === 'light';
    return light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
  }, [theme.palette.mode]);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>Output</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          padding="1rem"
          minHeight="20rem"
          sx={{
            backgroundColor,
          }}
        >
          {props.logs.map((log) => {
            let color = theme.palette.info.main;
            if (log.type === 'warning') {
              color = theme.palette.warning.main;
            } else if (log.type === 'error') {
              color = theme.palette.error.main;
            }

            return (
              <Typography fontFamily="Monospace" color={color}>
                {log.message}
              </Typography>
            );
          })}
        </Box>
        <Box display="flex" flexDirection="row-reverse" marginTop="1rem">
          <Button
            variant="outlined"
            startIcon={<Clear />}
            onClick={props.onClearLogsClick}
          >
            Clear
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default OutputAccordion;
