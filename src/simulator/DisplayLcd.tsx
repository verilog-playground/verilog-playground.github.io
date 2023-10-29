import React from 'react';
import { TranspilationContext } from '../App';
import styles from './DisplayLcd.module.css';
import LcdDisplayCharacter from './LcdDisplayCharacter';

function DisplayLcd() {
  const transpilationContext = React.useContext(TranspilationContext);

  const [index, setIndex] = React.useState(0);

  const animation = React.useMemo(() => {
    setIndex(0);

    const transpilationState = transpilationContext.transpilationState;
    if (transpilationState === 'initial') {
      return {
        loop: true,
        frames: [
          ['    Welcome!    '],
          ['    Welcome!    '],
          ['  Run The Code  ', '      Below    v'],
          ['  Run The Code v', '      Below     '],
          ['  Run The Code  ', '      Below    v'],
          ['  Run The Code v', '      Below     '],
          ['  Run The Code  ', '      Below    v'],
          ['  Run The Code v', '      Below     '],
          ['  Run The Code  ', '      Below    v'],
        ],
      };
    } else if (transpilationState === 'transpiling') {
      return {
        loop: true,
        frames: [
          [' Transpiling   v', 'Check The Logs  '],
          [' Transpiling.   ', 'Check The Logs v'],
          [' Transpiling.. v', 'Check The Logs  '],
          [' Transpiling... ', 'Check The Logs v'],
        ],
      };
    } else if (transpilationState === 'success') {
      return {
        loop: false,
        frames: [
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
          ['Success! Play   ', 'With The Board ^'],
          ['Success! Play  ^', 'With The Board  '],
        ],
      };
    } else if (transpilationState === 'error') {
      return {
        loop: true,
        frames: [
          ['     Error!    v', 'Check The Logs  '],
          ['     Error!     ', 'Check The Logs v'],
        ],
      };
    }

    return { loop: false, frames: [[]] };
  }, [transpilationContext.transpilationState]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => index + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [animation.frames.length]);

  const text = React.useMemo(() => {
    if (animation.loop || index < animation.frames.length) {
      return animation.frames[index % animation.frames.length];
    } else {
      return [];
    }
  }, [animation, index]);

  return (
    <div className={styles.DisplayLcd}>
      <div className={styles.Content}>
        <LcdDisplayCharacter text={text} />
      </div>
    </div>
  );
}

export default DisplayLcd;
