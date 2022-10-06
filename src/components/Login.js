import React from "react";
import { GoogleLogin } from "react-google-login";


const Login = () => {
  const clientId ='311975128143-udpk8t6n44irmge5t2nusbot0qd68lk4.apps.googleusercontent.com';

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESSFULL!! Current User", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED!! ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
