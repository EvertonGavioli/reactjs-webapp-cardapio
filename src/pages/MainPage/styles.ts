import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 192rem;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${(props) => props.theme.palette.background};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  margin: 1.6rem 1.6rem;
`;
