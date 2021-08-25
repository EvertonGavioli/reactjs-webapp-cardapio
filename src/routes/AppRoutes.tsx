import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={MainPage} />
    </BrowserRouter>
  );
};

export default OtherRoutes;
