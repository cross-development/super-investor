//Core
import { ReactNode } from "react";
//Styles
import { Section } from "./Calculator.styles";

interface IProps {
  children: ReactNode;
}

const Calculator = ({ children }: IProps) => <Section>{children}</Section>;

export default Calculator;
