import React from "react";
import { BsUpload } from "react-icons/bs";

import { Container } from "./styles";

interface IUploadImage {
  label: string;
}

const UploadImage: React.FC<IUploadImage> = ({ label }) => {
  return (
    <Container>
      <BsUpload />
      <span>{label}</span>
    </Container>
  );
};

export default UploadImage;
