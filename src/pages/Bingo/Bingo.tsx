import { useState } from "react";
import { iCard, iDecimals, iNumber } from "../../models";
import { getDecimal, getRandomNum } from "../../utils/generals";

const Bingo = () => {
  const [Cards, setCards] = useState<iCard[]>([]);
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);

  const generateCards = () => {
    const decimalGroups: iDecimals = {};
    const cardsArray: iCard[] = [];

    for (let i = 1; i <= 90; i++) {
      var decimal = getDecimal(i);
      decimal = decimal == 9 ? decimal - 1 : decimal;
      if (decimalGroups[decimal] == undefined) decimalGroups[decimal] = [];
      decimalGroups[decimal].push(i);
    }
    var counter = 0;
    const cardsAmount = 6;
    for (var i = 0; i < cardsAmount; i++) {
      counter++;
      const Card: iCard = generateCard(decimalGroups);
      cardsArray.push(Card);
    }
  };

  const generateCard = (decimals: iDecimals): iCard => {
    const card: iCard = {};
    for (var i = 0; i < 15; i++) {
      const lessUsedDec: number[] = getLessUsedDec(decimals);
      const decimal: number = lessUsedDec[getRandomNum(0, lessUsedDec.length)];
      const number: iNumber = getNumber(decimals[decimal]);
      if (card[decimal] == undefined) card[decimal] = [];
      card[decimal].push(number);
    }
    return card;
  };

  const getLessUsedDec = (decimals: iDecimals): number[] => {
    const lessUsedDec: number[] = [];
    var decCounter = 0;
    for (const key in decimals) {
      // if (Object.prototype.hasOwnProperty.call(decimals, key)) {
      //   const arrayLength = decimals[key].length;
      // }
      const arrayLength = decimals[key].length;

      if (arrayLength == decCounter) {
        lessUsedDec.push(parseInt(key));
      } else if (arrayLength > decCounter) {
        lessUsedDec.length = 0;
        lessUsedDec.push(parseInt(key));
        decCounter = arrayLength;
      }
    }
    return lessUsedDec;
  };
  const getNumber = (numbers: number[]): iNumber => {
    const index = getRandomNum(0, numbers.length);
    const number = numbers[index];
    numbers.splice(index, 1);
    return { value: number, match: false };
  };

  // const cardsList = Cards.map((x, i) => <Card key={i} numbers={t})

  return (
    <div>
      <button onClick={generateCards}>GENERATE CARDS!</button>
      <div className="container"></div>
    </div>
  );
};

export default Bingo;
