//Packages
import Slider from "rc-slider";
//Styles
import { Wrapper, RateWrap, Rate } from "./DepositTerm.styles";

interface IProps {
  rate: number;
  term: number;
  onChangeTerm: (term: number) => void;
}

const DepositTerm = ({ rate, term, onChangeTerm }: IProps) => {
  return (
    <Wrapper>
      <Slider value={term} onChange={onChangeTerm} />

      <RateWrap>
        <Rate>
          Процентная ставка
          {rate}% <span>годовых</span>
        </Rate>
      </RateWrap>
    </Wrapper>
  );
};

export default DepositTerm;
