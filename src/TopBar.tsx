import styles from './TopBar.module.css';
import { BsGithub } from 'react-icons/bs';

function TopBar() {
  return (
    <div className={styles.TopBar}>
      <p className={styles.Title}>Verilog Playground</p>
      <div />
      <a
        href="https://github.com/verilog-playground"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub color="white" size="2rem" />
      </a>
    </div>
  );
}

export default TopBar;
