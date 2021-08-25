import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.4rem 0rem;

  > svg {
    position: absolute;
    right: 0.8rem;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 4rem;
  border: unset;
  border-radius: 1rem;
  font-size: 1.8rem;
  padding-left: 1.6rem;
  padding-right: 3.6rem;
  background-color: ${(props) => props.theme.palette.backgroundSecondary};

  &:focus,
  &:active {
    border: 0.1rem solid ${(props) => props.theme.palette.primary};
  }
`;
