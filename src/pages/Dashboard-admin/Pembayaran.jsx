import React from "react";
import SideBar from "../../components/SidebarAdmin";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Pembayaran = () => {
  const data = [
    {
      id: 1,
      nama: "adi",
      jumlah: 300000,
      image: "asd",
      status: false,
    },
    {
      id: 2,
      nama: "adi",
      jumlah: 300000,
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
            <h1>Pembayaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 ">
              <h1 className="text-primary-2">Lihat Pengumuman</h1>
              <ul>
                {status.map((item) => (
                  <li key={item.id}>
                    <div className="py-8">
                      <div className="bg-base-1 w-11/12 mx-auto flex">
                        <div className="flex">
                          <div className="px-5 py-4 space-y-2">
                            <h1 className="text-2xl">Nama</h1>
                            <p>{item.nama}</p>
                          </div>
                          <div className="px-5 py-4 space-y-2">
                            <h1 className="text-2xl">Jumlah</h1>
                            <p>Rp. {item.jumlah}</p>
                          </div>
                          <div className="px-5 py-4 space-y-2">
                            <h1 className="text-2xl">Bukti Bayar</h1>
                            <p>{item.kelas}</p>
                          </div>
                        </div>
                        <div className="space-x-2 h-10 m-auto mr-4 text-center text-base-1">
                          <button className="text-center bg-primary-2 w-28 py-2 hover:bg-primary-1">Konfirmasi</button>
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
