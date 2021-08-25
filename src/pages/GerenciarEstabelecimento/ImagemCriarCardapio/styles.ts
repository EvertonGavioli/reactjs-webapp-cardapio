import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
`;

export const ContainerImagem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-width: 50%;
  margin: 0rem 2rem;

  > span {
    margin-top: 2rem;
    max-width: 40rem;
    font-size: 2rem;
    text-align: center;
    color: ${(props) => props.theme.palette.text};
  }
`;

export const ImagemInicial = styled.img``;
