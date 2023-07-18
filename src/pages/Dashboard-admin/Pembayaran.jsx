import React from "react";
import SideBar from "../../components/SidebarAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert";

const Pembayaran = () => {
  const [pembayaran, setPembayaran] = useState([]);
  const [status, setStatus] = useState([]);
  
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
  
console.log(pembayaran);
  const handleApprove = async (userId, id) => {
    try {
      const formData = new FormData();
      formData.append("status", true);
  
      await axios.put(`http://localhost:3000/api/users/${userId}/pembayaran/${id}`, formData);
  
      setStatus(status.filter((item) => item.id !== id));
      setPembayaran(pembayaran.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}/pembayaran`);
      getData(); 
    } catch (err) {
      console.error(err);
    }
  };
  
  const filteredData = pembayaran.filter((item) => item.status === false);

  const showConfirmation = (userId, id, action) => {
  let confirmationText = "";
  let confirmationTitle = "";
  let confirmationFunction = null;

  if (action === "delete") {
    confirmationTitle = "Konfirmasi";
    confirmationText = "Apakah Anda yakin ingin menolak pembayaran?";
    confirmationFunction = () => handleDelete(id);
  } else if (action === "approve") {
    confirmationTitle = "Konfirmasi";
    confirmationText = "Apakah Anda yakin ingin menyetujui Pembayaran?";
    confirmationFunction = () => handleApprove(userId, id);
  }

  Swal({
    title: confirmationTitle,
    text: confirmationText,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((confirm) => {
    if (confirm) {
      confirmationFunction();
      console.log("Konfirmasi berhasil");
      Swal.close();
    } else {
      Swal.close();
      console.log("Konfirmasi dibatalkan");
    }
  });
};


  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen min-h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pembayaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 min-h-screen">
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
                              <p>{item.User.name}</p>
                            </div>
                            <div className="px-5 py-4 space-y-2">
                              <h1 className="text-2xl">Jumlah</h1>
                              <p>Rp. {item.jumlah}</p>
                            </div>
                            <div className="px-5 py-4 space-y-2">
                              <h1 className="text-2xl">Bukti Bayar</h1>
                              <a href={item.image} target="_blank" className="text-primary-2">
                                Lihat bukti
                              </a>
                            </div>
                          </div>
                          <div className="space-x-2 h-10 m-auto mr-4 text-center text-base-1">
                            <button onClick={() =>  showConfirmation(item.userId, item.id, "approve")} className="text-center bg-primary-2 w-28 py-2 hover:bg-primary-1">
                              Konfirmasi
                            </button>
                            <button onClick={() => showConfirmation(item.userId, item.id, "delete")} className="mt-2 text-center bg-danger w-28 py-2 hover:bg-danger-1">
                                Tolak
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
