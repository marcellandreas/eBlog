import React from "react";
import img from "../assets/images/about3.png";
import Heading from "../layout/Heading";

const About3 = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div
        data-aos="fade-right"
        data-aos-duration={700}
        className=" w-full md:w-2/4"
      >
        <img src={img} alt="img" className="w-full" />
      </div>
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
          <li className="md:w-[260px] w-full bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className=" font-bold text-slate-700">Kerusakan Mental</span>
            <br />
            Konten ilegal dapat menyebabkan gangguan mental, terutama pada
            anak-anak dan remaja
          </li>
          <li className="md:w-[260px] w-full h-[140px] bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className=" font-bold text-slate-700">
              Kerugian Finansial
            </span>
            <br />
            Industri kreatif dan pemilik hak cipta menderita kerugian finansial
            akibat konten ilegal
          </li>
          <li className="  bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className=" font-bold text-slate-700">Perpecahan Sosial</span>
            <br />
            Konten ilegal bisa memperburuk ketegangan dan perpecahan dalam
            masyarakat
          </li>
          <li className="  bg-green-300 rounded-lg p-3 hover:scale-95 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
            <span className=" font-bold text-slate-700">
              Kerentanan Anak-anak
            </span>
            <br />
            Meningkatkan risiko pelecehan terhadap anak-anak, karena mereka
            dapat menjadi korban produksi atau distribusi konten semacam itu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About3;
