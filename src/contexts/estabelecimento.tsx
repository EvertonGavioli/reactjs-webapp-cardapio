import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { usePages } from "./pages";
import MessageError from "../components/ToastMessages/MessageError";
import api from "../services/api";

// Context
interface EstabelecimentoContextData {
  loading: boolean;
  listaEstabelecimentos: Array<any>;
  estabelecimentoSelecionado: object;
  BuscarTodos(): void;
  SalvarEstabelecimento(
    objetoEstabelecimento: object,
    pageRedirect: number
  ): Promise<void>;
  SelecionarEstabelecimento(estabelecimentoId: string): void;
}

const EstabelecimentoContext = createContext<EstabelecimentoContextData>(
  {} as EstabelecimentoContextData
);

export default EstabelecimentoContext;

// Provider
export const EstabelecimentoProvider: React.FC = ({ children }) => {
  const pageContext = usePages();

  const [loading, setLoading] = useState(false);
  const [listaEstabelecimentos, setListaEstabelecimentos] = useState(
    [] as any[]
  );
  const [estabelecimentoSelecionado, setEstabelecimentoSelecionado] = useState(
    {}
  );

  async function BuscarTodos() {
    try {
      var response = await api.get("estabelecimentos");
      setListaEstabelecimentos(response.data);
    } catch (error) {
      toast.error(MessageError(error.response?.data?.errors?.Mensagens || []));
    }
  }

  async function SalvarEstabelecimento(
    objetoEstabelecimento: object,
    pageRedirect: number
  ) {
    setLoading(true);

    try {
      await api.post("estabelecimentos", objetoEstabelecimento);
      pageContext.TrocarPagina(pageRedirect);
    } catch (error) {
      toast.error(MessageError(error.response?.data?.errors?.Mensagens || []));
    }

    setLoading(false);
  }

  function SelecionarEstabelecimento(estabelecimentoId: string) {
    const estabelecimento = listaEstabelecimentos.filter(
      (f) => f.id === estabelecimentoId
    )[0];
    setEstabelecimentoSelecionado(estabelecimento);
  }

  return (
    <EstabelecimentoContext.Provider
      value={{
        loading,
        listaEstabelecimentos,
        estabelecimentoSelecionado,
        BuscarTodos,
        SalvarEstabelecimento,
        SelecionarEstabelecimento,
      }}
    >
      {children}
    </EstabelecimentoContext.Provider>
  );
};

// Hook Estabelecimento
export function useEstabelecimento() {
  const context = useContext(EstabelecimentoContext);
  return context;
}
