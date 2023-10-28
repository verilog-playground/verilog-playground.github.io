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
import React from 'react';
import { codeKey, defaultCode } from './constants';

interface CodeEditorAccordionProps {
  isTranspiling: boolean;
  onRunClick(code: string): void;
}

function CodeEditorAccordion(props: CodeEditorAccordionProps) {
  const [code, setCode] = React.useState(
    localStorage.getItem(codeKey) ?? defaultCode,
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(codeKey, code);
    }, 2000);

    return () => clearTimeout(timer);
  }, [code]);

  const onEditorChange = (value?: string) => {
    setCode(value ?? '');
  };

  const onRunClick = () => {
    props.onRunClick(code);
  };

  const onRestoreClick = () => {
    setCode(localStorage.getItem(codeKey) ?? defaultCode);
  };

  const onResetClick = () => {
    setCode(defaultCode);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>Code Editor</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ outline: 'solid darkgray 1px' }}>
          <Editor
            height="500px"
            defaultLanguage="systemverilog"
            value={code}
            onChange={onEditorChange}
          />
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Box flexGrow={1}>
            <Button
              variant="contained"
              startIcon={<PlayArrow />}
              disabled={props.isTranspiling}
              onClick={onRunClick}
            >
              Run
            </Button>
          </Box>
          <Button
            variant="outlined"
            startIcon={<Restore />}
            onClick={onRestoreClick}
          >
            Restore
          </Button>
          <Button
            variant="outlined"
            startIcon={<Code />}
            onClick={onResetClick}
          >
            Reset
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default CodeEditorAccordion;
