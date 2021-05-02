//Core
import { ReactNode } from "react";
//Styles
import { Section } from "./TotalResults.styles";

interface IProps {
  children: ReactNode;
}

const TotalResults = ({ children }: IProps) => <Section>{children}</Section>;

export default TotalResults;
