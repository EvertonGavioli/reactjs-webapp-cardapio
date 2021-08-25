import React from "react";

import { useAuth } from "../contexts/auth";

import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

const Routes: React.FC = () => {
  const authContext = useAuth();
  return authContext.signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
