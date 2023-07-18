import React from "react";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-base-1 h-full pt-16">
        <div>
          <Swiper
            className="bg-base-2 relative "
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <img src="/gambar1.jpeg" alt="" className="w-screen h-screen opacity-25" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/gambar2.jpeg" alt="" className="w-screen h-screen opacity-25" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/gambar3.jpg" alt="" className="w-screen h-screen opacity-25" />
            </SwiperSlide>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">
              <h1 className=" text-5xl text-base-1 font-bold ">Banyu Pratama Swimming Club</h1>
              <h1 className=" text-3xl text-base-1 font-bold text-center ">Swim Faster, Build Different</h1>
            </div>
          </Swiper>
        </div>

        <section>
          <div className="flex flex-col items-center justify-center py-12 text-center gap-y-3">
            <h3 className="text-base-3 text-[40px] font-bold">Tentang kami</h3>
            <h3 className="text-base-3 text-lg">Perkumpulan renang yang terletak di kabupaten Cilacap</h3>
            <div className="grid grid-cols-1 gap-6 my-3 lg:grid-cols-3">
              <div className="flex flex-col items-center max-w-sm text-center gap-y-3">
                <div className="h-64">
                  <img src="/gambar2.jpeg" alt="" className="max-w-52" />
                </div>
                <h5 className="text-[20px] text-base-3 font-semibold">Club yang terpercaya</h5>
                <p className="text-[#454848]">Temukan kekuatanmu di dalam air. Bergabunglah dengan kami di Club Renang Terpercaya dan nikmati pengalaman renang yang menginspirasi, instruktur terlatih, dan fasilitas yang modern. Bersama, kita menjelajahi keajaiban renang dan mencapai prestasi yang luar biasa!</p>
              </div>
              <div className="flex flex-col items-center max-w-sm text-center gap-y-3">
                <div className="h-64">
                  <img src="/gambar2.jpeg" alt="" className="max-w-52" />
                </div>
                <h5 className="text-[20px] text-base-3 font-semibold">Sistem latihan yang baik</h5>
                <p className="text-[#454848]">Latihan yang baik adalah kunci menuju kesuksesan. Temukan kekuatan dalam konsistensi, disiplin dalam upaya, dan transformasi dalam dedikasi. Bergabunglah dengan sistem latihan kami dan temukan potensi Anda yang sejati.</p>
              </div>
              <div className="flex flex-col items-center max-w-sm text-center gap-y-3">
                <div className="h-64">
                  <img src="/gambar2.jpeg" alt="" className="max-w-52" />
                </div>
                <h5 className="text-[20px] text-base-3 font-semibold">Pelatih yang berpengalaman</h5>
                <p className="text-[#454848]">Berlatih bersama pelatih yang berpengalaman dalam mencetak atlet - atlet unggulan dan berprestasi!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-1 m-10 rounded rounded-lg dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bergabung dan berprestasi bersama</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
             Mari bergabung dengan Banyu Pratama Swimming Club dan menjadi atlet renang yang berprestasi!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/register"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Daftar Sekarang!
              </a>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default Home;
