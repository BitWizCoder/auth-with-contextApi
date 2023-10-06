/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { getAuth } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(FirebaseContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <form
        onSubmit={handleSignUp}
        className="flex justify-center flex-col items-center"
      >
        <h1 className="mt-8 mb-5 text-center text-2xl">
          Login with Email and password.
        </h1>
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mb-5"
        />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs mb-5"
        />
        <button className="btn btn-neutral">Login</button>
      </form>
    </div>
  );
};

export default Login;
