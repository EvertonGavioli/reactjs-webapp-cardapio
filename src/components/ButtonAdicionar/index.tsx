import React from "react";
import { useTheme } from "styled-components";
import { BsPlus } from "react-icons/bs";

import { StyledButton } from "./styles";

interface IMyButtonProps {
  label: string;
  variant?: "rectangular" | "square";
  size?: "default" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonAdicionar: React.FC<IMyButtonProps> = ({
  label = "",
  variant = "rectangular",
  size = "default",
  onClick,
}) => {
  const theme = useTheme();

  return (
    <StyledButton type="button" onClick={onClick} variant={variant} size={size}>
      <BsPlus color={theme.palette.secondary} />
      <span>{label}</span>
    </StyledButton>
  );
};

export default ButtonAdicionar;
