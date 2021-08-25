import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import MessageError from "../components/ToastMessages/MessageError";
import api from "../services/api";

// Contexto
interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: object | null;
  CreateAccount(userDataAccount: object): Promise<void>;
  Login(userDataLogin: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;

// Provider
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@cardapio-app:user");
    const storagedToken = localStorage.getItem("@cardapio-app:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function CreateAccount(userDataAccount: object) {
    setLoading(true);

    try {
      const response = await api.post("auth/new-account", userDataAccount);

      setUser(response.data.usuario);
      api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

      localStorage.setItem(
        "@cardapio-app:user",
        JSON.stringify(response.data.usuario)
      );
      localStorage.setItem("@cardapio-app:token", response.data.accessToken);
    } catch (error) {
      toast.error(MessageError(error.response?.data?.errors?.Mensagens || []));
    }

    setLoading(false);
  }

  async function Login(userDataLogin: object) {
    setLoading(true);

    try {
      const response = await api.post("auth/login", userDataLogin);

      setUser(response.data.usuario);
      api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

      localStorage.setItem(
        "@cardapio-app:user",
        JSON.stringify(response.data.usuario)
      );
      localStorage.setItem("@cardapio-app:token", response.data.accessToken);
    } catch (error) {
      toast.error(MessageError(error.response?.data?.errors?.Mensagens || []));
    }

    setLoading(false);
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("@cardapio-app:user");
    localStorage.removeItem("@cardapio-app:token");
  }

  // Interceptor
  api.interceptors.response.use(
    function (response) {
      if (!response) Logout();
      return response;
    },
    function (error) {
      if (401 === error.response.status) {
        Logout();
      } else {
        return Promise.reject(error);
      }
    }
  );

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        loading,
        user,
        CreateAccount,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
