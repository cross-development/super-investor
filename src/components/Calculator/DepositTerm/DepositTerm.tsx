//Core
import { useState } from "react";
//Packages
import DatePicker from "react-datepicker";
//Styles
import { CalendarWrap } from "./DepositTerm.styles";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {}

const DepositTerm = ({ onChangeDate, startDate }: IProps) => {
  return (
    <CalendarWrap>
      <DatePicker selected={startDate} onChange={onChangeDate} />

      <DatePicker selected={startDate} onChange={onChangeDate} />
    </CalendarWrap>
  );
};

export default DepositTerm;
