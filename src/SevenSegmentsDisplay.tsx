import React from 'react';
import sevenSegmentDisplaySrc from './images/seven-segment-display.png';
import './SevenSegmentDisplay.css';

function SevenSegmentDisplay() {
  return (
    <img
      className="SevenSegmentDisplay"
      alt="seven-segment display"
      src={sevenSegmentDisplaySrc}
    />
  );
}

export default SevenSegmentDisplay;
