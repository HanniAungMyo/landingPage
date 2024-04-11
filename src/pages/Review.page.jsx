import React from "react";
import HeadingLayout from "../layout/Heading.layout";
import ReviewCardLayout from "../layout/ReviewCard.layout";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
const ReviewPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center px-5 justify-center">
      <HeadingLayout title1="Our" title2="Reviews" />
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCardLayout img={img1} />
        <ReviewCardLayout img={img2} />
        <ReviewCardLayout img={img3} />
      </div>
    </div>
  );
};

export default ReviewPage;
