import styled, { css } from "styled-components";

interface IMyButtonProps {
  size: "default" | "small";
  variant: "primary" | "secondary";
}

export const StyledButton = styled.button<IMyButtonProps>`
  background-color: ${(props) => props.theme.palette.primary};

  width: 20rem;
  height: 5.2rem;
  margin: 0.4rem 0rem;

  border-color: unset;
  border-radius: 10rem;
  border: none;
  padding: 0rem 1.6rem;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  > span {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.palette.common.text};
  }

  ${(props) =>
    props.size === "small" &&
    css`
      height: 3.6rem;

      > span {
        font-size: 1.6rem;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.palette.text};
      border: 0.2rem solid ${(props) => props.theme.palette.primary};

      > span {
        color: ${(props) => props.theme.palette.text};
      }
    `}
`;
