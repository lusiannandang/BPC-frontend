import React from "react";
import SideBar from "../../components/SidebarAdmin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPengumuman = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("isi", isi);
    formData.append("image", image);

    try {
      const res = await axios.put(`http://localhost:3000/api/pengumuman/${id}`, formData);
      console.log(res.data);
      // reset form input fields
      setJudul("");
      setIsi("");
      setImage(null);
      if (res.status === 200) {
        // pengumuman berhasil dibuat, navigasi kembali ke halaman pengumuman
        return navigate("/admin/pengumuman");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Edit Pengumuman</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 ">
              <form onSubmit={handleSubmit}>
                <label className="block mb-3 text-sm font-medium">
                  <h1 className="mb-3 text-lg">Judul</h1>

                  <input
                    type="text"
                    value={judul}
                    placeholder={pengumuman.judul}
                    onChange={(e) => setJudul(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
                <br />
                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  <h1 className="mb-3 text-lg">Konten</h1>
                  <textarea
                    value={isi}
                    onChange={(e) => setIsi(e.target.value)}
                    placeholder={pengumuman.isi}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
                <label>
                  Image:
                  <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </label>
                <div className="text-right mt-8 ">
                  <button type="submit" className="text-center bg-primary-2 text-base-1 px-5 py-2 rounded-md mr-10 hover:bg-primary-1">
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditPengumuman;
