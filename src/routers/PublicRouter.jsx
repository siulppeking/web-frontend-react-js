import { Navigate, Outlet } from "react-router-dom"

export const PublicRouter = () => {

    const isAuthenticated = false;

    if (isAuthenticated) return <Navigate to="/home" replace />
    
    return <Outlet />
}
