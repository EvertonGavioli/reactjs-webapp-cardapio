import React, { useState } from "react";
import { Pages } from "../../../constants/pages";
import { segmentos } from "../../../constants/segmentosOptions";

// Context
import { useEstabelecimento } from "../../../contexts/estabelecimento";
import { usePages } from "../../../contexts/pages";

// Componentes
import Button from "../../Button";
import Input from "../../Input";
import Select from "../../Select";
import UploadImage from "../../UploadImage";

import {
  Container,
  FormGroupLabel,
  GroupDadosGeraisContainer,
  GroupDadosGerais,
  GroupEndereco,
  GroupRedesSociais,
  GroupButtons,
} from "./styles";

const FormNovoEstabelecimento: React.FC = () => {
  const estabelecimentoContext = useEstabelecimento();
  const pagesContext = usePages();

  // Estados Form
  const [nome, setNome] = useState("");
  const [segmento, setSegmento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");

  // #region Manipuladores

  const handleCancelar = () => {
    pagesContext.TrocarPagina(Pages["LISTA-ESTABELECIMENTOS"]);
  };

  const handleSalvarEstabelecimento = () => {
    if (estabelecimentoContext.loading) return;

    estabelecimentoContext.SalvarEstabelecimento(
      {
        nome: nome,
        segmento: segmento,
        telefone: telefone,
        logoImagem: "",
        endereco: {
          cep: cep,
          rua: rua,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
        },
        facebookUrl: facebookUrl,
        instagramUrl: instagramUrl,
        host: window.location.origin,
      },
      Pages["LISTA-ESTABELECIMENTOS"]
    );
  };

  // #endregion

  return (
    <Container>
      <FormGroupLabel>Dados Gerais</FormGroupLabel>
      <GroupDadosGeraisContainer>
        <UploadImage label="Logotipo" />

        <GroupDadosGerais>
          <div className="gdg-nome-estabelecimento">
            <Input
              placeholder="Nome do estabelecimento"
              size="large"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="gdg-segmento">
            <Select
              placeholder="Segmento"
              size="large"
              options={segmentos}
              value={segmento}
              onChange={(e) => setSegmento(e.target.value)}
            />
          </div>

          <div className="gdg-telefone">
            <Input
              placeholder="Telefone"
              size="large"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
        </GroupDadosGerais>
      </GroupDadosGeraisContainer>

      <br />
      <FormGroupLabel>Endereço</FormGroupLabel>
      <GroupEndereco>
        <Input
          placeholder="CEP"
          size="large"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <Input
          placeholder="Endereço"
          size="large"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <Input
          placeholder="Número"
          size="large"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <Input
          placeholder="Bairro"
          size="large"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <Input
          placeholder="Cidade"
          size="large"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </GroupEndereco>

      <br />
      <FormGroupLabel>Redes Sociais</FormGroupLabel>
      <GroupRedesSociais>
        <Input
          placeholder="URL da página do seu Facebook"
          size="large"
          value={facebookUrl}
          onChange={(e) => setFacebookUrl(e.target.value)}
        />
        <Input
          placeholder="@do seu Instagran"
          size="large"
          value={instagramUrl}
          onChange={(e) => setInstagramUrl(e.target.value)}
        />
      </GroupRedesSociais>

      <br />
      <GroupButtons>
        <Button
          label="Cancelar"
          variant="secondary"
          onClick={() => handleCancelar()}
        />
        <Button label="Salvar" onClick={() => handleSalvarEstabelecimento()} />
      </GroupButtons>
    </Container>
  );
};

export default FormNovoEstabelecimento;
