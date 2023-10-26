import styles from './TopBoard.module.css';
import SevenSegmentDisplay from './SevenSegmentsDisplay';
import Switches from './Switches';

function TopBoard() {
  return (
    <div className={styles.TopBoard}>
      <div className={styles.Content}>
        <SevenSegmentDisplay value={0} />
        <Switches />
      </div>
    </div>
  );
}

export default TopBoard;
