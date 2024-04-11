import React from "react";

const ReviewCardLayout = (props) => {
  return <div className="w-full md:w-1/3 md:h-60 bg-white border-lightText  md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
  <div>
    <p className="text-lightText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est animi saepe nobis quaerat, impedit eum exercitationem accusamus ipsa
    </p>
  </div>
  <div className="flex flex-row justify-center">
    <img className="rounded-full md:w-16 md:h-16" src={props.img} />
  </div>
</div>;
};

export default ReviewCardLayout;
