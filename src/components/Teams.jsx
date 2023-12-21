import photoIlham from "../assets/images/photo1.png";
import photoFenny from "../assets/images/photo2.png";
import photoMarcell from "../assets/images/photo3.png";
import photoSri from "../assets/images/photo4.png";
import Heading from "../layout/Heading";
import "./teams.css";
const Teams = () => {
  const data = [
    {
      photo: photoIlham,
      name: "Mochamad Ilham Pringgadhi",
      nim: 19201092,
      status: "Anggota",
    },
    {
      photo: photoFenny,
      name: "Fenny Ayu Lestari",
      nim: 19200994,
      status: "Ketua",
    },
    {
      photo: photoMarcell,
      name: "Marcell Andreas S. Duha",
      nim: 19200821,
      status: "Anggota",
    },
    {
      photo: photoSri,
      name: "Sri Kusumadewii",
      nim: 19201092,
      status: "Anggota",
    },
  ];
  return (
    <div className="w-full min-h-[80vh]  gap-20 md:gap-5 flex flex-col md:flex-row  md:mx-0 my-14 items-center justify-center flex-wrap relative  ">
      <Heading title1="My" title2="Team" />
      {data.map((data, i) => (
        <div
          key={i}
          className="profile-card relative w-56 h-56 bg-white p-[30px] rounded-full shadow-[-5px 8px 45px rgba(51, 51, 51, 0.126)] my-0 mx-5 hover:h-[300px]  hover:rounded-[10px]  "
        >
          <div className=" relative w-full h-full">
            <img
              src={data.photo}
              alt={`Photo of ${data.name}`}
              className=" rounded-full w-40 h-40 object-fill z-50 transition-all duration-400"
            />
          </div>
          <div className="caption">
            <h3 className=" text-lg text-[#0c52a1] font-semibold">
              {data.name}
            </h3>
            <p className=" text-base font-medium my-[2px] mb-3">{data.nim}</p>
            <p className=" text-base font-medium my-[2px] mb-3">
              {data.status}
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
