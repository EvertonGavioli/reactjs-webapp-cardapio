import React from "react";
import FormNovoEstabelecimento from "../../../components/Formularios/FormNovoEstabelecimento";

import { Container, Content, Title } from "./styles";

const NovoEstabelecimento: React.FC = () => {
  return (
    <Container>
      <Title>Novo Estabelecimento</Title>

      <Content>
        <FormNovoEstabelecimento />
      </Content>
    </Container>
  );
};

export default NovoEstabelecimento;
