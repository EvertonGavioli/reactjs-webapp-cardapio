import { createContext, useContext, useState } from "react";
import { Pages } from "../constants/pages";

// Context
interface IPagesData {
  page: number;
  TrocarPagina(codigoPagina: number): void;
}

const PagesContext = createContext<IPagesData>({} as IPagesData);

export default PagesContext;

// Provider
export const PagesProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState(Pages["LISTA-ESTABELECIMENTOS"]);

  function TrocarPagina(codigo: number) {
    setPage(codigo);
  }

  return (
    <PagesContext.Provider value={{ page, TrocarPagina }}>
      {children}
    </PagesContext.Provider>
  );
};

// Hook Estabelecimento
export function usePages() {
  const context = useContext(PagesContext);
  return context;
}
