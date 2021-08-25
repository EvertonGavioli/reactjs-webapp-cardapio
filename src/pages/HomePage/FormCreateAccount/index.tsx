import React, { useState } from "react";

// Context
import { useAuth } from "../../../contexts/auth";

// Componentes
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import InputPassword from "../../../components/InputPassword";
import Checkbox from "../../../components/Checkbox";

// Componentes Estilizados
import {
  Container,
  Titulo,
  Form,
  PolicaTermosContainer,
  LinkPoliticaTermos,
} from "./styles";
import { toast } from "react-toastify";

interface IFormCreateAccount {
  onJaTenhoContaClick: React.MouseEventHandler<HTMLButtonElement>;
}

const FormCreateAccount: React.FC<IFormCreateAccount> = ({
  onJaTenhoContaClick,
}) => {
  const authContext = useAuth();
  const { loading } = authContext;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const handleCriarConta = () => {
    if (loading) return;

    if (!aceitouTermos) {
      toast.warning(
        "É necessário aceitar os termos de uso e políticas de privacidade."
      );
    } else {
      authContext.CreateAccount({ email, senha, senhaConfirmacao });
    }
  };

  return (
    <Container>
      <Form>
        <Titulo>Criar cadastro</Titulo>

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

        <InputPassword
          placeholder="Confirmação da senha"
          value={senhaConfirmacao}
          onChange={(e) => setSenhaConfirmacao(e.target.value)}
        />

        <br />
        <Button label="Criar conta" onClick={() => handleCriarConta()} />

        <br />
        <Button
          label="Já tenho conta"
          variant="secondary"
          size="small"
          onClick={onJaTenhoContaClick}
        />
      </Form>

      <PolicaTermosContainer>
        <Checkbox
          id="politicas-e-termos"
          checked={aceitouTermos}
          onChange={() => setAceitouTermos(!aceitouTermos)}
        />
        <label htmlFor="politicas-e-termos">
          Li e concordo com as <b>Políticas de Privacidade</b> e os{" "}
          <b>Termos de Aceite</b>
        </label>
      </PolicaTermosContainer>

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

export default FormCreateAccount;
