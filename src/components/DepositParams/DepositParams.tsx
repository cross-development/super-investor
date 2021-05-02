//Core
import React from "react";
//Packages
import Slider from "rc-slider";
//Styles
import {} from "./DepositParams.styles";
import "rc-slider/assets/index.css";

interface IProps {}

const DepositParams = (props: IProps) => {
  return (
    <div>
      <Slider />

      <Slider />
    </div>
  );
};

export default DepositParams;
