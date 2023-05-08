import React from "react";
import SideBar from "../../components/SidebarAdmin";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Pembayaran = () => {
  const [pembayaran, setPembayaran] = useState([]);
  const [status, setStatus] = useState([]);
  // const data = [
  //   {
  //     id: 1,
  //     nama: "adi",
  //     jumlah: 300000,
  //     image: "asd",
  //     status: false,
  //   },
  //   {
  //     id: 2,
  //     nama: "adi",
  //     jumlah: 300000,
  //     image: "asd",
  //     status: false,
  //   },
  // ];
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/pembayaran");
      setPembayaran(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/users/${id}/pembayaran`, { status: true });
      setStatus(status.filter((item) => item.id !== id));
      setPembayaran(pembayaran.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const filteredData = pembayaran.filter((item) => item.status === false);
  console.log(filteredData);
  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pembayaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 h-screen">
              <h1 className="text-primary-2">Lihat Pengumuman</h1>
              {filteredData.length > 0 ? (
                <ul>
                  {filteredData.map((item) => (
                    <li key={item.id}>
                      <div className="py-8">
                        <div className="bg-base-1 w-11/12 mx-auto flex">
                          <div className="flex">
                            <div className="px-5 py-4 space-y-2">
                              <h1 className="text-2xl">Nama</h1>
                              <p>{item.user.name}</p>
                            </div>
                            <div className="px-5 py-4 space-y-2">
                              <h1 className="text-2xl">Jumlah</h1>
                              <p>Rp. {item.jumlah}</p>
                            </div>
                            <div className="px-5 py-4 space-y-2">
                              <h1 className="text-2xl">Bukti Bayar</h1>
                              <a href={item.image} target="_blank">
                                Lihat bukti
                              </a>
                            </div>
                          </div>
                          <div className="space-x-2 h-10 m-auto mr-4 text-center text-base-1">
                            <button onClick={() => handleApprove(item.id)} className="text-center bg-primary-2 w-28 py-2 hover:bg-primary-1">
                              Konfirmasi
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Tidak ada user yang Pembayaran Baru</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pembayaran;
