//Core
import styled from "styled-components";

const Wrapper = styled.div``;

const SelectLabel = styled.label``;

const Select = styled.select``;

const Radio = styled.div`
  display: inline-block;
  color: #9b9faa;

  & input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:focus + label::before {
      border-color: #fc842d;
    }
  }

  & label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 0;
    line-height: 18px;
    user-select: none;
    transition: all 250ms linear;
  }

  & label::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 5px;
    top: 5px;
    border-radius: 50px;
    transition: all 250ms linear;
  }

  & label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    border-radius: 50px;
    border: 1px solid #e0e0e0;
    transition: all 250ms linear;
    background-color: #fff;
  }

  /* Checked */
  & input[type="radio"]:checked + label {
    color: #fc842d;
  }

  & input[type="radio"]:checked + label::before {
    background-color: #ffffff;
  }

  & input[type="radio"]:checked + label::after {
    background-color: #fc842d;
  }

  /* Hover */
  & label:hover::before {
    border: 1px solid #fc842d;
  }
`;

export { Wrapper, SelectLabel, Select, Radio };
