import img from "../assets/images/photo1.png";
import img2 from "../assets/images/photo2.png";
import img3 from "../assets/images/photo3.png";
import img4 from "../assets/images/photo4.png";
import Heading from "../layout/Heading";
import "./teams.css";
const Teams = () => {
  const data = [
    {
      photo: img,
      name: "Mochamad Ilham Pringgadhi",
      nim: 19201092,
      status: "Anggota",
    },
    {
      photo: img2,
      name: "Fenny Ayu Lestari",
      nim: 19200994,
      status: "Ketua",
    },
    {
      photo: img3,
      name: "Marcell Andreas S. Duha",
      nim: 19200821,
      status: "Anggota",
    },
    {
      photo: img4,
      name: "Sri Kusumadewii",
      nim: 19201092,
      status: "19200874",
    },
  ];
  return (
    <div className="w-full min-h-[80vh]  gap-20 md:gap-5 flex flex-col md:flex-row  md:mx-0 my-14 items-center justify-center flex-wrap relative  ">
      <Heading title1="My" title2="Team" />
      {data.map((data, i) => (
        <div key={i} className="profile-card ">
          <div className="img">
            <img
              src={data.photo}
              alt={data.name}
              className=" rounded-full w-40 h-40 object-fill z-50 transition-all duration-400"
            />
          </div>
          <div className="caption">
            <h3>{data.name}</h3>
            <p>{data.nim}</p>
            <p>{data.status}</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
