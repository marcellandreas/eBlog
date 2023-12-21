import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Courses,
  Footer,
  News,
  Teams,
  About2,
  About3,
  About4,
  About5,
  About6,
} from "./components";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Layout disableClassName id="home">
            <Home />
          </Layout>

          <Layout id="about">
            <About />
          </Layout>

          <Layout disableClassName id="courses">
            <Courses />
          </Layout>

          <Layout>
            <About2 />
          </Layout>

          <Layout>
            <About3 />
          </Layout>

          <Layout>
            <About4 />
          </Layout>

          <Layout>
            <About5 />
          </Layout>

          <Layout>
            <About6 />
          </Layout>

          <Layout id="kasus">
            <News />
          </Layout>

          <Layout disableClassName id="team">
            <Teams />
          </Layout>

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
