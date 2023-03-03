import { useEffect, useRef, useState } from 'react';
import './appbody.css';
import { Cell } from './Cell/Cell';
import { getMinesArray } from './getMinesArray';
import { getCheckingCells } from './getCheckingCells';
import { getCellsAmount } from './getCellsAmount';
import { IGameState, IMinesAmountControl } from './TAppBody';

export function AppBody(props: {minesAmountControl: IMinesAmountControl, gameState: IGameState, setWorrySmile: (arg: boolean) => void}) {
  const [minesArray, setMinesArray] = useState<Set<number>>(new Set());
  const [openedCells, setOpenedCells] = useState<Set<number>>(new Set());
  const [isMousedown, setIsMousedown] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // после первого клика генерируем минное поле
  function firstClickAction(key: number) {
    getMinesArray(key).forEach(el => minesArray.add(el));
    setMinesArray(new Set(minesArray))
  }

  function leftClickHandler(key: number) {

      const checkingCells = getCheckingCells(key);
      let minesAround = 0;

      checkingCells.map(el => {
        minesArray.has(el) && ++minesAround;
      });

      function checkGameWin() {
        if (openedCells.size === 216) {
          props.gameState.setValue('game-win');
        }
      }

      // если вокруг нет мин, открываем близлежащие клетки и считаем мины уже вокруг них
      if (minesAround === 0) {

        checkingCells.map(el => openedCells.add(el));

        setOpenedCells(new Set(openedCells));
        checkGameWin();
      } else {
        setOpenedCells(new Set(openedCells.add(key)))
        checkGameWin();
        return minesAround;
      }

      return 11;
  }

  console.log(openedCells)

  useEffect(() => {
    if (props.gameState.getValue === 'start') {
      setMinesArray(new Set());
      setOpenedCells(new Set());
    }

  }, [props.gameState])

    useEffect(() => {
      window.addEventListener('mousedown', (e) => {
        if (e.button === 0) setIsMousedown(true)
      })

      window.addEventListener('mouseup', (e) => {
        if (e.button === 0) {
          props.setWorrySmile(false);
          setIsMousedown(false)
        }
      })
    }, [])

  return (
    <div className="game-area" ref={gameAreaRef}>
      {getCellsAmount().map(i => <Cell
                      key={i}
                      mine={minesArray.has(i)}
                      gameState={props.gameState}
                      setMinesArray={() => firstClickAction(i)}
                      setIsOpenedArray={() => leftClickHandler(i)}
                      isOpenedCell={openedCells.has(i)}
                      addMine={() => props.minesAmountControl.addMine(i)}
                      removeMine={() => props.minesAmountControl.removeMine(i)}
                      isMousedown={isMousedown}
                      setWorrySmile={props.setWorrySmile}
                      />)}
    </div>
  )
}
