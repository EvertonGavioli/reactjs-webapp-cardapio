import React, { useState } from "react";

// Context
// import { useEstabelecimento } from "../../contexts/estabelecimento";

// Componentes
import Menu from "../../components/Menu";
import ButtonAdicionar from "../../components/ButtonAdicionar";
import AcessosContagem from "./AcessosContagem";
import ImagemCriarCardapio from "./ImagemCriarCardapio";
import FormNovaCategoria from "../../components/Formularios/FormNovaCategoria";

import { Container, ContainerMenu, Content, Title } from "./styles";

const GerenciarEstabelecimento = () => {
  // const estabelecimentoContext = useEstabelecimento();

  const [showFormCategoria, setShowFormCategoria] = useState(false);

  //#region Manipuladores Categoria

  const handleCancelarNovaCategoria = () => {
    setShowFormCategoria(false);
  };

  const handleSalvarNovaCategoria = () => {
    setShowFormCategoria(false);
  };

  //#endregion

  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>

      <Content>
        <Title>Loja 1</Title>
        <AcessosContagem />

        <br />

        {showFormCategoria ? (
          <FormNovaCategoria
            handleCancelar={() => handleCancelarNovaCategoria()}
            handleSalvar={() => handleSalvarNovaCategoria()}
          />
        ) : (
          <>
            <ButtonAdicionar
              label="Adicionar nova categoria"
              onClick={() => setShowFormCategoria(true)}
            />

            <ImagemCriarCardapio />
          </>
        )}
      </Content>
    </Container>
  );
};

export default GerenciarEstabelecimento;
