//Components
import BarChart from "./BarChart";
import Calculation from "./Calculation";
import SubmitButton from "./SubmitButton";
//Helpers
import { ITotal } from "helpers/interfaces";
//Styles
import { Section } from "./TotalResults.styles";

interface IProps {
  total: ITotal;
}

const TotalResults = ({ total }: IProps) => {
  return (
    <Section>
      <BarChart />

      <Calculation />

      <SubmitButton type="submit" />
    </Section>
  );
};

export default TotalResults;
