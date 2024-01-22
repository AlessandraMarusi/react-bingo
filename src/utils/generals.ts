export const getRandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const sortNumAscending = (array: number[]): number[] => {
  return array.sort(function (a: number, b: number) {
    return a - b;
  });
};

export const getDecimal = (num: number): number => {
  return Math.floor(num / 10);
};
