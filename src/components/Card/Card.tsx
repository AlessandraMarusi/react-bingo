import React, { useState } from "react";
import { iCard, iNumber } from "../../models";
import { parseCardNumbers } from "./CardParser";
import CardNumber from "../CardNumber";
import "./CardStyl";

interface iCardProps {
  numbers: iCard;
}

const Card = (props: iCardProps) => {
  const [numbers, setNumbers] = useState<iNumber[]>(
    parseCardNumbers(props.numbers)
  );

  const numbersElList: JSX.Element[] = numbers.map((num, i) => (
    <CardNumber num={num} key={i} />
  ));

  return <div className="">{numbersElList}</div>;
};

export default Card;
