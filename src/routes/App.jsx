import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/authContext";
import ProtectedRoute from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard-user/index";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/user/*" element={<UserRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
