import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.secondary};
`;
