import React from "react";
import SideBar from "../../components/SidebarUser";
import { Link } from "react-router-dom";
import { useState } from "react";

const index = () => {
  const [kelas, setKelas] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <>
      <div className=" max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 mt-16 grid grid-cols-5">
            <div className="text-4xl font-semibold col-span-4">
              <h1>Halo,</h1>
              <h1>Selamat datang!</h1>
            </div>
            {status ? (
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
            <div className="mt-3 bg-primary-2 h-40 "></div>
          </div>

          <div className="ml-5 mt-12 mb-12">
            <h1>Anggota kelas anda</h1>
            <div className="mt-3 bg-primary-2 h-screen w-full">
              {kelas ? (
                <div></div>
              ) : (
                <div className="text-center pt-48">
                  <h1 className="mb-10 text-lg">Isi Kuisioner Penentuan Kelas</h1>
                  <Link to="/kuisioner" className="btn bg-base-1 p-5 rounded-lg">Kuisioner</Link>
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
