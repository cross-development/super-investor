//Styles
import { Button } from "./SubmitButton.styles";

interface IProps {
  type?: "button" | "submit" | "reset";
}

const SubmitButton = ({ type = "button" }: IProps) => (
  <Button type={type}>Инвестировать сейчас</Button>
);

export default SubmitButton;
