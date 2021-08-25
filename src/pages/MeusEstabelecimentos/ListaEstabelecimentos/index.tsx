import { useEffect } from "react";
import { useEstabelecimento } from "../../../contexts/estabelecimento";
import { usePages } from "../../../contexts/pages";

// Componentes
import ButtonAdicionar from "../../../components/ButtonAdicionar";
import CardEstabelecimento from "../../../components/CardEstabelecimento";
import NovoEstabelecimentoImage from "../../../assets/images/novo-estabelecimento.svg";

import {
  Container,
  Title,
  ListaContent,
  VazioContent,
  ContainerImagem,
  ImagemInicial,
} from "./styles";
import { Pages } from "../../../constants/pages";

const ListaEstabelecimentos = () => {
  const estabelecimentoContext = useEstabelecimento();
  const pagesContext = usePages();

  useEffect(() => {
    estabelecimentoContext.BuscarTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // #region Manipuladores

  const handleAdicionarNovoClick = () => {
    pagesContext.TrocarPagina(Pages["NOVO-ESTABELECIMENTO"]);
  };

  const handleEstabelecimentoClick = (estabelecimentoId: string) => {
    estabelecimentoContext.SelecionarEstabelecimento(estabelecimentoId);
    pagesContext.TrocarPagina(Pages["GERENCIAR-ESTABELECIMENTO"]);
  };

  // #endregion

  return (
    <Container>
      <Title>Meus estabelecimentos</Title>

      {estabelecimentoContext.listaEstabelecimentos.length > 0 ? (
        <ListaContent>
          {estabelecimentoContext.listaEstabelecimentos.map((item) => (
            <CardEstabelecimento
              key={item.id}
              title={item.nome}
              cardapioUrl={item.cardapioUrl}
              handleClick={() => handleEstabelecimentoClick(item.id)}
            />
          ))}

          <ButtonAdicionar
            label="Adicionar novo estabelecimento"
            variant="square"
            size="default"
            onClick={() => handleAdicionarNovoClick()}
          />
        </ListaContent>
      ) : (
        <VazioContent>
          <ButtonAdicionar
            label="Adicionar novo estabelecimento"
            variant="square"
            size="default"
            onClick={() => handleAdicionarNovoClick()}
          />

          <ContainerImagem>
            <ImagemInicial src={NovoEstabelecimentoImage} alt="" />
            <span>
              Comece a criar seu cardápio adicionando seu primeiro
              estabelecimento.
            </span>
          </ContainerImagem>
        </VazioContent>
      )}
    </Container>
  );
};

export default ListaEstabelecimentos;
