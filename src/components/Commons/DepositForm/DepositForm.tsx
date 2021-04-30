//Core
import { FormEvent, ReactNode } from "react";
//Styles
import { Form } from "./DepositForm.styles";

interface IProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const DepositForm = ({ children, onSubmit }: IProps) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default DepositForm;
