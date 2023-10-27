import { Editor } from '@monaco-editor/react';
import { Code, ExpandMore, PlayArrow, Restore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';

function CodeEditorAccordion() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>Code Editor</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ outline: 'solid darkgray 1px' }}>
          <Editor height="500px" defaultLanguage="systemverilog" />
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Box flexGrow={1}>
            <Button variant="contained" startIcon={<PlayArrow />}>
              Run
            </Button>
          </Box>
          <Button variant="outlined" startIcon={<Restore />}>
            Restore
          </Button>
          <Button variant="outlined" startIcon={<Code />}>
            Reset
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default CodeEditorAccordion;
