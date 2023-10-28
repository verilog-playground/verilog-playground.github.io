import { Box } from '@mui/material';
import CodeEditorAccordion from './CodeEditorAccordion';
import OutputAccordion from './OutputAccordion';

function AccordionsWrapper() {
  return (
    <Box margin="0 1rem 1rem 1rem">
      <CodeEditorAccordion />
      <OutputAccordion />
    </Box>
  );
}

export default AccordionsWrapper;
