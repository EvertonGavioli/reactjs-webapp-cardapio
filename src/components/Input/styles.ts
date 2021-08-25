import styled, { css } from "styled-components";

interface IStyledInput {
  inputSize: "default" | "large";
}

export const StyledInput = styled.input<IStyledInput>`
  width: 100%;
  height: 4rem;
  border: unset;
  border-radius: 1rem;
  font-size: 1.8rem;
  padding: 0rem 1.6rem;
  margin: 0.4rem 0rem;
  background-color: ${(props) => props.theme.palette.backgroundSecondary};

  &:focus,
  &:active {
    border: 0.1rem solid ${(props) => props.theme.palette.primary};
  }

  ${(props) =>
    props.inputSize === "large" &&
    css`
      height: 6rem;
      font-size: 2.4rem;
    `}
`;
