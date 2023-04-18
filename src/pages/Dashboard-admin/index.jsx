import React from "react";
import SideBar from "../../components/SidebarAdmin";

const index = () => {
  const data = [
    {
      id: 1,
      nama: "Asep",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
    {
      id: 2,
      nama: "Racing",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
    {
      id: 3,
      nama: "Kacong",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
    {
      id: 4,
      nama: "Metal",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
    {
      id: 5,
      nama: "Lala",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
    {
      id: 6,
      nama: "Odi",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
    {
      id: 7,
      nama: "Ara",
      alamat: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      tempatLahir: "lorem ipsum dolor",
      tanggalLahir: "25-3-2012",
      noHp: "08212301231",
      kelas: "Pemula"
    },
  ];
  return (
    <>
      <div className=" max-w-screen-xl flex flex-row pt-16 sm:ml-64">
        <SideBar />

        <section className="w-screen h-screen p-5">
          <div className="ml-5 text-4xl font-semibold mt-16">
            <h1>Halo Admin,</h1>
            <h1>Selamat datang!</h1>
          </div>

          <div className="ml-5 mt-12 mb-12">
            <h1>Anggota Club</h1>
            <div className="mt-3 bg-primary-2 h-screen ">
              <h1 className=" text-primary-2">Kelas Pemula</h1>
              <div>
                <div className=" bg-base-1 h-4 mx-5">
                  <div className="w-full text-sm text-left text-base-3">
                    <div className="text uppercase bg-base-1  border">
                      <div className="grid grid-cols-8 text-center font-bold">
                        <div scope="col" className="px-4 py-3">
                          No
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Nama
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Alamat
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Tempat Lahir
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Tanggal Lahir
                        </div>
                        <div scope="col" className="px-6 py-3">
                          No Hp
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Kelas
                        </div>
                        <div scope="col" className="px-6 py-3">
                          Action
                        </div>
                      </div>
                    </div>
                    <div className="bg-base-1 ">
                      {data.map((item) => (
                        <>
                          <div className="border grid grid-cols-8 text-center" key={item.id}>
                            <div className="py-3">{item.id}</div>
                            <div className="py-3">{item.nama}</div>
                            <div className="py-3">{item.alamat}</div>
                            <div className="py-3">{item.tempatLahir}</div>
                            <div className="py-3">{item.tanggalLahir}</div>
                            <div className="py-3">{item.noHp}</div>
                            <div className="py-3">{item.kelas}</div>
                            <div classname="text-center">
                              <button
                                type="button"
                                class="mt-2 text-base-1 bg-danger hover:bg-danger-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Hapus
                              </button>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
