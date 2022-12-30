import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
