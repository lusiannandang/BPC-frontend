import React from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    foto: "",
    alamat: "",
    tempatLahir: "",
    tanggalLahir: "",
    noHp: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [modal, setModal] = useState(false);

  const [error, setError] = useState("");
  const [modalMessage, setmodalMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password != form.rePassword) {
      setmodalMessage("Password tidak sama");
      setModal(true);
      return;
    }
    if (form.password < 6) {
      setmodalMessage("Password harus lebih dari 6 karakter");
      setModal(true);
      return;
    } else {
      setError("");
      try {
        const response = await axios.post("http://localhost:3000/api/register", form);
        console.log(response.data);
        setModal(true);
        setmodalMessage("Register berhasil!")
        setTimeout(() => {
          setModal(false);
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-primary-1 w-screen p-20">
        <div className="bg-base-1 w-1/2 min-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
          {modal && (
            <div className="w-full h-full bg-success rounded-lg mb-3">
              <p className=" p-3 text-center text-base-1 ">{modalMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6">Daftar Menjadi Anggota BPC</h1>
            <div className="grid gap-2 mb-2 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                <input
                  name="name"
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Alamat
                </label>
                <input
                  name="alamat"
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Alamat"
                  required
                  value={form.alamat}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tempat Lahir
                </label>
                <input
                  name="tempatLahir"
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tempat Lahir"
                  required
                  value={form.tempatLahir}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tanggal Lahir
                </label>
                <input
                  name="tanggalLahir"
                  type="date"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={form.tanggalLahir}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                No Hp.
              </label>
              <input
                name="noHp"
                type="number"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="082541254695"
                required
                value={form.noHp}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm password
              </label>
              <input
                name="rePassword"
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                value={form.rePassword}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex justify-end">
              <button type="submit" className=" text-base-1 bg-primary-2 px-10 rounded-md py-2 hover:bg-primary-1 text-center">
                Daftar
              </button>
            </div>
            <h2 className="text-sm mt-3 text-center">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-primary-1 hover:text-primary-2">
                Login disini
              </Link>
            </h2>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
