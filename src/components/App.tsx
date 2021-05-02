//Core
import { FormEvent, useState } from "react";
//Components
import DepositType from "./DepositType";
import DepositParams from "./DepositParams";
import DepositTerm from "./DepositTerm";
import BarChart from "./BarChart";
import Calculation from "./Calculation";
import SubmitButton from "./SubmitButton";
import { Layout, DepositForm } from "components/Commons";
import { Calculator, TotalResults } from "components/Commons";
//Helpers
import { ITotal } from "helpers/interfaces";

function App() {
  const [depositType, setDepositType] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const [totalResults, setTotalResults] = useState<ITotal>({} as ITotal);

  const handleDeposit = (total: ITotal) => setTotalResults(total);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const profit = ((amount * rate) / 12) * term;
    const amountWithProfit = amount + profit;
    const total = { currency, amount, amountWithProfit, profit };

    handleDeposit(total);
  };

  return (
    <Layout>
      <DepositForm onSubmit={handleSubmit}>
        <Calculator>
          <DepositType />
          <DepositParams />
          <DepositTerm
            term={term}
            startDate={startDate}
            onChangeStartDate={setStartDate}
          />
        </Calculator>

        <TotalResults>
          <BarChart totalResults={totalResults} />
          <Calculation totalResults={totalResults} />
          <SubmitButton type="submit" />
        </TotalResults>
      </DepositForm>
    </Layout>
  );
}

export default App;
