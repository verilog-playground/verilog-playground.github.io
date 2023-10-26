import styles from './TopBoard.module.css';
import SevenSegmentDisplay from './SevenSegmentsDisplay';
import Switches from './Switches';

interface TopBoardProps {
  readonly sevenSegmentsDisplayValue: number;
  readonly switchesDefaultValue: number;

  onSwitchesChange?(value: number): void;
}

function TopBoard(props: TopBoardProps) {
  return (
    <div className={styles.TopBoard}>
      <div className={styles.Content}>
        <SevenSegmentDisplay value={props.sevenSegmentsDisplayValue} />
        <Switches
          defaultValue={props.switchesDefaultValue}
          onChange={props.onSwitchesChange}
        />
      </div>
    </div>
  );
}

export default TopBoard;
