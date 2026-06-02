import { Navigate, Outlet } from "react-router-dom"

export const PrivateRouter = () => {
    

    const isAuthenticated = false;

    if (!isAuthenticated) return <Navigate to="/login" replace/>

    return <Outlet />
}
