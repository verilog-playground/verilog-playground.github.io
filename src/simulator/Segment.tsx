import React from 'react';
import horizontalSegmentOff from './images/horizontal-segment-off.png';
import horizontalSegmentOn from './images/horizontal-segment-on.png';
import verticalSegmentOff from './images/vertical-segment-off.png';
import verticalSegmentOn from './images/vertical-segment-on.png';
import dotSegmentOff from './images/dot-segment-off.png';
import dotSegmentOn from './images/dot-segment-on.png';

interface SegmentProps {
  readonly type: 'horizontal' | 'vertical' | 'dot';

  readonly state: 'on' | 'off';

  readonly top: string;
  readonly left: string;
}

const imgSrcs = {
  horizontal: {
    off: horizontalSegmentOff,
    on: horizontalSegmentOn,
  },
  vertical: {
    off: verticalSegmentOff,
    on: verticalSegmentOn,
  },
  dot: {
    off: dotSegmentOff,
    on: dotSegmentOn,
  },
};

function Segment(props: SegmentProps) {
  const styles: React.CSSProperties = {
    position: 'absolute',
    minWidth: 'min-content',
    minHeight: 'min-content',
    top: props.top,
    left: props.left,
  };

  const getSrc = () => {
    return imgSrcs[props.type][props.state];
  };

  return (
    <img
      style={styles}
      alt={`${props.type} segment ${props.state}`}
      src={getSrc()}
    />
  );
}

export default Segment;
