import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export const PublicRouter = () => {

    const { isAuthenticated } = useAuth();

    if (isAuthenticated) return <Navigate to="/register" replace />

    return <Outlet />
}
