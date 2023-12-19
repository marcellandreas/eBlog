import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import News from "./components/News";
import Teams from "./components/Teams";
import About2 from "./components/About-2";
import About3 from "./components/About-3";
import About4 from "./components/About-4";
import About5 from "./components/About-5";
import About6 from "./components/About-6";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="courses">
            <Courses />
          </div>

          <div>
            <About2 />
          </div>

          <div>
            <About3 />
          </div>

          <div>
            <About4 />
          </div>

          <div>
            <About5 />
          </div>
          <div>
            <About6 />
          </div>

          <div id="kasus">
            <News />
          </div>

          <div id="team">
            <Teams />
          </div>

          {/* <div id="contact">
            <Contact />
          </div> */}
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
