import { Clear, ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';

function OutputAccordion() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>Output</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box height="20rem" sx={{ backgroundColor: 'gainsboro' }} />
        <Box display="flex" flexDirection="row-reverse" marginTop="1rem">
          <Button variant="outlined" startIcon={<Clear />}>
            Clear
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default OutputAccordion;
