import LcdDisplay from './LcdDisplay';
import styles from './BottomBoard.module.css';

function BottomBoard() {
  return (
    <div className={styles.BottomBoard}>
      <div className={styles.Content}>
        <LcdDisplay />
      </div>
    </div>
  );
}

export default BottomBoard;
