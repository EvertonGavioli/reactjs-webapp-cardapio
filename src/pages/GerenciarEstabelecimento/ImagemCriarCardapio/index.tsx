import ComecarCriarCardapioImagem from "../../../assets/images/novo-estabelecimento.svg";

import { Container, ContainerImagem, ImagemInicial } from "./styles";

const ImagemCriarCardapio = () => {
  return (
    <Container>
      <ContainerImagem>
        <ImagemInicial src={ComecarCriarCardapioImagem} alt="" />
        <span>
          Agora vamos começar a criar seu cardápio adicionando uma categoria e
          seus produtos.
        </span>
      </ContainerImagem>
    </Container>
  );
};

export default ImagemCriarCardapio;
