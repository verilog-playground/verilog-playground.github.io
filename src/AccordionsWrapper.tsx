import { Box } from '@mui/material';
import CodeEditorAccordion from './CodeEditorAccordion';
import OutputAccordion from './OutputAccordion';
import Log from './Log';

interface AccordionsWrapperProps {
  isTranspiling: boolean;
  logs: Log[];
  onRunClick(code: string): void;
  onClearLogsClick(): void;
}

function AccordionsWrapper(props: AccordionsWrapperProps) {
  return (
    <Box margin="0 1rem 1rem 1rem">
      <CodeEditorAccordion
        isTranspiling={props.isTranspiling}
        onRunClick={props.onRunClick}
      />
      <OutputAccordion
        logs={props.logs}
        onClearLogsClick={props.onClearLogsClick}
      />
    </Box>
  );
}

export default AccordionsWrapper;
