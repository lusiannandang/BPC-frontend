import React from "react";
import SideBar from "../../components/SidebarUser";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pembayaran = () => {
  const [status, setStatus] = useState(false);

  return (
    <>
      <div className="max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pembayaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 p-10 ">
              <h1 className="mx-5 text-xl text-base-1 pt-5">Iuran Bulanan</h1>
              <div className="bg-base-1 mt-7 mx-5 w-1/2">
                {status ? (
                  <div className="flex p-10 text-lg">
                    <div className="space-y-9 mr-9">
                      <h1>Status</h1>
                      <h1>Jumlah</h1>
                    </div>
                    <div className="space-y-9">
                      <h1>Lunas</h1>
                      <h1>350000000</h1>
                    </div>
                  </div>
                ) : (
                  <div className="flex p-10 text-lg">
                    <div className="space-y-9 mr-9">
                      <h1>Status</h1>
                      <h1>Jumlah</h1>
                    </div>
                    <div className="space-y-9">
                      <h1>Belum Bayar</h1>
                      <h1>350000000</h1>
                    </div>
                  </div>
                )}
              </div>

              {status ? (
                <div className=" mt-7 text-right ">
                <Link to="/pembayaran/upload" className="bg-base-1 px-32 py-3 rounded-lg mr-10 hover:bg-primary-1 cursor-default" style={{pointerEvents: "none"}}>
                  Bayar
                </Link>
              </div>
              ) : (
                <div className=" mt-7 text-right ">
                  <Link to="/user/pembayaran/upload" className="bg-base-1 px-32 py-3 rounded-lg mr-10 hover:bg-primary-1 ">
                    Bayar
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

export default Pembayaran;