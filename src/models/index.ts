// export interface iCard {
//   firstRow: iRow;
//   secondRow: iRow;
//   thirdRow: iRow;
// }

export interface iCard {
  [decimal: number]: iColumn;
}

// export type iRow = iNumber[];
export type iColumn = [iNumber, iNumber, iNumber];

export interface iNumber {
  value: number;
  match: boolean;
}
