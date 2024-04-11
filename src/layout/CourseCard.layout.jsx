import React from "react";

const CourseCardLayout = (props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-ponter rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className="w-2/5 flex justify-center">
        <img className="w-[150px] " src={props.img} alt="" />
      </div>
      <div>
        <h3 className="font-semibold md:text-lg my-5  text-center">
          {props.title}
        </h3>
        <p className="text-lightText text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
          porro.
        </p>
      </div>
    </div>
  );
};

export default CourseCardLayout;
