import React from "react";
import SideBar from "../../components/SidebarUser";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const index = () => {
  const { user, kelas } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }
  
  const kelasUser = kelas[0] && kelas[0].nama ? kelas[0].nama : 'Kamu Belum Memiliki Kelas!';
  console.log(kelas);

  let jadwal;
  if (kelasUser === 'Pemula') {
    jadwal = 'Hari Senin, Selasa, Kamis, Sabtu Pukul 15.30';
  } else if (kelasUser === 'Semi Prestasi') {
    jadwal = 'Hari Senin, Selasa, Rabu, Kamis, Sabtu Pukul 15.30';
  } else if (kelasUser === 'Prestasi') {
    jadwal = 'Hari Senin, Selasa, Rabu, Kamis, Jumat, Sabtu Pukul 15.30';
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
              {kelas && kelas.length > 0 ? (
                <div className="mt-3">
                  <h1 className=" text-base-1 p-5 text-xl">{kelasUser}</h1>
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
                        <div className="border grid grid-cols-3 text-center">
                          <div scope="col" className="px-6 py-3">
                            Antoni
                          </div>
                          <div scope="col" className="px-6 py-3">
                            Surabaya
                          </div>
                          <div scope="col" className="px-6 py-3">
                            082123123123
                          </div>
                        </div>
                        <div className="border grid grid-cols-3 text-center">
                          <div scope="col" className="px-6 py-3">
                            John Terry
                          </div>
                          <div scope="col" className="px-6 py-3">
                            Surabaya
                          </div>
                          <div scope="col" className="px-6 py-3">
                            082123123123
                          </div>
                        </div>
                        <div className="border grid grid-cols-3 text-center">
                          <div scope="col" className="px-6 py-3">
                            Annisa
                          </div>
                          <div scope="col" className="px-6 py-3">
                            Surabaya
                          </div>
                          <div scope="col" className="px-6 py-3">
                            082123123123
                          </div>
                        </div>
                        <div className="border grid grid-cols-3 text-center">
                          <div scope="col" className="px-6 py-3">
                            Antoni
                          </div>
                          <div scope="col" className="px-6 py-3">
                            Surabaya
                          </div>
                          <div scope="col" className="px-6 py-3">
                            082123123123
                          </div>
                        </div>
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
