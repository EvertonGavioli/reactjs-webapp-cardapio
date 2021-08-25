import { Container, Content } from "./styles";
import { usePages } from "../../contexts/pages";
import { Pages } from "../../constants/pages";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Pages
import ListaEstabelecimentos from "../MeusEstabelecimentos/ListaEstabelecimentos";
import NovoEstabelecimento from "../MeusEstabelecimentos/NovoEstabelecimento";
import GerenciarEstabelecimento from "../GerenciarEstabelecimento";

const MainPage = () => {
  const { page } = usePages();

  return (
    <Container>
      <Header />
      <Content>
        {page === Pages["LISTA-ESTABELECIMENTOS"] && <ListaEstabelecimentos />}
        {page === Pages["NOVO-ESTABELECIMENTO"] && <NovoEstabelecimento />}
        {page === Pages["GERENCIAR-ESTABELECIMENTO"] && (
          <GerenciarEstabelecimento />
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default MainPage;
