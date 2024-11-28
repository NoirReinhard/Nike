import React from "react";
import { reviews } from "../constants";
import { star } from "../assets/icons";

const Review = () => {
  return (
    <div className="bg-pale-blue ">
      <div className="padding">
        <h1 className="text-4xl font-bold font-palanquin text-center">
          What Our <span className="text-coral-red">Customers </span>
          <span> Say?</span>
        </h1>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="flex max-lg:flex-col">
          {reviews.map((item, i) => (
            <div className="flex justify-center flex-col items-center" key={i}>
              <img
                src={item.imgURL}
                alt=""
                className="rounded-full h-[120px] w-[120px] mt-[5rem]"
              />
              <p className="text-slate-gray text-xl leading-normal w-[70%] text-center py-5">
                {item.feedback}
              </p>
              <div className="flex gap-2">
                <img src={star} alt="" />
                <span className="text-slate-gray text-xl font-montserrat">
                  (4.5)
                </span>
              </div>
              <p className="text-2xl font-bold font-montserrat pt-6">
                {item.customerName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Review;
