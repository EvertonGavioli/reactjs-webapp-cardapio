import React from "react";

import LogoImage from "../../../assets/images/svg-logo.svg";

import { Container, Logo, MessageContainer } from "./styles";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoImage} alt="" />

      <MessageContainer>
        <p>👋 Bem vindo!</p>
        <span>Crie agora um cardápio digital para o seu negócio!</span>
      </MessageContainer>
    </Container>
  );
};

export default Welcome;
