import DisplayLcd from './DisplayLcd';
import styles from './BottomBoard.module.css';

function BottomBoard() {
  return (
    <div className={styles.BottomBoard}>
      <div className={styles.Content}>
        <DisplayLcd />
      </div>
    </div>
  );
}

export default BottomBoard;
