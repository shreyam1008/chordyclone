import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    //google login
    auth.signInWithPopup(provider)
    .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/768px-Discord_Color_Text_Logo.svg.png"
          alt="discord logo"
        />
      </div>
      <Button onClick={signIn}>Sign IN </Button>
    </div>
  );
};

export default Login;
