import React from "react";
import { AiOutlineQrcode } from "react-icons/ai";
import { ImLink } from "react-icons/im";

import ButtonIcon from "../ButtonIcon";

import { Container, Title, QrCodeContainer, GroupButtons } from "./styles";

interface ICardEstabelecimento {
  title: string;
  cardapioUrl: string;
  handleClick(): void;
}

const CardEstabelecimento: React.FC<ICardEstabelecimento> = ({
  title,
  cardapioUrl,
  handleClick,
}) => {
  // #region Manipuladores

  const handleCopyLink = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(cardapioUrl);
  };

  // #endregion

  return (
    <Container onClick={() => handleClick()}>
      <Title>{title}</Title>

      <QrCodeContainer>
        <span>QR Code</span>
        <GroupButtons>
          <ButtonIcon label="Baixar" Icon={AiOutlineQrcode} />

          <ButtonIcon label="Imprimir" Icon={AiOutlineQrcode} />

          <ButtonIcon
            label="Copiar link"
            fullwidth
            Icon={ImLink}
            onClick={(e) => handleCopyLink(e)}
          />
        </GroupButtons>
      </QrCodeContainer>
    </Container>
  );
};

export default CardEstabelecimento;
