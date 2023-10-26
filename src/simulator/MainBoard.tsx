import BottomBoard from './BottomBoard';
import TopBoard from './TopBoard';
import styles from './MainBoard.module.css';

function MainBoard() {
  return (
    <div className={styles.MainBoard}>
      <div className={styles.Content}>
        <TopBoard />
        <BottomBoard />
      </div>
    </div>
  );
}

export default MainBoard;
