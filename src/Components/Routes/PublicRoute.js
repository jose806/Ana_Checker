import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PublicRoute({ component: Component, ...rest }) {
  //Geting state from redux
  const loggedInUserState = useSelector((state) => {
    return state.user;
  });

  return   <Route
  {...rest}
  render={(props) => {
    return loggedInUserState === null? <Component {...props} /> : <Redirect to="/" />;
  }}
/>;
}
