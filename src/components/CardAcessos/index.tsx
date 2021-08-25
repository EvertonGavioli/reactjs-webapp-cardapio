import React from "react";

import { Container } from "./styles";

interface ICardAcessosProps {
  label: string;
  value: string;
}

const CardAcessos: React.FC<ICardAcessosProps> = ({ label, value }) => {
  return (
    <Container>
      <strong>{label}</strong>
      <span>{value}</span>
    </Container>
  );
};

export default CardAcessos;
