import BottomBoard from './BottomBoard';
import TopBoard from './TopBoard';
import styles from './MainBoard.module.css';
import Leds from './Leds';
import VerilogPlayground from './VerilogPlayground';

interface MainBoardProps {
  readonly sevenSegmentsDisplayValue: number;
  readonly switchesDefaultValue: number;
  readonly ledsValue: number;

  onSwitchesChange?(value: number): void;
}

function MainBoard(props: MainBoardProps) {
  return (
    <div className={styles.MainBoard}>
      <div className={styles.Content}>
        <TopBoard
          sevenSegmentsDisplayValue={props.sevenSegmentsDisplayValue}
          switchesDefaultValue={props.switchesDefaultValue}
          onSwitchesChange={props.onSwitchesChange}
        />
        <VerilogPlayground />
        <Leds value={props.ledsValue} />
        <BottomBoard />
      </div>
    </div>
  );
}

export default MainBoard;
