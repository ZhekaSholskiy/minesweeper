import { useState } from 'react'
import { AppBody } from './AppBody/AppBody'
import { AppHeader } from './AppHeader/AppHeader'
import './appwrapper.css'

export function AppWrapper() {
  const [foundMines, setFoundMines] = useState<Set<number>>(new Set());
  const [gameState, setGameState] = useState('start');
  const [worrySmile, setWorrySmile] = useState(false);

  function findMine(key: number) {
    setFoundMines(new Set(foundMines.add(key)));
  }

  function loseMine(key: number) {
    foundMines.delete(key)
    setFoundMines(new Set(foundMines))
  }

  function newGame() {
    setGameState('start');
    setFoundMines(new Set());
  }

  return (
    <div className='container'>
      <AppHeader minesAmount={foundMines} gameState={gameState} worrySmile={worrySmile} newGame={newGame}/>
      <AppBody minesAmountControl={{addMine: findMine, removeMine: loseMine}} gameState={{getValue: gameState, setValue: setGameState}} setWorrySmile={setWorrySmile}/>
    </div>
  )
}
