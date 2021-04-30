//Core
import { ReactNode } from "react";
//Styles
import { Main } from "./Layout.styles";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => <Main>{children}</Main>;

export default Layout;
