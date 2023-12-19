import React from "react";
import img from "../assets/images/about4.png";
import Heading from "../layout/Heading";

const About5 = () => {
  return (
    <div className=" md:min-h-screen flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-0 p-5 md:p-0 mt-14">
      <div
        data-aos="fade-right"
        data-aos-duration={700}
        className=" md:w-2/4 flex flex-col justify-center items-center"
      >
        <Heading title1="Peran " title2="Teknologi   " />
        <img src={img} alt="img" className="w-4/5" />
      </div>
      {/* <div className="w-full md:w-2/4">
      </div> */}

      <div
        data-aos="fade-left"
        data-aos-duration={700}
        className="w-full md:w-2/4 text-center space-y-2 flex flex-col gap-4 flex-wrap"
      >
        <p className="text-lightText">
          Teknologi bikin hidup jadi seru! Mulai dari belajar online, ketemu
          teman di medsos, sampe yang bikin keseharian kita makin nyaman. Tapi,
          kita juga perlu paham gimana main teknologi tanpa bikin masalah.
          Eksplor dunia digital bareng! 🌐✨
        </p>
        <ul className="flex flex-col gap-4 w-full">
          <li className="bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className="font-bold text-slate-700">
              Algoritma Pendeteksi
            </span>
            <br />
            Teknologi dapat digunakan untuk mengidentifikasi dan memblokir
            konten ilegal secara otomatis
          </li>
          <li className="bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className="font-bold text-slate-700">
              Pengembangan Solusi
            </span>
            <br />
            Tim teknis terus mengembangkan solusi teknologi untuk memerangi
            konten ilegal
          </li>
          <li className="bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className="font-bold text-slate-700">Filter Konten</span>
            <br />
            Platform online dapat menggunakan filter untuk mencegah dan
            menghapus konten yang melanggar hukum
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About5;
