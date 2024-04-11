import React from "react";
import HeadingLayout from "../layout/Heading.layout";
import ButtonLayout from "../Layout/Button.layout";
import img from "../assets/Contactus.svg";
const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center md:mx-32 mx-5 mt-10">
      <HeadingLayout title1="Contact" title2="Us" />
      <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
        <form action="" className="w-full md:w-[50%] space-y-5 pt-20">
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 outline-none px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="userName"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="yourEmail
            "
            >
              Your Email
            </label>
            <input
              className="py-3 outline-none px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="yourEmail
              "
              id="yourEmail
              "
              placeholder="Enter Your Email
              "
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="yourNumber
            "
            >
              Your Number
            </label>
            <input
              className="py-3 px-2 outline-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="yourNumber
              "
              id="yourNumber
              "
              placeholder="Enter Your Number
              "
            />
          </div>
          <div className="flex flex-row justify-center">
            <ButtonLayout title="Send Message" />
          </div>
        </form>
        <div className="w-full md:w-[90%]  md:mt-20">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
