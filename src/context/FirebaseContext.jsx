/* eslint-disable react/prop-types */
import { createContext } from "react";
export const FirebaseContext = createContext({});
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../Firebase_Config";
const auth = getAuth(app);

export const FirebaseProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const data = { createUser, signIn };

  return (
    <FirebaseContext.Provider value={data}>{children}</FirebaseContext.Provider>
  );
};
