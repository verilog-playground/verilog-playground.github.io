import React from 'react';
import './TopBoard.css';
import SevenSegmentDisplay from './SevenSegmentsDisplay';
import Switches from './Switches';

function TopBoard() {
  return (
    <div className="Image">
      <div className="Content">
        <SevenSegmentDisplay />
        <Switches value={334} />
      </div>
    </div>
  );
}

export default TopBoard;
