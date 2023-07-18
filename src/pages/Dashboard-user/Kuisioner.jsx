import React, { useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const KuisionerForm = () => {
  const { user, setUser, getKelas } = useAuth();
  const navigate = useNavigate();

  const id = localStorage.getItem("id");

  const [hasilPrediksi, setHasilPrediksi] = useState("");
  const [kuisionerData, setKuisionerData] = useState({
    lamaLatihan: "",
    jumlahPrestasi: "",
    waktuGayaBebas: "",
    gayaDikuasai: "",
    jarakLatihan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKuisionerData({ ...kuisionerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(kuisionerData);
    try {
      const response = await axios.post(`http://localhost:3000/api/users/${id}/kelas`, kuisionerData);
      if (response.status === 200) {
        const hasilPrediksi = response.data;
        console.log(hasilPrediksi);
        setHasilPrediksi(hasilPrediksi);
        swal({
          title: "Kelas Anda",
          text: `${hasilPrediksi.nama}`,
          type: "success",
          confirmButtonText: "OK",
        }).then(() => {
          getKelas(); 
          navigate("/user");
        });
      } else {
        console.error("Terjadi kesalahan dalam mengirim data kuisioner");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-base-1 h-full pt-20 px-40 space-y-7">
        <h1 className="text-center text-4xl">Kuisioner</h1>
        <form className="block space-y-7" onSubmit={handleSubmit}>
          <div className="">
            <div className="bg-primary-1">
              {hasilPrediksi && (
                <div className="bg-primary-1 px-10 h-28 mt-4 my-auto">
                  <h2>Hasil Prediksi</h2>
                  <p>Hasil: {hasilPrediksi.nama}</p>
                </div>
              )}
              <p className="px-10 h-28 py-10 text-xl">Sebagai penentuan kelas latihan pada Banyu Pratama Swimming Club, anda harus mengisi bebepra pertanyaan!</p>
            </div>

            <div className="bg-primary-1 px-10 h-28 mt-4 my-auto">
              <h1 className="py-4 text-xl">Lama latihan</h1>
              <div className="space-x-16 flex">
                <div className="space-x-4">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="lamaLatihan"
                    value="0 – 4 bulan"
                    onChange={handleChange}
                  />
                  <label>0 – 4 bulan</label>
                </div>
                <div className="space-x-4">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="lamaLatihan"
                    value="4 bulan – 1 tahun"
                    onChange={handleChange}
                  />
                  <label>4 bulan – 1 tahun</label>
                </div>
                <div className="space-x-4">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="lamaLatihan"
                    value="> 1 tahun"
                    onChange={handleChange}
                  />
                  <label>Lebih dari 1 tahun</label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-1 px-10 h-28 mt-4 my-auto">
            <h1 className="py-4 text-xl">Jumlah Prestasi</h1>
            <div className="space-x-16 flex">
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="jumlahPrestasi"
                  value="0"
                  onChange={handleChange}
                />
                <label>0</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="jumlahPrestasi"
                  value="1 – 5"
                  onChange={handleChange}
                />
                <label>1 - 5</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="jumlahPrestasi"
                  value="> 5"
                  onChange={handleChange}
                />
                <label>Lebih dari 5</label>
              </div>
            </div>
          </div>

          <div className="bg-primary-1 px-10 h-28 mt-4 my-auto">
            <h1 className="py-4 text-xl">Waktu gaya bebas 50 m</h1>
            <div className="space-x-16 flex">
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="waktuGayaBebas"
                  value="0 – 4 bulan"
                  onChange={handleChange}
                />
                <label>0 (kosong)</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="waktuGayaBebas"
                  value=">1 menit"
                  onChange={handleChange}
                />
                <label>Lebih dari 1 menit</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="waktuGayaBebas"
                  value="< 1 menit"
                  onChange={handleChange}
                />
                <label>Kurang dari 1 menit</label>
              </div>
            </div>
          </div>

          <div className="bg-primary-1 px-10 h-28 mt-4 my-auto">
            <h1 className="py-4 text-xl">Gaya yang dikuasai</h1>
            <div className="space-x-16 flex">
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="gayaDikuasai"
                  value="0"
                  onChange={handleChange}
                />
                <label>0</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="gayaDikuasai"
                  value="1-2"
                  onChange={handleChange}
                />
                <label>1 - 2 Gaya</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="gayaDikuasai"
                  value="3-4"
                  onChange={handleChange}
                />
                <label>3 - 4 Gaya</label>
              </div>
            </div>
          </div>

          <div className="bg-primary-1 px-10 h-28 mt-4 my-auto">
            <h1 className="py-4 text-xl">Jarak latihan</h1>
            <div className="space-x-16 flex">
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="jarakLatihan"
                  value="0 (kosong)"
                  onChange={handleChange}
                />
                <label>0 (kosong)</label>
              </div>
              <div className="space-x-4">
              <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="jarakLatihan"
                  value="Memendek"
                  onChange={handleChange}
                />
                <label>Memendek</label>
              </div>
              <div className="space-x-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="jarakLatihan"
                  value="Memanjang"
                  onChange={handleChange}
                />
                <label>Memanjang</label>
              </div>
            </div>
          </div>
          <div className="text-right pb-10">
            <button className="mt-2 text-center bg-primary-1 w-28 py-2 hover:bg-primary-2 rounded-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default KuisionerForm;
