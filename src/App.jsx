import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Index } from "./page/Index"
import { Login } from "./page/Login"
import { Register } from "./page/Register"
import { Course } from "./page/Course"
import { NotFound } from "./page/NotFound"
import { PublicRouter } from "./routers/PublicRouter"
import { PrivateRouter } from "./routers/PrivateRouter"
import { useAuth } from "./context/AuthContext"

export const App = () => {

  const { isChecking } = useAuth();

  if (isChecking) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>

        <Route element={<PublicRouter />}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRouter />}>
          <Route path="/register" element={<Register />} />
          <Route path="/course" element={<Course />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}
