

// получаем зону из клеток, в которой проверяем наличие мин
// если клетка находится на краю поля, обрезаем зону
export function getCheckingCells(key: number) {

  const checkingCells = [key-17,key-16,key-15,key-1,key,key+1,key+15,key+16,key+17];

  if (key <= 15) checkingCells.splice(0, 3);
  if (key > 239) checkingCells.splice(checkingCells.length - 3, 3);
  if ((key % 16 === 0) || key === 0) {
    checkingCells.splice(0,1);
    checkingCells.splice(2,1);
    checkingCells.splice(4,1);
  }
  if (((key + 1) % 16 === 0) || key === 15) {
    checkingCells.splice(2,1);
    checkingCells.splice(4,1);
    checkingCells.splice(6,1);
  }

  return checkingCells;
}
