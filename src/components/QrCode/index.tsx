import React from "react";
import { BsDownload } from "react-icons/bs";
import { BiPrinter } from "react-icons/bi";
import QRCodeGenerator from "react-qr-code";

import { Container, GroupButtons, ButtonCircle } from "./styles";

interface IQrCodeProps {
  value: string;
}

const QrCode: React.FC<IQrCodeProps> = ({ value }) => {
  return (
    <Container>
      <QRCodeGenerator value={value} size={200} />

      <GroupButtons>
        <ButtonCircle>
          <BsDownload />
        </ButtonCircle>
        <ButtonCircle>
          <BiPrinter />
        </ButtonCircle>
      </GroupButtons>
    </Container>
  );
};

export default QrCode;
