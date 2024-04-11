import React from "react";
import { Link } from "react-scroll";
import ButtonLayout from "../Layout/Button.layout";
import img from "../assets/hero.svg";

const HomePage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center gap-10  md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl leading-tight  font-semibold">
          Knowledge with
        </h2>{" "}
        <span className="text-brightGreen text-5xl font-semibold">eStudy</span>
        <p className="text-lightText mt-5 text-start">
          eStudy is your gateway to a world of limitless learning
          possibilities.With our cutting-edge eLarning platform, you can explore
          a vast library of course,from academic subjects to practical skills
          ,all designed to help you chieve your goals.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <ButtonLayout title="Contact Us" />
        </Link>
      </div>
      <div className="w-full md:w-2/4">
        <img src={img} alt="hero.svg" />
      </div>
    </div>
  );
};

export default HomePage;
