import Section from './Section';

function OutputLogsSection() {
  return (
    <Section title="Output Logs">
      <textarea
        style={{
          minHeight: '25rem',
          width: '100%',
          resize: 'vertical',
        }}
        readOnly
      />
    </Section>
  );
}

export default OutputLogsSection;
