import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  readonly title: string;
  readonly children?: React.ReactNode;
}

function Section(props: SectionProps) {
  console.log(props.children);
  return (
    <div className={styles.Section}>
      <p>{props.title}</p>
      <div>{props.children}</div>
    </div>
  );
}

export default Section;
