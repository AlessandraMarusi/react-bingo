import { iCard, iColumn, iNumber } from "../../models";

export const parseCardNumbers = (cardNums: iCard): iNumber[] => {
  return Object.values(cardNums).flat();
};
