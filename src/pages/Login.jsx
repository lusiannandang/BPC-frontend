import React from "react";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { setAuthenticated, setToken, setRole, setId, role } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", { email, password });
      setAuthenticated(true);
      setId(response.data.userId);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      setRole(response.data.role);
      setModal("success");
      setTimeout(() => {
        if (response.data.role == "ADMIN") {
          navigate("/admin");
        }
        if (response.data.role == "USER") {
          navigate("/user");
        }
      }, 2000);
    } catch (err) {
      setError(err.response.data.message);
      setModal("error");
      setTimeout(() => {
        setModal(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="bg-primary-1 w-screen h-screen items-center p-36">
        <div className="bg-base-1 w-1/2 min-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
          {modal == "error" && (
            <div className="w-full h-full bg-danger rounded-lg mb-3">
              <div className="">
                <div className="p-3 text-center text-base-1">
                  <h3>Password atau email salah!</h3>
                </div>
                <div className="modal-body">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          )}
          {modal == "success" && (
            <div className="w-full h-full bg-success rounded-lg mb-3">
              <div className="">
                <div className=" p-3 text-center text-base-1 ">
                  <h3>Login success</h3>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6">Login</h1>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div>{error}</div>}
            <div className="w-full flex justify-end">
              <button type="submit" className=" text-base-1 bg-primary-2 px-10 rounded-md py-2 hover:bg-primary-1 text-center">
                Login
              </button>
            </div>
          </form>
          <h2 className="text-sm mt-3 text-center">
            Belum punya akun?{" "}
            <Link to="/register" className="text-primary-1 hover:text-primary-2">
              Daftar disini
            </Link>
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
