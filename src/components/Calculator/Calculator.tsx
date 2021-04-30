//Core
import { useState } from "react";
//Components
import DepositType from "./DepositType";
import DepositParams from "./DepositParams";
import DepositTerm from "./DepositTerm";
//Styles
import { Section } from "./Calculator.styles";

interface Props {}

const Calculator = ({}: Props) => {
  return (
    <Section>
      <DepositType />

      <DepositParams />

      <DepositTerm />
    </Section>
  );
};

export default Calculator;
