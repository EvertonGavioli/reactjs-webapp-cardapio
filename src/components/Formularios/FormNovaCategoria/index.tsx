import React from "react";
import Button from "../../Button";

import Input from "../../Input";

import { Container, GroupButtons } from "./styles";

interface IFormNovaCategoria {
  handleCancelar: () => void;
  handleSalvar: () => void;
}

const FormNovaCategoria: React.FC<IFormNovaCategoria> = ({
  handleCancelar,
  handleSalvar,
}) => {
  return (
    <Container>
      <Input placeholder="Nome da categoria" size="large" />

      <GroupButtons>
        <Button
          label="Cancelar"
          variant="secondary"
          size="small"
          onClick={() => handleCancelar()}
        />

        <Button label="Salvar" size="small" onClick={() => handleSalvar()} />
      </GroupButtons>
    </Container>
  );
};

export default FormNovaCategoria;
