import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.secondary};
`;

export const ListaContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 2rem;

  > div {
    margin-right: 1rem;
  }
`;

export const VazioContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 2rem;
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
    font-size: 2.8rem;
    text-align: center;
    color: ${(props) => props.theme.palette.text};
  }
`;

export const ImagemInicial = styled.img``;
