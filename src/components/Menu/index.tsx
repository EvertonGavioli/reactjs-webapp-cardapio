import React from "react";
import { AiOutlineHome, AiOutlineQrcode } from "react-icons/ai";
import { BsGear, BsEye } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { FiSend } from "react-icons/fi";

import ButtonIcon from "../ButtonIcon";
import QrCode from "../QrCode";

import { Container, ButtonsContainer } from "./styles";

const Menu = () => {
  return (
    <Container>
      <ButtonsContainer>
        <ButtonIcon
          label="Início"
          variant="fill"
          Icon={AiOutlineHome}
          fullwidth
        />

        <ButtonIcon
          label="Personalizar"
          variant="fill"
          Icon={BsGear}
          fullwidth
        />

        <ButtonIcon
          label="Visualizar Cardápio"
          variant="fill"
          Icon={BsEye}
          fullwidth
        />

        <ButtonIcon
          label="QR Code"
          variant="fill"
          Icon={AiOutlineQrcode}
          fullwidth
        />

        <ButtonIcon
          label="Copiar link"
          variant="fill"
          Icon={ImLink}
          fullwidth
        />

        <ButtonIcon
          label="Compartilhar"
          variant="fill"
          Icon={FiSend}
          fullwidth
        />
      </ButtonsContainer>

      <QrCode value="https://localhost:3000" />
    </Container>
  );
};

export default Menu;
