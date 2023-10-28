import { Editor } from '@monaco-editor/react';
import { Code, ExpandMore, PlayArrow, Restore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import {
  codeAutoSaveKey,
  codeLastSubmittedKey,
  defaultCode,
} from './constants';

interface CodeEditorAccordionProps {
  isTranspiling: boolean;
  onRunClick(code: string): void;
}

function CodeEditorAccordion(props: CodeEditorAccordionProps) {
  const theme = useTheme();

  // Same as OutlinedInput.
  const borderColor = React.useMemo(() => {
    const light = theme.palette.mode === 'light';
    return light ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  }, [theme.palette.mode]);

  const [code, setCode] = React.useState(
    localStorage.getItem(codeAutoSaveKey) ?? defaultCode,
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(codeAutoSaveKey, code);
    }, 2000);

    return () => clearTimeout(timer);
  }, [code]);

  const onEditorChange = (value?: string) => {
    setCode(value ?? '');
  };

  const onRunClick = () => {
    localStorage.setItem(codeLastSubmittedKey, code);
    props.onRunClick(code);
  };

  const onRestoreClick = () => {
    setCode(localStorage.getItem(codeLastSubmittedKey) ?? defaultCode);
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
        <Box
          sx={{
            outline: `solid ${borderColor} 1px`,
          }}
        >
          <Editor
            height="500px"
            defaultLanguage="systemverilog"
            theme={theme.palette.mode === 'light' ? 'light' : 'vs-dark'}
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
