import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-scroll";

const NavComponent = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="font-semibold text-2xl cursor-pointer p-1">
            eStudy
          </Link>
        </div>
        <nav className="hidden md:flex gap-5 font-semibold cursor-pointer">
          <Link
            to="home"
            spy={true}
            duration={500}
            className="hover:text-brightGreen transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            duration={500}
            className="hover:text-brightGreen transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            duration={500}
            className="hover:text-brightGreen transition-all duration-200"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            duration={500}
            className="hover:text-brightGreen transition-all duration-200"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            duration={500}
            className="hover:text-brightGreen transition-all duration-200"
          >
            Contact
          </Link>
        </nav>
        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col bg-white absolute left-0 top-20 font-medium text-2xl text-center w-full pt-5 pb-4 gap-8 h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          duration={500}
          className="hover:text-brightGreen transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          duration={500}
          className="hover:text-brightGreen transition-all duration-200"
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          duration={500}
          className="hover:text-brightGreen transition-all duration-200"
        >
          Courses
        </Link>
        <Link
          to="reviews"
          spy={true}
          duration={500}
          className="hover:text-brightGreen transition-all duration-200"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          duration={500}
          className="hover:text-brightGreen transition-all duration-200"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavComponent;
