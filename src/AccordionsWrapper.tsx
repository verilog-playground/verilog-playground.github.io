import { Box } from '@mui/material';
import CodeEditorAccordion from './CodeEditorAccordion';
import LogsAccordion from './LogsAccordion';

function AccordionsWrapper() {
  return (
    <Box margin="0 1rem 1rem 1rem">
      <CodeEditorAccordion />
      <LogsAccordion />
    </Box>
  );
}

export default AccordionsWrapper;
