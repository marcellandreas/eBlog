import React from "react";
import img from "../assets/images/about5.png";

import Heading from "../layout/Heading";

const About6 = () => {
  const data = [
    {
      title: "Peningkatan Kesadaran",
      content:
        "Mengembangkan pemahaman yang lebih baik tentang bahaya konten ilegal kepada masyarakat.",
    },
    {
      title: "Kolaborasi",
      content:
        "Bekerja sama antara pemerintah, platform online, dan masyarakat untuk memerangi konten ilegal.",
    },
    {
      title:
        "Bekerja sama antara pemerintah, platform online, dan masyarakat untuk memerangi konten ilegal.      ",
      content:
        "Hukuman yang tegas dan cepat dapat menjadi deterrent bagi pelaku konten ilegal.",
    },
  ];
  return (
    <div className=" md:min-h-screen flex flex-col items-center gap-5 md:mx-32 mx-0 p-5 md:p-0 mt-14">
      <Heading title1="Upaya Pencegahan " title2="Konten Ilegal" />
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className=" md:w-2/4 flex flex-col justify-center items-center">
          <img src={img} alt="img" className="w-full" />
        </div>
        {/* <div className="w-full md:w-2/4">
      </div> */}

        <div className="w-full md:w-2/4 text-center space-y-2 flex flex-col gap-4 flex-wrap">
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
      </div>
    </div>
  );
};

export default About6;
