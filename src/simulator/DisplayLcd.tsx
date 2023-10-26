import displayLcdSrc from './images/display-lcd.png';
import styles from './DisplayLcd.module.css';

function DisplayLcd() {
  return (
    <img className={styles.DisplayLcd} alt="display lcd" src={displayLcdSrc} />
  );
}

export default DisplayLcd;
