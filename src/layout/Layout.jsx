const Layout = ({ children, id, flexDirection, bg, disableClassName }) => {
  const customClass = disableClassName
    ? ""
    : `min-h-screen flex ${flexDirection || "flex-col-reverse"} ${
        bg || "-"
      } md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14`;

  return (
    <section id={id || "-"} className={customClass}>
      {children}
    </section>
  );
};

export default Layout;
