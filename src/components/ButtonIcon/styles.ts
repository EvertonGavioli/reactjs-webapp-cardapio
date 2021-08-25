import styled, { css } from "styled-components";

interface IStyledButton {
  fullwidth: boolean;
  variant: "fill" | "outlined";
}

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.fullwidth ? "100%" : "12rem")};
  height: 3.6rem;
  margin: 0.4rem 0rem;
  background-color: transparent;

  border-radius: 10rem;
  border: 0.1rem solid ${(props) => props.theme.palette.primary};
  padding: 0rem 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  > svg {
    font-size: 1.6rem;
    color: ${(props) => props.theme.palette.text};
  }

  > span {
    color: ${(props) => props.theme.palette.text};
    padding-left: 0.5rem;
  }

  // Variante Fill
  ${(props) =>
    props.variant === "fill" &&
    css`
      border: none;
      background-color: ${(props) => props.theme.palette.backgroundSecondary};
      justify-content: flex-start;
      padding-left: 2rem;

      > svg {
        color: ${(props) => props.theme.palette.secondary};
      }

      > span {
        color: ${(props) => props.theme.palette.textSecondary};
      }
    `}
`;
