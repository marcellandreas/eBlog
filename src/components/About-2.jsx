import React from "react";
import img from "../assets/images/about2.png";
import Heading from "../layout/Heading";

const About2 = () => {
  const data = [
    {
      title: "Finansial ++",
      content:
        " Beberapa pihak melakukan konten ilegal demi mendapatkan uang dengan cepat dan mudah",
    },
    {
      title: "Niat Jahat",
      content:
        "Beberapa individu menyebarkan konten ilegal untuk merugikan orang lain atau memuaskan hasrat jahat mereka",
    },
    {
      title: "Pelanggaran Privasi",
      content:
        "Beberapa orang menyalahgunakan privasi orang lain dengan menyebarkan konten yang melanggar",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
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
          {data.map((data, i) => (
            <li className="md:flex-1 min-w-[120px] bg-green-300 rounded-lg p-3 hover:scale-90 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
              <span className=" font-bold text-slate-700">{data.title}</span>
              <br />
              {data.content}
            </li>
          ))}
        </ul>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration={700}
        className=" w-full md:w-2/4"
      >
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About2;
