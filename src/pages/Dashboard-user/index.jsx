import React, { useEffect, useState } from "react";
import SideBar from "../../components/SidebarUser";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const index = () => {
  const [user, setUser] = useState([]);
  const [kelas, setKelas] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }
  const id = localStorage.getItem("id");

  let namaKelas;
  if (user && Array.isArray(user.Kelas) && user.Kelas.length > 0) {
    namaKelas = user.Kelas[0].nama;
  } else {
    namaKelas = "Kelas tidak ditemukan";
  }

  const getData = async () => {
    if (id != null && token != null) {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getKelas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/kelas");
      setKelas(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getKelas();
  }, []);


  let jadwal;
  if (user && user.Kelas && user.Kelas.length > 0 && user?.Kelas[0]?.nama === "Pemula") {
    jadwal = "Hari Senin, Selasa, Kamis, Sabtu Pukul 15.30";
  } else if (user && user.Kelas && user.Kelas.length > 0 && user?.Kelas[0]?.nama === "Semi Prestasi") {
    jadwal = "Hari Senin, Selasa, Rabu, Kamis, Sabtu Pukul 15.30";
  } else if (user && user.Kelas && user.Kelas.length > 0 && user?.Kelas[0]?.nama === "Prestasi") {
    jadwal = "Hari Senin, Selasa, Rabu, Kamis, Jumat, Sabtu Pukul 15.30";
  }

  return (
    <>
      <div className=" max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 mt-16 grid grid-cols-5">
            <div className="text-4xl font-semibold col-span-4">
              <h1>Halo,</h1>
              <h1>Selamat datang {user.name}!</h1>
            </div>
            {user.status ? (
              <div className="text-center">
                <h1 className="text-base-1 bg-success px-4 py-1 rounded-3xl w-1/2">Aktif</h1>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="text-base-1 bg-danger px-4 py-1 rounded-3xl w-1/2">Tidak Aktif</h1>
              </div>
            )}
          </div>

          <div className="ml-5 mt-12">
            <h1>Jadwal Latihan</h1>
            <div className="mt-3 bg-primary-2 h-30 ">
              <h1 className="mt-3 text-base-1 p-5 text-xl">{jadwal}</h1>
            </div>
          </div>

          <div className="ml-5 mt-12 mb-12">
            <h1>Anggota kelas anda</h1>
            <div className="mt-3 bg-primary-2 h-screen w-full">
              {user.Kelas && user.Kelas.length > 0 ? (
                <div className="mt-3">
                  <h1 className=" text-base-1 p-5 text-xl">{namaKelas}</h1>
                  <div className=" bg-base-1 h-4 mx-5">
                    <div className="w-full text-sm text-left text-base-3">
                      <div className="text bg-base-1 border">
                        <div className="grid grid-cols-3 text-center font-bold">
                          <div scope="col" className="px-6 py-3">
                            Nama
                          </div>
                          <div scope="col" className="px-6 py-3">
                            Alamat
                          </div>
                          <div scope="col" className="px-6 py-3">
                            No Hp
                          </div>
                        </div>

                        {kelas.map((item) => {
                          if (item.nama === namaKelas) {
                            return (
                              <div className="border grid grid-cols-3 text-center" key={item.id}>
                                <div scope="col" className="px-6 py-3">
                                  {item.User.name}
                                </div>
                                <div scope="col" className="px-6 py-3">
                                  {item.User.alamat}
                                </div>
                                <div scope="col" className="px-6 py-3">
                                  {item.User.noHp}
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center pt-48">
                  <h1 className="mb-10 text-lg">Isi Kuisioner Penentuan Kelas</h1>
                  <Link to="/user/kuisioner" className="btn bg-base-1 p-5 rounded-lg">
                    Kuisioner
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
