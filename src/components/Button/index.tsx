import React from "react";

import { StyledButton } from "./styles";

interface IMyButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IMyButtonProps> = ({
  label = "",
  variant = "primary",
  size = "default",
  onClick,
}) => {
  return (
    <StyledButton type="button" onClick={onClick} variant={variant} size={size}>
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
