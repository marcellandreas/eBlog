import { useState } from "react";
import img5 from "../assets/images/content2-e.png";
import img4 from "../assets/images/content2-d.png";
import img3 from "../assets/images/content2-c.png";
import img2 from "../assets/images/content2-b.png";
import img from "../assets/images/content2-a.png";

const News = () => {
  return (
    <>
      {/* Bagian Kiri (About Us) */}
      <div className="md:w-1/2 w-full  p-5 flex flex-col justify-center items-center  h-[100vh]">
        <h2 className="text-xl text-center font-bold ">Analisa Contoh Kasus</h2>

        <h3 className=" font-bold text-center text-2xl mb-4">
          Kronologi Terbongkarnya Rumah Produksi Film Porno di Jaksel
        </h3>
        <a
          href="https://www.liputan6.com/news/read/5396033/kronologi-terbongkarnya-rumah-produksi-film-porno-di-jaksel"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-slate-800 text-white p-2 rounded-lg mb-4"
        >
          Link Kasus
        </a>
        <p className="  text-center">
          Penampakan rumah produksi film porno yang melibatkan artis, fotomodel,
          hingga selebgram sebagai pemerannya di Jagakarsa, Jakarta Selatan.
        </p>
        <ul className="container  flex gap-5 flex-col mx-auto my-8 max-h-[80vh] overflow-auto">
          <li className="  rounded-lg p-2  flex flex-col gap-2 ">
            <span className="text-center font-bold text-lg  ">Kronologi 1</span>
            <hr />
            <p className=" first-letter:pl-5 text-justify">
              Direktur Reserse Kriminal Khusus Polda Metro Jaya Kombes Ade Safri
              Simanjuntak menerangkan pengungkapan ini berawal dari patroli
              siber yang dilakukan oleh jajarannya. Terdapat situs video
              streaming yang menyediakan beberapa konten video vulgar dengan
              durasi bervariasi antara 1 hingga 1,5 jam.
            </p>
          </li>
          <li className="  rounded-lg p-2  flex flex-col gap-2 ">
            <span className="text-center font-bold text-lg  ">Kronologi 2</span>
            <hr />
            <p className=" first-letter:pl-5 text-justify">
              Pada 31 Juli 2023, penangkapan pertama dilakukan di Pasar Minggu,
              Jakarta Selatan, melibatkan sutradara dan pemilik rumah produksi
              yang dikenal sebagai I, serta kameramen bernama JAAS. Mereka
              ditangkap dalam rangka membongkar industri film porno yang
              melibatkan sejumlah artis, selebgram, dan foto model sebagai
              pemeran utama dalam produksi tersebut. Pada 1 Agustus 2023, hasil
              pemeriksaan mengarah pada penangkapan tambahan, termasuk editor
              film (AIS), sound engineering (AT), dan sekretaris sekaligus
              pemeran film dewasa (SE).
            </p>
          </li>
          <li className="  rounded-lg p-2  flex flex-col gap-2 ">
            <span className="text-center font-bold text-lg  ">Kronologi 3</span>
            <hr />
            <p className=" first-letter:pl-5 text-justify">
              Belasan pemeran rumah produksi film porno dipanggil pihak
              kepolisian. Pemanggilan itu berlaku untuk kedua selebgram Siskaeee
              dan Virly Virginia bersama sembilan pemeran perempuan lain yakni
              CN, E, BLI, M, MGP, S, J, ZS, dan AB. Beserta 5 pemeran pria lain
              BP, P, UR, AG, AD, dan RA sebagai saksi dalam kasus rumah produksi
              film porno.
            </p>
          </li>
          <li className="  rounded-lg p-2  flex flex-col gap-2 ">
            <span className="text-center font-bold text-lg  ">
              Motif dan Penyebab
            </span>
            <hr />
            <p className=" first-letter:pl-5 text-justify">
              Motif utama yang seringkali mendorong seseorang terjerumus ke
              dalam bisnis pornografi adalah motif ekonomi atau keuntungan
              finansial. Seseorang dapat melihat industri ini sebagai peluang
              bisnis yang menguntungkan dan memiliki potensi keuntungan yang
              tinggi.
            </p>
            <div>
              <h3 className="mb-5 text-lg font-semibold">Apa sih motifnya? </h3>
              <p className="bg-green-300 mb-4 rounded-lg p-3 hover:scale-90 hover:bg-transparent hover:border hover:border-green-300 text-lightText text-base">
                <span className="font-bold text-slate-700">
                  Profitabilitas Industri
                </span>
                <br />
                Bisnis pornografi sering dianggap sebagai industri yang
                menghasilkan keuntungan besar.
              </p>
              <p className="bg-green-300 mb-4 rounded-lg p-3 hover:scale-90 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
                <span className="font-bold text-slate-700">
                  Kemudahan Distribusi Online
                </span>
                <br />
                Perkembangan teknologi dan kemudahan distribusi konten melalui
                internet lebih mudah.
              </p>
              <p className="bg-green-300 mb-4 rounded-lg p-3 hover:scale-90 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
                <span className="font-bold text-slate-700">
                  Kondisi Ekonomi Pribadi
                </span>
                <br />
                Dalam himpitan kondisi ekonomi yang sulit, bisnis pornografi
                mengatasi masalah keuangan.
              </p>
              <p className="bg-green-300 mb-4 rounded-lg p-3 hover:scale-90 hover:bg-transparent hover:border hover:border-green-300 text-lightText">
                <span className="font-bold text-slate-700">
                  Keterlibatan Anonim dan Rendahnya Paparan Publik
                </span>
                <br />
                Terlibat tanpa banyak terpapar secara sosial atau publik.
              </p>
            </div>
          </li>
          <li className="  rounded-lg p-2  flex flex-col gap-2 ">
            <span className="text-center font-bold text-lg  ">
              Tindakan Hukum
            </span>
            <hr />
            <p className=" first-letter:pl-5 text-justify">
              Para tersangka dijerat Pasal 27 ayat (1) juncto Pasal 45 ayat (1)
              dan/atau Pasal 34 ayat (1) juncto Pasal
              <span className=" text-green-600 font-semibold">
                {" "}
                50 UU Nomor 19 Tahun 2016 tentang Perubahan atas Undang-Undang
                Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik{" "}
              </span>
              atau UU ITE dan Pasal 4 ayat (1) juncto Pasal 29 dan/atau Pasal 4
              ayat (2) juncto Pasal 30 dan/atau Pasal 7 juncto Pasal 33 dan atau
              Pasal 8 juncto Pasal 39 dan/atau Pasal 9 juncto Pasal 35{" "}
              <span className=" text-green-600 font-semibold">
                UU Nomor 44 Tahun 2008 tentang Pornografi
              </span>
            </p>

            <p className=" first-letter:pl-5 text-justify">
              <span className=" text-green-600 font-semibold">
                Pemblokiran terhadap 3 website
              </span>{" "}
              yang bermuatan asusila maupun pornografi oleh Kementerian
              Komunikasi dan Informatika.
            </p>
            <p className=" first-letter:pl-5 text-justify">
              <span className=" text-green-600 font-semibold">
                Pemblokiran terhadap dua rekening
              </span>{" "}
              yang diduga menjadi penampung uang dari hasil produksi rumah film
              porno
            </p>
          </li>
          <li className="  rounded-lg p-2  flex flex-col gap-2 ">
            <span className="text-center font-bold text-lg  ">Kesimpulan</span>
            <hr />
            <p className=" first-letter:pl-5 text-justify">
              Dalam menghadapi cybercrime, khususnya konten ilegal, diperlukan
              adanya{" "}
              <span className=" text-green-600 font-semibold">
                kesadaran keamanan cyber.
              </span>{" "}
              Dampak negatifnya tidak hanya merugikan individu, tapi juga
              berpotensi merugikan masyarakat dan perusahaan. Pelaku cybercrime
              menggunakan berbagai metode dalam melancarkan aksinya, sementara
              pihak penegak hukum dihadapkan pada tantangan dan perlu kerjasama
              lintas batas. Melalui kerjasama global dan perlindungan data yang
              lebih baik, kita bisa menciptakan lingkungan online yang lebih
              aman dan dapat dipercaya bagi semua pengguna.
            </p>
          </li>
        </ul>
      </div>

      {/* Bagian Kanan (Foto) */}
      <div className="md:w-1/2 w-full sticky top-0  md:h-[100vh] grid grid-flow-dense grid-cols-8 ">
        {/* Foto 1 */}
        <div className="  col-span-4  row-span-3 mb-4 pr-2">
          <img src={img} alt="Team Member 1" className="w-full rounded-lg" />
        </div>

        {/* Foto 2 */}
        <div className=" row-span-2 col-span-3 mb-4 pr-2">
          <img src={img5} alt="Team Member 2" className="w-full rounded-lg" />
        </div>

        {/* Foto 3 */}
        <div className=" row-span-2 col-span-4 mb-4 pr-2">
          <img
            src={img3}
            alt="Team Member 3"
            className="w-full rounded-lg h-full"
          />
        </div>

        {/* Foto 4 */}
        <div className=" row-span-2   col-span-2 mb-4 pr-2">
          <img
            src={img2}
            alt="Team Member 4"
            className="w-full h-full rounded-lg"
          />
        </div>

        {/* Foto 5 */}
        <div className="col-span-2 row-span-2 mb-4 pr-2">
          <img src={img4} alt="Team Member 5" className="w-full rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default News;
