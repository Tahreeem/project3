import React from "react";
import API from "../common/util/API";
import { Redirect } from "react-router";

class Logout extends React.Component {
  componentDidMount() {
    sessionStorage.clear();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
