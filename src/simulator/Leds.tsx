import Led from './Led';
import styles from './Leds.module.css';

interface LedsProps {
  readonly value: number;
}

function Leds(props: LedsProps) {
  const getStateAtIndex = (index: number) => {
    const on = ((props.value >> index) & 1) === 1;

    return on ? 'on' : 'off';
  };

  const renderLeds = () => {
    const leds = [];

    for (let i = 7; i >= 0; i--) {
      leds.push(<Led key={i} state={getStateAtIndex(i)} />);
    }

    return leds;
  };

  return <div className={styles.Leds}>{renderLeds()}</div>;
}

export default Leds;
