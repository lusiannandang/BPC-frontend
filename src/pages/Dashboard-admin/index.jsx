import React, { useState, useEffect } from "react";
import SideBar from "../../components/SidebarAdmin";
import axios from "axios";
import { Link } from "react-router-dom";

const index = () => {
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
  const dateString = user.tanggalLahir;
  const dateObj = new Date(dateString);
  console.log(user.tanggalLahir);

  return (
    <>
      <div className=" max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Halo Admin,</h1>
            <h1>Selamat datang!</h1>
          </div>

          <div className="ml-5 mt-12 mb-12">
            <h1>Anggota Club</h1>
            <div className="mt-3 bg-primary-2 h-screen ">
              <h1 className=" text-primary-2">Kelas Pemula</h1>
              <div className="text-right mt-5 mb-8 ">
                <Link to="/admin/tambah" className="text-center bg-base-1 text-base-2 p-4 rounded-md mr-10 hover:bg-primary-1">
                  Tambah Anggota
                </Link>
              </div>
              <div>
                <div className=" bg-base-1 h-4 mx-5">
                  <div className="w-full text-sm text-left text-base-3">
                    <div className="text uppercase bg-base-1  border">
                      <div className="grid grid-cols-8 text-center font-bold">
                        <div scope="col" className="px-4 py-3">
                          No
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Nama
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Alamat
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Tempat Lahir
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Tanggal Lahir
                        </div>
                        <div scope="col" className="px-6 py-3">
                          No Hp
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Kelas
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Action
                        </div>
                      </div>
                    </div>
                    <div className="bg-base-1 ">
                      {user
                        .sort((a, b) => a.id - b.id)
                        .map((item) => {
                          if (item.role === "USER") {
                            const dateString = item.tanggalLahir;
                            const dateObj = new Date(dateString);
                            console.log(dateObj.toLocaleDateString("id-ID"));
                            return (
                              <>
                                <div className="border grid grid-cols-8 text-center" key={item.id}>
                                  <div className="py-3">{item.id}</div>
                                  <div className="py-3">{item.name}</div>
                                  <div className="py-3">{item.alamat}</div>
                                  <div className="py-3">{item.tempatLahir}</div>
                                  <div className="py-3">{dateObj.toLocaleDateString("id-ID")}</div>
                                  <div className="py-3">{item.noHp}</div>
                                  <div className="py-3">{item.kelas}</div>
                                  <div classname="text-center">
                                    <button
                                      type="button"
                                      class="mt-2 text-base-1 bg-danger hover:bg-danger-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                      onClick={() => handleDelete(item.id)}
                                    >
                                      Hapus
                                    </button>
                                  </div>
                                </div>
                              </>
                            );
                          } else {
                            return null;
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
