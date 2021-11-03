import React from "react";
import Appointment from "../components/Appointment";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Event from "../components/Event";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Classes from "../components/Classes";

function Home() {
  return (
    <>
      <Hero infos></Hero>
      <Services></Services>
      <Event />
      <Benefits />
      <Classes />
      <Testimonial />
      <Team />
      <Appointment />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default Home;
