const ImgAbout = ({ style, src, alt, className }) => {
  return (
    <div
      data-aos={style}
      data-aos-duration={700}
      className={`w-full md:w-2/4 ${className || "-"}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImgAbout;
