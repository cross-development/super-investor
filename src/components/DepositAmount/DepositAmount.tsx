//Packages
import Slider from "rc-slider";
//Styles
import { Wrapper, AmountInput, AmountLabel } from "./DepositAmount.styles";

interface IProps {
  amount: number;
  currency: string;
  onChangeAmount: (amount: number) => void;
}

const DepositAmount = ({ amount, currency, onChangeAmount }: IProps) => {
  return (
    <Wrapper>
      <Slider value={amount} onChange={onChangeAmount} />

      <AmountLabel>
        <AmountInput />

        {currency}
      </AmountLabel>
    </Wrapper>
  );
};

export default DepositAmount;
