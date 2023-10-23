import React from 'react';
import switchOffSrc from './images/switch-off.png';
import switchOnSrc from './images/switch-on.png';
import './Switch.css';

interface SwitchProps {
  readonly on: boolean;
  onChange?(on: boolean): void;
}

function Switch(props: SwitchProps) {
  const [on, setOn] = React.useState(props.on);

  const onClick = () => {
    setOn(!on);
    props.onChange?.(!on);
  };

  return (
    <img
      className="Switch"
      alt="switch"
      draggable={false}
      src={on ? switchOnSrc : switchOffSrc}
      onClick={onClick}
    />
  );
}

export default Switch;
