import './minescounter.css'
import { digitConverter } from '../digitConverter'
import { Digit } from '../Digit/Digit'

export function MinesCounter(props: {minesAmount: Set<number>}) {

  return <div className="mines-counter-container">
    {digitConverter(40 - props.minesAmount.size).map(el => {
      return <Digit digit={el} key={Math.random().toString(36).substring(2,15)}/>
    })}
  </div>
}
