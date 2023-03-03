
export function getMinesArray(firstClickedCell: number): Set<number> {
  const MinesArray:Set<number> = new Set();

  while (MinesArray.size < 40) {
    MinesArray.add(Math.floor(Math.random() * 256));
    MinesArray.has(firstClickedCell) && MinesArray.delete(firstClickedCell);
  }

  return MinesArray;
}
