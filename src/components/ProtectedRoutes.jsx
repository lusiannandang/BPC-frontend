import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const { token } = useAuth();
  const [authenticated, setAuthenticated] = useState(token !== null);

  useEffect(() => {
    setAuthenticated(token !== null);
  }, [token]);

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
