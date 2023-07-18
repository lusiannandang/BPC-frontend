import React, { useState } from "react";
import SideBar from "../../components/SidebarUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";

const UploadBayar = () => {
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState(null);
  const { jumlah, setJumlah, user } = useAuth();
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  console.log(id)

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Buat tampilan preview
    const reader = new FileReader();
    reader.onload = () => {
      const previewImage = document.getElementById("preview-image");
      previewImage.src = reader.result;
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("jumlah", jumlah);
    formData.append("image", image);
    formData.append("status", true);

    try {
      const res = await axios.post(
        `http://localhost:3000/api/users/${id}/pembayaran`,
        formData
      );
      console.log(res.data);
      setJumlah("");
      setImage(null);
      setStatus(true);
      if (res.status === 200) {
        swal({
          title: "Pembayaran Sukses",
          type: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/user/pembayaran");
          Swal.close();
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Pembayaran</h1>
          </div>
          <div className="ml-5 mt-12">
            <form className="mt-3 bg-primary-2 p-10 " onSubmit={handleSubmit}>
              <h1 className="mx-5 text-xl text-base-1 pt-5">Upload Bukti Bayar</h1>
              <h1 className="mx-5 text-xl text-base-1 pt-5">Tagihan : {jumlah}</h1>
              <div className="bg-base-1 mt-7 mx-5 w-1/2">
                <div className="flex p-10 text-lg">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      {image ? (
                        <img
                          id="preview-image"
                          src=""
                          alt="Preview"
                          className="w-64 h-32 object-contain"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                      )}
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className=" mt-7 text-right ">
                <button
                  type="submit"
                  className="bg-base-1 px-32 py-3 rounded-lg mr-10 hover:bg-primary-1"
                >
                  Bayar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default UploadBayar;
