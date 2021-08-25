import React from "react";
import { IconType } from "react-icons";

import { StyledButton } from "./styles";

interface IMyButtonProps {
  variant?: "fill" | "outlined";
  label: string;
  Icon: IconType;
  fullwidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonIcon: React.FC<IMyButtonProps> = ({
  variant = "outlined",
  label = "",
  Icon,
  fullwidth = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      fullwidth={fullwidth}
      onClick={onClick}
      {...props}
    >
      <Icon />
      <span>{label}</span>
    </StyledButton>
  );
};

export default ButtonIcon;
