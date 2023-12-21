import React from "react";
import img from "../assets/images/about3.png";
import Heading from "../layout/Heading";
import ImgAbout from "../layout/ImgAbout";
import { dataKontenIlegal } from "../data/data";

const About3 = () => {
  return (
    <>
      <ImgAbout style={"fade-right"} src={img} alt={"about picture 3"} />
      <div
        data-aos="fade-left"
        data-aos-duration={700}
        className="w-full md:w-2/4 text-center space-y-2 flex flex-col gap-4 flex-wrap"
      >
        <Heading title1="Dampak Konten " title2="Ilegal" />
        <p className=" text-lightText">
          Seiring teknologi terus berkembang, tantangan etika dan keamanan
          semakin mendesak untuk diatasi.
        </p>
        <ul className="flex gap-4 w-full flex-wrap  ">
          {dataKontenIlegal.map((data, i) => (
            <li
              className={`${
                data.class || ""
              } bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText`}
            >
              <span className=" font-bold text-slate-700">{data.title}</span>
              <br />
              {data.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default About3;
