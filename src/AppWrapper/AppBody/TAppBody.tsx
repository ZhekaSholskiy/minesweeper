export interface IMinesAmountControl {
  addMine: (key: number) => void;
  removeMine: (key: number) => void;
}

export interface IMouseCoords {
  x: number,
  y: number
}

export interface IGameState {
  getValue: string,
  setValue: (gameState: string) => void
}
