import React from "react";

import { StyledInput } from "./styles";

interface IMyInputProps {
  placeholder?: string;
  size?: "default" | "large" | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<IMyInputProps> = ({
  placeholder = "",
  size = "default",
  value,
  onChange,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      inputSize={size}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
