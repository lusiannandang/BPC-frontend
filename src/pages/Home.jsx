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
                <p className="text-[#454848]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore eius omnis possimus sequi. Delectus architecto ipsa consequuntur ullam ab officiis dolorum! Nam aliquam voluptatibus nihil et earum dolore? Nihil, molestiae!</p>
              </div>
              <div className="flex flex-col items-center max-w-sm text-center gap-y-3">
                <div className="h-64">
                  <img src="/gambar2.jpeg" alt="" className="max-w-52" />
                </div>
                <h5 className="text-[20px] text-base-3 font-semibold">Sistem latihan yang baik</h5>
                <p className="text-[#454848]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum aliquid molestiae accusamus velit unde enim fugiat! Ab aut et sapiente ullam atque quo dolorum, excepturi, aperiam enim, modi molestiae totam?</p>
              </div>
              <div className="flex flex-col items-center max-w-sm text-center gap-y-3">
                <div className="h-64">
                  <img src="/gambar2.jpeg" alt="" className="max-w-52" />
                </div>
                <h5 className="text-[20px] text-base-3 font-semibold">Harga yang bersahabat</h5>
                <p className="text-[#454848]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illum error nesciunt at blanditiis? Magni vero, dignissimos aut delectus eveniet adipisci nobis perferendis? Corporis nulla tempora adipisci totam voluptatibus dolorem.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-1 m-10 rounded rounded-lg dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bergabung dan berprestasi bersama</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati ducimus distinctio molestiae possimus tempora at corporis omnis, iste eum libero porro consectetur architecto dicta ipsum dignissimos laudantium iure necessitatibus.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Daftar Sekarang
                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a
                href="/register"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Daftar Disini
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
