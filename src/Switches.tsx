import React from 'react';
import Switch from './Switch';
import './Switches.css';

interface SwitchesProps {
  readonly value?: number;
  onChange?(value: number): void;
}

function Switches(props: SwitchesProps) {
  const [value, setValue] = React.useState(props.value ?? 0);

  const onChange = (value: number) => {
    setValue(value);
    props.onChange?.(value);
  };

  const getBooleanAtIndex = (index: number) => {
    return ((value >> index) & 1) === 1;
  };

  const setBooleanAtIndex = (index: number, on: boolean) => {
    onChange(value + (on ? 1 << index : -(1 << index)));
  };

  const renderSwitches = () => {
    const switches = [];

    for (let i = 0; i < 8; i++) {
      switches.push(
        <Switch
          key={i}
          on={getBooleanAtIndex(i)}
          onChange={(on) => setBooleanAtIndex(i, on)}
        />,
      );
    }

    return switches;
  };

  return <div className="Switches">{renderSwitches()}</div>;
}

export default Switches;
