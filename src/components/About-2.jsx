import React from "react";
import img from "../assets/images/about2.png";
import Heading from "../layout/Heading";
import ImgAbout from "../layout/ImgAbout";
import { dataMotifPenyebab } from "../data/data";

const About2 = () => {
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-duration={700}
        className="w-full md:w-2/4 text-center space-y-2 flex flex-col gap-4 flex-wrap"
      >
        <Heading title1="Motif?   " title2="Penyebab?" />
        <p className=" text-lightText">
          Seiring teknologi terus berkembang, tantangan etika dan keamanan
          semakin mendesak untuk diatasi.
        </p>
        <ul className="flex gap-4 flex-wrap ">
          {dataMotifPenyebab.map((data, i) => (
            <li className="md:flex-1 min-w-[120px] bg-green-300 rounded-lg p-3 hover:scale-90 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
              <span className=" font-bold text-slate-700">{data.title}</span>
              <br />
              {data.content}
            </li>
          ))}
        </ul>
      </div>
      <ImgAbout style={"fade-right"} src={img} alt={"about picture 2"} />
    </>
  );
};

export default About2;
