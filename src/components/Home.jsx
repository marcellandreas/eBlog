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
          ILLEGAL
          <span className="text-brightGreen"> Contents</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Ilegal Content Itu? Apa ya? melanggar hukum atau kebijakan. Ini bisa
          termasuk pornografi anak, kebencian rasial, pelanggaran hak cipta,
          atau konten yang merangsang kekerasan.
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
