import React from "react";
import SideBar from "../../components/SidebarAdmin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const ProfileUser = () => {
    const { id } = useParams();
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    name: user.name,
    alamat: user.alamat,
    tanggalLahir: user.tanggalLahir,
    tempatLahir: user.tempatLahir,
    noHp: user.noHp,
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/user/${id}`, formData);
      setUser(formData);
      setSuccessModalOpen(true);
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  const dateString = user.tanggalLahir;
  const dateObj = new Date(dateString);
  console.log(dateObj);

  return (
    <>
      <div className="max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 mt-12">
            <div className="ml-5 text-4xl font-semibold my-16">
              <h1>Edit Profile</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div class=" z-0 w-full mb-6 group">
                <label class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400">Nama</label>
                <input
                  type="text"
                  name="name"
                  class="block  p-2 w-full text-sm text-base-3  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={user.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class=" z-0 w-full mb-6 group">
                <label class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  class="block  p-2 w-full text-sm text-base-3  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={user.alamat}
                  value={formData.alamat}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class=" z-0 w-full mb-6 group">
                <label class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400">Tanggal Lahir</label>
                <input
                  type="date"
                  name="tanggalLahir"
                  class="block  p-2 w-full text-sm text-base-3  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={user.tanggalLahir ? user.tanggalLahir : "Tanggal lahir"}
                  value={formData.tanggalLahir}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class=" z-0 w-full mb-6 group">
                <label class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400">Tempat Lahir</label>
                <input
                  type="text"
                  name="tempatLahir"
                  class="block  p-2 w-full text-sm text-base-3  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={user.tempatLahir}
                  value={formData.tempatLahir}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class=" z-0 w-full mb-6 group">
                <label class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400">No. Hp</label>
                <input
                  type="number"
                  name="noHp"
                  class="block p-2 w-full text-sm text-base-3  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={user.noHp}
                  value={formData.noHp}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class=" z-0 w-full mb-6 group">
                <label class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400">Kelas</label>
                <input
                  class="block p-2 w-full text-sm text-base-3  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className=" mt-7 text-right ">
                <button type="submit" className="bg-primary-2 text-base-1 px-32 py-3 rounded-lg mr-10 hover:bg-primary-1 ">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileUser;
