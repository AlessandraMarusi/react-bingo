import { useState } from "react";
import { iCard, iNumber } from "../../models";

const Bingo = () => {
  const [Cards, setCards] = useState<iCard[]>([]);
  const [calledNumbers, setCalledNumbers] = useState<iNumber[]>([]);

  const numbersArray: number[] = Array.from(
    { length: 90 },
    (_, index) => index + 1
  );

  const generateCards = () => {
    //const decimalGroups = divideByDec();
    //Loop X volte:
    //generateCard(decimalGroups)
  };

  const divideByDec = () => {};

  const generateCard = () => {
    //Loop 15 volte:
    //lessUsedDec = GetLessUsedDec(decimalGroups);
    //const decimal = Scelgo un numero casuale da lessUsedDec
    //const number = getNumber(decimalGroups[decimal]);
  };

  const getLessUsedDec = () => {
    //Loop per contare quale sia il decimale meno usato e pusharlo in un array
  };
  const getNumber = () => {
    //Get random number su array del decimalGroups[decimal] per avere il numero
    //Push numero nella Card
  };

  return <div>Bingo!</div>;
};

export default Bingo;
