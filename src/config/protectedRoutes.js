import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("Token in ProtectedRoute:", token);
  }, [token]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
