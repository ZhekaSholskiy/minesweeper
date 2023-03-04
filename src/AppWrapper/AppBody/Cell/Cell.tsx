import { useEffect, useRef, useState } from 'react';
import './cell.css';
import { ICell, states } from './TCell';

export function Cell(props: ICell) {
  const cellRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(10);

  useEffect(() => {
    if (props.gameState.getValue === 'start' && state !== 14) {
      setState(10);
    }
  }, [props.gameState])

  function rightClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    if (props.gameState.getValue !== 'game-over' && props.gameState.getValue !== 'game-win') {
      setState(state => {
        if (state === 10) {
          props.addMine();
          return 12
        } else if (state === 12) {
          props.removeMine();
          return 13
        } else if (state === 13) return 10;
        else return state;
      })
    }
  }

  function leftClickHandler(e: React.MouseEvent<HTMLDivElement>) {
    if (props.gameState.getValue !== 'game-over' && props.gameState.getValue !== 'game-wim' && e.button === 0 && state !== 12 && state !== 13) {
      if (props.gameState.getValue === 'start') {
        props.setMinesArray();
        props.gameState.setValue('continuing');
        setState(props.setIsOpenedArray());
      } else if (props.mine) {
        props.gameState.setValue('game-over');
        setState(9);
      } else {
        setState(props.setIsOpenedArray());
      }
    }
  }

  useEffect(() => {
    if (props.isOpenedCell) {
      setState(props.setIsOpenedArray());
    }
  }, [props.isOpenedCell])

  return (
    <div className={`cell-container ${states[state]}
                   ${props.gameState.getValue === 'game-over' && props.mine && state !== 12 && 'mined-cell-hidden'}
                   ${props.gameState.getValue === 'game-over' && !props.mine && state === 12 && 'fake-mine'}`}
         onMouseUp={(e) => leftClickHandler(e)}
         onMouseOver={() => {
          if (state === 10 && props.gameState.getValue !== 'game-over' && props.isMousedown) {
            setState(14);
            props.setWorrySmile(true);
          }
        }}
        onMouseOut={() => {
          if (state === 14 && props.gameState.getValue !== 'game-over' && props.isMousedown) {
            setState(10);
          }
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          if (e.button === 0 && props.gameState.getValue !== 'game-over' && state === 10) {
            setState(14);
            props.setWorrySmile(true);
          }
        }}
        onContextMenu={(e) => rightClickHandler(e)}
         ref={cellRef}>
    </div>
  )
}
