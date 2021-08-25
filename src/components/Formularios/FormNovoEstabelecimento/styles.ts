import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGroupLabel = styled.h2`
  color: ${(props) => props.theme.palette.text};
`;
export const GroupDadosGeraisContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const GroupDadosGerais = styled.div`
  width: 100%;
  margin-left: 2rem;

  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    "nomeestabelecimento nomeestabelecimento"
    "segmento telefone";

  .gdg-nome-estabelecimento {
    grid-area: nomeestabelecimento;
  }

  .gdg-segmento {
    grid-area: segmento;
  }

  .gdg-telefone {
    grid-area: telefone;
    margin-left: 1rem;
  }
`;

export const GroupEndereco = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const GroupRedesSociais = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  > button {
    margin-right: 1rem;
  }
`;
