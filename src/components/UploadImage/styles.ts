import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;

  min-width: 15rem;
  min-height: 15rem;

  border: 2px dashed ${(props) => props.theme.palette.backgroundSecondary};
  border-radius: 1rem;

  > svg {
    font-size: 3rem;
    color: ${(props) => props.theme.palette.secondary};
  }

  > span {
    font-size: 1.8rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.palette.text};
  }
`;
