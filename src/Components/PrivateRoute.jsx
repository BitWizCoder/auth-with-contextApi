import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(FirebaseContext);

  if (user) {
    return children;
  }

  return <Navigate to={'/'}></Navigate>
};

export default PrivateRoute;
