import { iCard, iNumber } from "../../models";

interface iCardNumberProps {
  num: iNumber;
}

const CardNumber = (props: iCardNumberProps) => {
  return <div>{props.num.value}</div>;
};

export default CardNumber;
