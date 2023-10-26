import ledOnSrc from './images/led-on.png';
import ledOffSrc from './images/led-off.png';
import styles from './Led.module.css';

interface LedProps {
  readonly state: 'on' | 'off';
}

function Led(props: LedProps) {
  return (
    <img
      className={styles.Led}
      alt={`led ${props.state}`}
      src={props.state === 'on' ? ledOnSrc : ledOffSrc}
    />
  );
}

export default Led;
