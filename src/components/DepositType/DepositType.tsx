//Core
import React from "react";
//Styles
import { Wrapper, SelectLabel, Select, Radio } from "./DepositType.styles";

interface IProps {
  currency: string;
  onChangeCurrency: (currency: string) => void;
}

const DepositType = ({ currency, onChangeCurrency }: IProps) => {
  return (
    <Wrapper>
      <SelectLabel>
        Тип депозита
        <Select></Select>
      </SelectLabel>

      <Radio>
        <input id="radio-1" type="radio" value="uah" name="currency" checked />
        <label htmlFor="radio-1">UAH</label>
      </Radio>

      <Radio>
        <input id="radio-2" type="radio" value="rub" name="currency" />
        <label htmlFor="radio-2">RUB</label>
      </Radio>

      <Radio>
        <input id="radio-3" type="radio" value="eur" name="currency" />
        <label htmlFor="radio-3">EUR</label>
      </Radio>

      <Radio>
        <input id="radio-4" type="radio" value="usd" name="currency" />
        <label htmlFor="radio-4">USD</label>
      </Radio>
    </Wrapper>
  );
};

export default DepositType;
