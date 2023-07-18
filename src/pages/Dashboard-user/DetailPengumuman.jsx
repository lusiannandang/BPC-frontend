import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SidebarUser";

const DetailPengumuman = () => {
  const { id } = useParams();
  const [pengumuman, setPengumuman] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/pengumuman/${id}`);
      setPengumuman(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(pengumuman);

  return (
    <div>
      <div className="max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />
        <div className="ml-5 w-full">
          <h1 className="text-4xl font-semibold mt-16">Pengumuman</h1>
          <div className="mt-12 min-w-full">
          {pengumuman ? (
            <div className="w-full space-y-5">
              <img src={pengumuman.image} alt="picture" className="w-80 m-auto mb-6" />
              <h2 className="text-4xl font-semibold pl-7">{pengumuman.judul}</h2>
              <p>{pengumuman.isi}</p>
            </div>
          ) : (
            <div>Tidak ada pengumuman</div>
          )}
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default DetailPengumuman;
