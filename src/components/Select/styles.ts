import styled, { css } from "styled-components";

interface IStyledISelect {
  inputSize: "default" | "large";
}

export const StyledSelect = styled.select<IStyledISelect>`
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

  :required:invalid {
    color: #777;
  }

  option[value=""][disabled] {
    display: none;
  }

  option {
    color: ${(props) => props.theme.palette.textSecondary};
  }

  ${(props) =>
    props.inputSize === "large" &&
    css`
      height: 6rem;
      font-size: 2.4rem;
    `}
`;
