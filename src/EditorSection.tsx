import { Editor } from '@monaco-editor/react';
import Section from './Section';
import styles from './CodeEditorSection.module.css';

function CodeEditorSection() {
  return (
    <Section title="Code Editor">
      <div className={styles.Outline}>
        <Editor height="500px" defaultLanguage="systemverilog" />
      </div>
    </Section>
  );
}

export default CodeEditorSection;
