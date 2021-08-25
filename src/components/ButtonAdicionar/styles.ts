import styled, { css } from "styled-components";

interface IMyButtonProps {
  size: "default" | "small";
  variant: "rectangular" | "square";
}

export const StyledButton = styled.button<IMyButtonProps>`
  // Retangular como default
  display: flex;
  align-items: center;
  width: 100%;

  border: 0.2rem dashed ${(props) => props.theme.palette.text};
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    filter: brightness(1.1);
  }

  > svg {
    font-size: 3.6rem;
  }

  > span {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.text};
    padding-left: 1rem;
  }

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 0.5rem;

      > svg {
        font-size: 2.4rem;
      }

      > span {
        font-size: 1.6rem;
        padding-left: 0.5rem;
      }
    `}

  // Quadrado
  ${(props) =>
    props.variant === "square" &&
    css`
      flex-direction: column;
      justify-content: center;

      width: 30rem;
      height: 25rem;

      > svg {
        font-size: 5.6rem;
      }
    `}

    ${(props) =>
    props.variant === "square" &&
    props.size === "small" &&
    css`
      flex-direction: column;
      justify-content: center;

      width: 16rem;
      height: 14rem;

      > svg {
        font-size: 3.6rem;
      }
    `}
`;
