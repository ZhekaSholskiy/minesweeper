
import { useEffect, useRef, useState } from 'react'
import './timecounter.css'
import { digitConverter } from '../digitConverter';
import { Digit } from '../Digit/Digit';
export function TimeCounter(props: {gameState: string}) {
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  useEffect(() => {

    if (props.gameState === 'continuing') {
      let intervalId = setInterval(() => {
        setTimer(state => ++state);
      }, 1000)
      setTimerId(intervalId);
    }

    if (props.gameState === 'game-over' || props.gameState === 'game-win') {
      clearInterval(timerId);
    }

    if (props.gameState === 'start') {
      clearInterval(timerId);
      setTimer(0);
    }

  }, [props.gameState])

  return <div className="time-counter-container">
    {digitConverter(timer).map(el => {
      return <Digit digit={el} key={Math.random().toString(36).substring(2,15)}/>
    })}
  </div>
}
