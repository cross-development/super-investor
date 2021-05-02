//Core
import { ReactNode } from "react";
//Styles
import { MainWrap } from "./Main.styles";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => <MainWrap>{children}</MainWrap>;

export default Main;
