import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth } from "../utils/firebase";
// import firebase from 'firebase/compat/app';

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const fprovider = new FacebookAuthProvider();

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Ukrainians Connect</h2>
        {/* <div 
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign in with Google
                </div> */}
        <div
          className="login-button google"
          onClick={() =>
            signInWithPopup(auth, provider)
              .then((result) => console.log("sign in with Google succeeded"))
              .catch((err) => console.log("sign in failed (google): " + err))
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <br />
        {/* <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign in with Facebook
        </div> */}
        <div
          className="login-button facebook"
          onClick={() =>
            signInWithPopup(auth, fprovider)
              .then((result) => console.log("sign in with Facebook succeeded"))
              .catch((err) => console.log("sign in failed (facebook): " + err))
          }
        >
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default SignIn;
