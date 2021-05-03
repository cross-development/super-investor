//Packages
import DatePicker from "react-datepicker";
//Styles
import { CalendarWrap } from "./DepositDate.styles";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  term: number;
  startDate: Date;
  onChangeStartDate: (date: Date) => void;
}

const DepositDate = ({ onChangeStartDate, startDate, term }: IProps) => {
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + term);

  return (
    <CalendarWrap>
      <DatePicker
        selected={startDate}
        dateFormat="dd MMMM yyyy"
        onChange={onChangeStartDate}
      />

      <DatePicker
        disabled
        selected={endDate}
        dateFormat="dd MMMM yyyy"
        onChange={() => {}}
      />
    </CalendarWrap>
  );
};

export default DepositDate;
