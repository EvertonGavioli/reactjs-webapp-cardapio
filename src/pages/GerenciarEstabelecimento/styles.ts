import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex: 1;
  min-width: 20rem;
  max-width: 40rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 4rem;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  color: ${(props) => props.theme.palette.secondary};
`;
