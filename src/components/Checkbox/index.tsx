import React from "react";

import { CheckBoxStyled } from "./styles";

interface IMyCheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<IMyCheckboxProps> = ({ id, checked, onChange }) => {
  return (
    <CheckBoxStyled
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
