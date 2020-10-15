import React from "react";
import { AuthProvider } from "./authContext";

const ContextProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default ContextProvider;
