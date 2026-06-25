import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export const PrivateRouter = () => {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" replace />

    return <Outlet />
}
