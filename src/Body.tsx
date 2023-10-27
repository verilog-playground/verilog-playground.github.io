import SimulatorSection from './SimulatorSection';
import styles from './Body.module.css';
import CodeEditorSection from './EditorSection';
import OutputLogsSection from './OutputLogsSection';

function Body() {
  return (
    <div className={styles.Body}>
      <SimulatorSection />
      <CodeEditorSection />
      <OutputLogsSection />
    </div>
  );
}

export default Body;
