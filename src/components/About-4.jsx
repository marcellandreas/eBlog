import React from "react";
import img from "../assets/about.svg";
import Heading from "../layout/Heading";

const About4 = () => {
  const data = [
    {
      title: "Identifikasi dan Pelacakan",
      content:
        "Otoritas berupaya mengidentifikasi pelaku dan melacak jejak konten ilegal",
    },
    {
      title: "Proses Hukum",
      content:
        "Penegakan hukum dilakukan untuk membawa pelaku ke pengadilan dan memberikan hukuman yang setimpal",
    },
    {
      title: "Kerjasama Internasional",
      content:
        "Kolaborasi antarnegara dalam menangani konten ilegal melalui pertukaran informasi dan sumber daya",
    },
  ];
  return (
    <div className="bg-gray-200 md:bg-transparent md:min-h-screen flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-0 p-5 md:p-0 mt-14">
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
          {data.map((data, i) => (
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
      <div
        data-aos="fade-left"
        data-aos-duration={700}
        className="w-full md:w-2/4"
      >
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About4;
