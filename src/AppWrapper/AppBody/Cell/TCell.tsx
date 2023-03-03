import { IGameState, IMinesAmountControl, IMouseCoords } from "../TAppBody";

interface IStates {
  [key: number]: string;
}

export const states: IStates = {
  1: 'one-mine',
  2: 'two-mines',
  3: 'three-mines',
  4: 'four-mines',
  5: 'five-mines',
  6: 'six-mines',
  7: 'seven-mines',
  8: 'eight-mines',
  9: 'blown-up',
  10: 'hidden-cell',
  11: 'open-cell',
  12: 'flagged-cell',
  13: 'question-cell',
  14: 'open-cell',
}

export interface ICell {
  mine: boolean,
  gameState: IGameState,
  setMinesArray: () => void,
  isOpenedCell: boolean,
  setIsOpenedArray: () => number,
  addMine: () => void;
  removeMine: () => void;
  isMousedown: boolean,
  setWorrySmile: (arg: boolean) => void
}
