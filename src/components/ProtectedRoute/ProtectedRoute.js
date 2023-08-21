import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, token, ...props }) => {
  return <Route {...props}>{token ? children : <Redirect to="/" />}</Route>;
};

export default ProtectedRoute;
