import { useState } from "react";
import { iCard, iDecimals, iNumber } from "../../models";
import { getDecimal, getRandomNum } from "../../utils/generals";
import Card from "../../components/Card";

const Bingo = () => {
  const [Cards, setCards] = useState<iCard[]>([]);
  // const [calledNumbers, setCalledNumbers] = useState<number[]>([]);

  const generateCards = () => {
    const decimalGroups: iDecimals = {};
    const cardsArray: iCard[] = [];

    for (let i = 1; i <= 90; i++) {
      var decimal = getDecimal(i);
      decimal = decimal === 9 ? decimal - 1 : decimal;
      if (decimalGroups[decimal] === undefined) decimalGroups[decimal] = [];
      decimalGroups[decimal].push(i);
    }
    const cardsAmount = 6;
    for (var i = 0; i < cardsAmount; i++) {
      const Card: iCard = generateCard(decimalGroups);
      cardsArray.push(Card);
    }

    setCards(cardsArray);
  };

  const generateCard = (decimals: iDecimals): iCard => {
    const card: iCard = {};
    for (let i = 0; i < 15; i++) {
      const lessUsedDec: number[] = getLessUsedDec(decimals);
      const decimal: number = lessUsedDec[getRandomNum(0, lessUsedDec.length)];
      const number: iNumber = getNumber(decimals[decimal]);
      if (card[decimal] === undefined) card[decimal] = [];
      card[decimal].push(number);
    }

    for (let i = 0; i < 9; i++) {
      if (card[i] === undefined) card[i] = [];
      while (card[i].length < 3) {
        let randomIndex = Math.floor(Math.random() * (card[i].length + 1));
        card[i].splice(randomIndex, 0, { value: 0, match: false });
      }
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

      if (arrayLength === decCounter) {
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

  const cardsList = Cards.map((x, i) => <Card key={i} numbers={x} />);

  return (
    <div>
      <button onClick={generateCards}>GENERATE CARDS!</button>
      <div className="container">{cardsList}</div>
    </div>
  );
};

export default Bingo;
