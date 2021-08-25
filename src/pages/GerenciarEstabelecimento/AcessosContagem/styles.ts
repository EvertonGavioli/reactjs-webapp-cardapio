import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > span {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.text};
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  > div + div {
    margin-left: 2rem;
  }
`;
