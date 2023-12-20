import React from "react";
import img2 from "../assets/images/banner.png";

import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div
        data-aos="fade-left"
        data-aos-duration={700}
        className=" md:w-2/4 text-center"
      >
        <h2 className=" text-5xl font-semibold leading-tight">
          Cyber
          <span className="text-brightGreen">crime</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Kejahatan dunia maya{" "}
          <span className="text-brightGreen">CyberCrime</span> adalah istilah
          yang mengacu kepada aktivitas kejahatan dengan komputer atau jaringan
          komputer menjadi alat, sasaran atau tempat terjadinya kejahatan. Salah
          satunya bentuk <span className="text-brightGreen">CyberCrime</span>{" "}
          adalah <b className="text-brightGreen">Ilegal content</b>
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration={700}
        className=" w-full md:w-2/4"
      >
        <img src={img2} alt="img" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
