import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  width: 30rem;
  height: 25rem;
  padding: 2rem;

  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.text};
`;

export const QrCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    color: ${(props) => props.theme.palette.text};
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
