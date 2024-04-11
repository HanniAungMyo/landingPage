import React from "react";
import { Link } from "react-scroll";

const FooterComponent = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row border-2 p-2 rounded-lg justify-between md:px-32 bg-white px-5">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
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
        <div>
            <Link to="/" className="font-semibold text-2xl cursor-pointer p-1">
              eStudy
            </Link>
          </div>
      </div>
    </div>
  );
};

export default FooterComponent;
