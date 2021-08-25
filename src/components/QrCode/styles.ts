import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette.backgroundSecondary};
`;

export const GroupButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.4rem;
  width: 4.8rem;
  height: 4.8rem;
  cursor: pointer;

  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.palette.secondary};

  > svg {
    font-size: 2.4rem;
    color: ${(props) => props.theme.palette.secondary};
  }
`;
