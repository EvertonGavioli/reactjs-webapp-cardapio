import React, { useState } from "react";

import Welcome from "./Welcome";
import FormCreateAccount from "./FormCreateAccount";
import FormLogin from "./FormLogin";

import {
  Container,
  WelcomeContainer,
  BackgroundImage,
  AccountContainer,
} from "./styles";

const HomePage: React.FC = () => {
  const [toggleAccount, setToggleAccount] = useState(false);

  return (
    <Container>
      <WelcomeContainer>
        <BackgroundImage />
        <Welcome />
      </WelcomeContainer>

      <AccountContainer>
        {toggleAccount ? (
          <FormCreateAccount
            onJaTenhoContaClick={() => setToggleAccount(!toggleAccount)}
          />
        ) : (
          <FormLogin
            onCriarContaClick={() => setToggleAccount(!toggleAccount)}
          />
        )}
      </AccountContainer>
    </Container>
  );
};

export default HomePage;
