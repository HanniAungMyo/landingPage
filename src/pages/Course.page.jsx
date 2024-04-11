import React from "react";
import HeadingLayout from "../layout/Heading.layout";
import CourseCardLayout from "../layout/CourseCard.layout";
import webImg from "../assets/webImg.svg";
import appImg from "../assets/appImg.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

const CoursePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <HeadingLayout title1="Our" title2="Courses" />
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <CourseCardLayout img={webImg} title="Web Developement" />
        <CourseCardLayout img={appImg} title="App Developement" />
        <CourseCardLayout img={graphicImg} title="Graphic Designer" />
        <CourseCardLayout img={digitalImg} title="Digital Marking" />
      </div>
    </div>
  );
};

export default CoursePage;
