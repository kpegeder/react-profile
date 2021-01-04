import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Nav";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
