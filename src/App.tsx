import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

// Estilização e Tema
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/theme";

// Rotas/Páginas
import Routes from "./routes";

// Contexts
import { AuthProvider } from "./contexts/auth";
import { EstabelecimentoProvider } from "./contexts/estabelecimento";
import { PagesProvider } from "./contexts/pages";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  // const toggleTheme = () => {
  //   const updatedTheme = isDarkTheme ? "light" : "dark";
  //   setTheme(updatedTheme);
  //   localStorage.setItem("theme", updatedTheme);
  // };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ToastContainer bodyStyle={{ fontSize: 16 }} />

        <AuthProvider>
          <PagesProvider>
            <EstabelecimentoProvider>
              <Routes />
            </EstabelecimentoProvider>
          </PagesProvider>
        </AuthProvider>

        {/* <h1>Hello!</h1>
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button> */}
      </>
    </ThemeProvider>
  );
};

export default App;
