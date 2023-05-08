import React from "react";
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password != form.rePassword) {
      setError("Password tidak sama");
      return;
    }
    if (form.password < 6) {
      setError("Password harus lebih dari 6 karakter");
      return;
    } else {
      setError("");
      try {
        const response = await axios.post("http://localhost:3000/api/register", form);
        console.log(response.data);
        setModal(true);
        setTimeout(() => {
          setModal(false);
          navigate("/admin");
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
          <form onSubmit={handleSubmit}>
            {modal && (
              <div className="w-full h-full bg-success rounded-lg mb-3">
                <p className=" p-3 text-center text-base-1 ">Berhasil didaftarkan</p>
              </div>
            )}
            <h1 className="text-center text-2xl mb-6">Tambah Anggota</h1>
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
                  placeholder="Doe"
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
                  placeholder="Flowbite"
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
                placeholder="flowbite.com"
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
            <div>
              <button type="submit" className="mx-auto text-base-1 bg-primary-2 hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Tambah{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
