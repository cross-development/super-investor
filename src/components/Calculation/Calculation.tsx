//Styles
import { Wrapper, Profit, TotalItem, TotalList } from "./Calculation.styles";

interface IProps {
  totalResults: {
    amount: number;
    currency: string;
    amountWithProfit: number;
  };
}

const Calculation = ({ totalResults }: IProps) => {
  const { amount, currency, amountWithProfit } = totalResults;

  return (
    <Wrapper>
      <TotalList>
        <TotalItem>
          Инвестиция{" "}
          <span>
            {amount} {currency}
          </span>
        </TotalItem>

        <TotalItem>
          Процент прибыли{" "}
          <span>
            {amountWithProfit} {currency}
          </span>
        </TotalItem>
      </TotalList>

      <Profit>
        Прибыль с инвестиции{" "}
        <span>
          {amountWithProfit - amount} {currency}
        </span>
      </Profit>
    </Wrapper>
  );
};

export default Calculation;
