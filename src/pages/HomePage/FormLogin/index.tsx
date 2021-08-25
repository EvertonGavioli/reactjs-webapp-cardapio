import React, { useState } from "react";

// Context
import { useAuth } from "../../../contexts/auth";

// Componentes
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import InputPassword from "../../../components/InputPassword";

// Componentes Estilizados
import { Container, Titulo, Form, LinkPoliticaTermos } from "./styles";

interface IFormLogin {
  onCriarContaClick: React.MouseEventHandler<HTMLButtonElement>;
}

const FormLogin: React.FC<IFormLogin> = ({ onCriarContaClick }) => {
  const authContext = useAuth();
  const { loading } = authContext;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEfetuarLogin = () => {
    if (loading) return;

    authContext.Login({ email, senha });
  };

  return (
    <Container>
      <Form>
        <Titulo>Login</Titulo>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputPassword
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <br />
        <Button label="Acessar" onClick={handleEfetuarLogin} />

        <br />
        <Button
          label="Criar conta"
          variant="secondary"
          size="small"
          onClick={onCriarContaClick}
        />
      </Form>

      <LinkPoliticaTermos>
        <span>
          <a href="Termos de Uso" target="_blank">
            Termos de Uso
          </a>{" "}
          |{" "}
          <a href="Política de Privacidade" target="_blank">
            Política de Privacidade
          </a>
        </span>
      </LinkPoliticaTermos>
    </Container>
  );
};

export default FormLogin;
