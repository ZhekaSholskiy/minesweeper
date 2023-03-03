
export function getCellsAmount() {

  const cycledArray: number[] = [];

  for (let i = 0; i < 256; i++) {
    cycledArray.push(i);
  }

  return cycledArray;
}
