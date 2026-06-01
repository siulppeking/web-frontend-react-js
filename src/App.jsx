import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Index } from "./pages/Index"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Course } from "./pages/Course"
import { NotFound } from "./pages/NotFound"
import { PublicRouter } from "./routers/PublicRouter"
import { PrivateRouter } from "./routers/PrivateRouter"

export const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<PublicRouter />}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}
