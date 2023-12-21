import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/images/content1-a.png";
import appImg from "../assets/images/content1-b.png";
import graphicImg from "../assets/images/content1-c.png";

const Courses = () => {
  const dataContohIlegalContent = [
    {
      img: webImg,
      title: "Hate Speech",
      content:
        "Pesan atau tindakan yang menyebarkan kebencian terhadap kelompok tertentu berdasarkan ras, agama, atau orientasi seksual",
    },
    {
      img: appImg,
      title: "Fake News",
      content:
        "Penyebaran informasi palsu yang dapat menyebabkan keresahan dan kerusakan sosial.",
    },
    {
      img: graphicImg,
      title: "Pirated Movies",
      content:
        "Pengunggahan dan penyebaran film bajakan secara ilegal, merugikan para pembuat film.",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Ilegal" title2="Content" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        {dataContohIlegalContent.map((data, i) => (
          <CoursesCard
            img={data.img}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
