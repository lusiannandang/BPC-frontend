import React from "react";
import SideBar from "../../components/SidebarUser";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Pengumuman = () => {
  const [pengumuman, setPengumuman] = useState([])
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/pengumuman");
      setPengumuman(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pengumuman</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 bg-primary-2 h-screen item-center">
              <h1 className="text-primary-2">Lihat Pengumuman</h1>
              <ul>
                {pengumuman.map((item) => (
                  <li key={item.id}>
                    <div className="mt-10">
                      <div className="bg-base-1 w-11/12 mx-auto flex">
                        <div className="px-5 py-4 space-y-2">
                          <h1 className="text-4xl">{item.judul}</h1>
                          <p>{item.isi}</p>
                        </div>
                        <div className="bg-primary-2 w-28 h-10 m-auto mr-4 text-center text-base-1">
                          <Link  to={`/user/pengumuman/${item.id}`} className="m-auto">
                            Lihat
                          </Link>
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

export default Pengumuman;
