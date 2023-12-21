import React from "react";
import img from "../assets/about.svg";
import Heading from "../layout/Heading";
import ImgAbout from "../layout/ImgAbout";
import { dataPenegakanHukum } from "../data/data";

const About4 = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-duration={700}
        className="w-full md:w-2/4 text-center space-y-2 flex flex-col gap-4 flex-wrap"
      >
        <Heading title1="Penegakan " title2="Hukum" />
        <p className="text-lightText">
          Merusak reputasi, membahayakan privasi, dan meningkatkan risiko
          kejahatan siber. Bersama, kita dapat menjaga lingkungan digital aman
          dan etis.
        </p>
        <ul className="flex flex-col gap-4 w-full">
          {dataPenegakanHukum.map((data, i) => (
            <li
              key={i}
              className="bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText"
            >
              <span className="font-bold text-slate-700">{data.title}</span>
              <br />
              {data.content}
            </li>
          ))}
        </ul>
      </div>
      <ImgAbout style={"fade-left"} src={img} alt={"about picture 3"} />
    </>
  );
};

export default About4;
