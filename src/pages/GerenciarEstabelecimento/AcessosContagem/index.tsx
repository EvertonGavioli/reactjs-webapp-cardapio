import CardAcessos from "../../../components/CardAcessos";

import { Container, ContainerCards } from "./styles";

const AcessosContagem = () => {
  return (
    <Container>
      <span>Número de acessos (últimos 30 dias)</span>

      <ContainerCards>
        <CardAcessos label="Acessos total" value="0" />
        <CardAcessos label="Acessos únicos" value="0" />
      </ContainerCards>
    </Container>
  );
};

export default AcessosContagem;
