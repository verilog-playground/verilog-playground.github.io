export const codeAutoSaveKey = 'codeAutoSaved';
export const codeLastSubmittedKey = 'codeLastSubmitted';
export const defaultCode = `// DESCRIPTION: SystemVerilog example module.

parameter NBITS_TOP = 8;
module top(input  logic clk_2,
           input  logic [NBITS_TOP-1:0] SWI,
           output logic [NBITS_TOP-1:0] LED,
           output logic [NBITS_TOP-1:0] SEG);

  always_comb begin
    LED <= SWI | clk_2;
    SEG <= SWI;
  end

endmodule`;
