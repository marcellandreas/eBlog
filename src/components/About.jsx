import React from "react";
import img from "../assets/images/about1.png";
import Heading from "../layout/Heading";
import ImgAbout from "../layout/ImgAbout";

const About = () => {
  const data = [
    {
      title: "konten",
      content:
        "Termasuk diantaranya adalah kekerasan, pornografi, kebencian, dan penipuan",
    },
    {
      title: "Klafisikasi",
      content:
        "Konten digital dapat bersifat digital maupun fisik, seperti file, gambar, video dan barang terlarang.",
    },
  ];
  return (
    <>
      <ImgAbout style={"fade-right"} src={img} alt={"about picture 1"} />

      <div
        data-aos="fade-left"
        data-aos-duration={700}
        className="w-full md:w-2/4 text-center space-y-2 flex flex-col gap-4"
      >
        <Heading title1=" Apa itu " title2="Konten Illegal?" />
        <p className=" text-lightText">
          Konten Illegal mencangkup segala bentuk materi yang melanggar hukum
          dan norma yang berlaku.
        </p>
        <ul className="flex gap-4 ">
          {data.map((data, i) => {
            <li className="flex-1 bg-green-300 rounded-lg p-3 hover:scale-110 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
              <span className=" font-bold text-slate-700">{data.title}</span>
              <br />
              {data.content}
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default About;
