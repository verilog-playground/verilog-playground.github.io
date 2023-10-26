import sevenSegmentDisplaySrc from './images/seven-segment-display.png';
import styles from './SevenSegmentDisplay.module.css';
import Segment from './Segment';

interface SevenSegmentDisplayProps {
  readonly value: number;
}

function SevenSegmentDisplay(props: SevenSegmentDisplayProps) {
  const getStateAtIndex = (index: number) => {
    const on = ((props.value >> index) & 1) === 1;

    return on ? 'on' : 'off';
  };

  return (
    <div
      className={styles.SevenSegmentDisplay}
      style={{ position: 'relative' }}
    >
      <img alt="seven-segment display" src={sevenSegmentDisplaySrc} />

      <Segment
        type="horizontal"
        state={getStateAtIndex(0)}
        top={'17px'}
        left={'19px'}
      />
      <Segment
        type="vertical"
        state={getStateAtIndex(1)}
        top={'25px'}
        left={'67px'}
      />
      <Segment
        type="vertical"
        state={getStateAtIndex(2)}
        top={'80px'}
        left={'67px'}
      />
      <Segment
        type="horizontal"
        state={getStateAtIndex(3)}
        top={'127px'}
        left={'19px'}
      />
      <Segment
        type="vertical"
        state={getStateAtIndex(4)}
        top={'80px'}
        left={'10px'}
      />
      <Segment
        type="vertical"
        state={getStateAtIndex(5)}
        top={'25px'}
        left={'10px'}
      />
      <Segment
        type="horizontal"
        state={getStateAtIndex(6)}
        top={'72px'}
        left={'19px'}
      />
      <Segment
        type="dot"
        state={getStateAtIndex(7)}
        top={'126px'}
        left={'84px'}
      />
    </div>
  );
}

export default SevenSegmentDisplay;
