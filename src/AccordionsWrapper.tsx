import { Box } from '@mui/material';
import CodeEditorAccordion from './CodeEditorAccordion';
import OutputAccordion from './OutputAccordion';

interface AccordionsWrapperProps {
  isTranspiling: boolean;
  onRunClick(code: string): void;
}

function AccordionsWrapper(props: AccordionsWrapperProps) {
  return (
    <Box margin="0 1rem 1rem 1rem">
      <CodeEditorAccordion
        isTranspiling={props.isTranspiling}
        onRunClick={props.onRunClick}
      />
      <OutputAccordion />
    </Box>
  );
}

export default AccordionsWrapper;
