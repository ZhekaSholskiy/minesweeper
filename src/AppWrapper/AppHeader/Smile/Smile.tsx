
import { useState } from 'react'
import './smile.css'
const Smile = (props: {gameState: string, worrySmile: boolean, newGame: () => void}) => {

  const [isMouseDown, setIsMousedown] = useState(false);

  return <div className={`smile-container ${props.worrySmile ? 'worry-smile' :
                                            isMouseDown ? 'mousedown-smile' :
                                            props.gameState === 'game-over' ? 'loosed-smile' :
                                            props.gameState === 'game-win' ? 'cool-smile' : 'common-smile'}`}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsMousedown(true)
              }}
              onMouseUp={() => {
                setIsMousedown(false);
                props.newGame();
              }}
              onMouseOut={() => {
                setIsMousedown(false)}}
              >

  </div>
}

export default Smile
