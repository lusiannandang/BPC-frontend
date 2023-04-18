import React from "react";
import SideBar from "../../components/SidebarAdmin";
import { Link } from "react-router-dom";
import { useState } from "react";

const TambahPengumuman = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Handle perubahan judul
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Handle perubahan isi konten
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data judul dan isi konten, misalnya mengirim data ke API atau menyimpan ke state global
    console.log("Judul:", title);
    console.log("Isi Konten:", content);
    // Reset form setelah submit
    setTitle("");
    setContent("");
  };
  return (
    <>
      <div className="w-full max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Tambah Pengumuman</h1>
          </div>
          <div className="ml-5 mt-12">
            <div className="mt-3 ">
              <form onSubmit={handleSubmit}>
                <label className="block mb-3 text-sm font-medium">
                  <h1 className="mb-3 text-lg">Judul</h1>

                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
                <br />
                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
                <h1 className="mb-3 text-lg">Konten</h1>
                  <textarea
                    value={content}
                    onChange={handleContentChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
                <div className="text-right mt-8 ">
                  <Link to="/admin/pengumuman/tambah" className="text-center bg-primary-2 text-base-1 px-5 py-2 rounded-md mr-10 hover:bg-primary-1">Tambah</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TambahPengumuman;
