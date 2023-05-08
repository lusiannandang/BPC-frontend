import React, { useState, useEffect } from "react";
import SideBar from "../../components/SidebarAdmin";
import { Link } from "react-router-dom";
import axios from "axios";

const Pendaftaran = () => {
  const [status, setStatus] = useState([]);
  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/user");
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/user/${id}`);
      getData(); // Panggil fungsi getData() kembali untuk menampilkan daftar pengumuman terbaru setelah pengumuman dihapus
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/user/${id}`, { status: true });
      setStatus(status.filter((item) => item.id !== id));
      setUser(user.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = user.filter((item) => item.status === false && item.role === "USER");
  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pendaftaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 h-screen">
              <h1 className="text-primary-2">Lihat Pengumuman</h1>
              <h1 className="ml-14 text-lg text-base-1">Ajuan Pendaftar</h1>
              {filteredUsers.length > 0 ? (
                <ul>
                  {filteredUsers.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className="py-8">
                          <div className="bg-base-1 w-11/12 mx-auto flex">
                            <div className="px-5 py-4 space-y-2">
                              <h1 className="text-4xl">{item.name}</h1>
                              <p>{item.kelas}</p>
                            </div>
                            <div className="space-x-2 h-10 m-auto mr-4 text-center text-base-1">
                              <button onClick={() => handleApprove(item.id)} className="mt-2 text-center bg-primary-2 w-28 py-2 hover:bg-primary-1">
                                Setujui
                              </button>
                              <button onClick={() => handleDelete(item.id)} className="mt-2 text-center bg-danger w-28 py-2 hover:bg-danger-1">
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>Tidak ada user yang ditemukan</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pendaftaran;
