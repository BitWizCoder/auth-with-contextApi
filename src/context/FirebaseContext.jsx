/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const FirebaseContext = createContext({});
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase_Config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    // This callback is triggered when the authentication state changes
    const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
        console.log("Current user:", authUser);
      } else {
        // User is signed out
        setUser(null);
        console.log("User signed out");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const data = { user, createUser, signIn, googleSignIn };

  return (
    <FirebaseContext.Provider value={data}>{children}</FirebaseContext.Provider>
  );
};
