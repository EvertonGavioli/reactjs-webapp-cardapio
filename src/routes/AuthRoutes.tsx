import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import AuthPage from "../pages/HomePage";

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={AuthPage} />
    </BrowserRouter>
  );
};

export default AuthRoutes;
