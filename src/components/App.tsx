//Core
import { FormEvent, useState } from "react";
//Components
import Calculator from "components/Calculator";
import TotalResults from "components/TotalResults";
import { Layout, DepositForm } from "components/Commons";
//Helpers
import { ITotal } from "helpers/interfaces";

function App() {
  const [depositType, setDepositType] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [totalResults, setTotalResults] = useState<ITotal>({} as ITotal);

  const handleDeposit = (total: ITotal) => setTotalResults(total);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const profit = ((amount * rate) / 12) * term;
    const amountWithProfit = amount + profit;

    const total = {
      currency,
      amount,
      amountWithProfit,
      profit,
    };

    handleDeposit(total);
  };

  return (
    <Layout>
      <DepositForm onSubmit={handleSubmit}>
        <Calculator />

        <TotalResults total={totalResults} />
      </DepositForm>
    </Layout>
  );
}

export default App;
