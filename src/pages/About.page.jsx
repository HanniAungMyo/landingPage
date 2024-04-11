import React from "react";
import img from "../assets/about.svg";
import { Link } from "react-scroll";
import ButtonLayout from "../Layout/Button.layout";
import HeadingLayout from "../layout/Heading.layout";
const AboutPage = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 space-y-4 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
      <div className="w-full md:w-2/4 text-center space-y-2">
        <HeadingLayout title1="About" title2="Us?" />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ad
          necessitatibus expedita aliquam et veritatis ipsa cumque rerum
          quisquam laboriosam.
        </p>
        <Link>
          <ButtonLayout title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
