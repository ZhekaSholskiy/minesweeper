import { MinesCounter } from './MinesCounter/MinesCounter'
import { Smile } from './Smile/Smile'
import { TimeCounter } from './TimeCounter/TimeCounter'
import './appheader.css'
export function AppHeader(props: {minesAmount: Set<number>, gameState: string, worrySmile: boolean, newGame: () => void}) {
  return (
    <div className="app-header">
        <MinesCounter minesAmount={props.minesAmount}/>
        <Smile gameState={props.gameState} worrySmile={props.worrySmile} newGame={props.newGame}/>
        <TimeCounter gameState={props.gameState}/>
    </div>
  )
}
