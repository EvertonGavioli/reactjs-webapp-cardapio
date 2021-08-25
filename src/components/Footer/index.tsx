import { Container } from "./styles";

import LinkPoliticaTermos from "../LinkPoliticaTermos";

const Footer = () => {
  return (
    <Container>
      <span>
        2021© Nome Empresa | Todos Direitos Reservados - RAZÃO SOCIAL LTDA -
        CNPJ 00.000.000/0001-01
      </span>

      <LinkPoliticaTermos />
    </Container>
  );
};

export default Footer;
