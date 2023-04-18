import React, { useState, useEffect } from "react";
import SideBar from "../../components/SidebarAdmin";
import { Link } from "react-router-dom";

const Pembayaran = () => {
  const data = [
    {
      id: 1,
      nama: "adi",
      kelas: "Pemula",
      image: "asd",
      status: false,
    },
    {
      id: 2,
      nama: "adi",
      kelas: "Pemula",
      image: "asd",
      status: false,
    },
  ];

  const [status, setStatus] = useState([]);

  const filterData = () => {
    const filteredData = data.filter((item) => item.status === false);
    setStatus(filteredData);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pendaftaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 ">
              <h1 className="text-primary-2">Lihat Pengumuman</h1>
              <ul>
                <h1 className="ml-14 text-lg text-base-1">Ajuan Pendaftar</h1>
                {status.map((item) => (
                  <li key={item.id}>
                    <div className="py-8">
                      <div className="bg-base-1 w-11/12 mx-auto flex">
                        <div className="px-5 py-4 space-y-2">
                          <h1 className="text-4xl">{item.nama}</h1>
                          <p>{item.kelas}</p>
                        </div>
                        <div className="space-x-2 h-10 m-auto mr-4 text-center text-base-1">
                          <button className="mt-2  text-center bg-primary-2 w-28 py-2 hover:bg-primary-1">Setujui</button>
                          <button className="mt-2 text-center bg-danger w-28 py-2 hover:bg-danger-1">Hapus</button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pembayaran;
