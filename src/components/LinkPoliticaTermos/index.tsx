import { Container } from "./styles";

const LinkPoliticaTermos = () => {
  return (
    <Container>
      <span>
        <a href="Termos de Uso" target="_blank">
          Termos de Uso
        </a>{" "}
        |{" "}
        <a href="Política de Privacidade" target="_blank">
          Política de Privacidade
        </a>
      </span>
    </Container>
  );
};

export default LinkPoliticaTermos;
