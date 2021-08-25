import React, { useState } from "react";
import { useTheme } from "styled-components";

import { BsEye, BsEyeSlash } from "react-icons/bs";

import { Container, StyledInput } from "./styles";

interface IMyInputPasswordProps {
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputPassword: React.FC<IMyInputPasswordProps> = ({
  placeholder = "",
  value,
  onChange,
}) => {
  const theme = useTheme();

  const [passowordVisible, setPassowordVisible] = useState(false);

  return (
    <Container>
      <StyledInput
        type={passowordVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {passowordVisible ? (
        <BsEyeSlash
          fontSize={24}
          color={theme.palette.secondary}
          onClick={() => setPassowordVisible(!passowordVisible)}
        />
      ) : (
        <BsEye
          fontSize={24}
          color={theme.palette.secondary}
          onClick={() => setPassowordVisible(!passowordVisible)}
        />
      )}
    </Container>
  );
};

export default InputPassword;
