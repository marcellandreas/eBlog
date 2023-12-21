import React from "react";
import img from "../assets/images/about4.png";
import Heading from "../layout/Heading";
import { dataPeranTeknologi } from "../data/data";
const About5 = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-duration={700}
        className=" md:w-2/4 flex flex-col justify-center items-center"
      >
        <Heading title1="Peran " title2="Teknologi" />
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
          {dataPeranTeknologi.map((data, i) => {
            <li
              key={i}
              className="bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText"
            >
              <span className="font-bold text-slate-700">{data.title}</span>
              <br />
              {data.content}
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default About5;
