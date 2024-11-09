import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContentMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="px-[144px]">
      <div className="header-title w-full h-[350px] flex flex-col justify-center">
        <div className="circle-bg absolute ml-[-450px]">
          <svg
            width="917"
            height="651"
            viewBox="0 0 917 651"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_101_462)">
              <path
                d="M485.187 449.805C580.282 443.548 642.347 408.446 702.715 326.776C825.011 161.329 110.485 108.772 209.995 290.534C272.738 405.139 363.72 457.796 485.187 449.805Z"
                fill="white"
                fillOpacity="0.18"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_101_462"
                x="0.454948"
                y="-23.6465"
                width="916.391"
                height="674.24"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_101_462"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <h1 className="font-Syne font-bold text-black2-300 text-7xl relative">
          Contact Me
        </h1>
        <p className="text-justify text-black2-500 w-[580px] pb-8 text-opacity-50 text-base font-semibold font-rubik">
          For Any Project Knock Us
        </p>
      </div>
      <hr className="px-[144px] bg-black2-700 opacity-50" />
      <br />
      <br />
      <br />
      <br />
      <div className="header-text w-full flex justify-between flex-wrap">
        <div className="touch w-[538px] h-[335px] leading-[85px]">
          <h2 className="font-Syne font-bold text-black2-300 text-[80px]">
            Get in Touch With Us
          </h2>
        </div>
        <div className="message w-1/2 flex flex-col">
          <form action="" className="flex flex-col gap-14">
            <div className="name w-full flex flex-col">
              <label
                htmlFor="name"
                className="text-black2-300 font-Rubik text-2xl font-medium"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="h-[55px] bg-transparent border-b-[1px] border-testimonial focus:border-b-2 focus:border-brand focus:outline-none"
              />
            </div>
            <div className="subject w-full flex flex-col">
              <label
                htmlFor="subject"
                className="text-black2-300 font-Rubik text-2xl font-medium"
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                className="h-[55px] bg-transparent border-b-[1px] border-testimonial focus:border-b-2 focus:border-brand focus:outline-none"
              />
            </div>
            <div className="message w-full flex flex-col">
              <label
                htmlFor="message"
                className="text-black2-300 font-Rubik text-2xl font-medium"
              >
                MESSAGE
              </label>
              <input
                type="text"
                id="message"
                className="h-[55px] bg-transparent border-b-[1px] border-testimonial focus:border-b-2 focus:border-brand focus:outline-none"
              />
            </div>
            <input
              className="w-40 h-[50px] bg-brand rounded-[50px] font-Rubik font-medium text-2xl text-black2-300"
              type="submit"
              value="SEND"
            />
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="content-section h-full w-full pb-36 px-[144px] flex flex-col items-center">
        <img
          className="self-center"
          data-aos="flip-up"
          src="/src/assets/laptop.png"
          alt=""
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="social-media w-full">
          <div className="messneger w-full flex justify-evenly items-center font-Syne text-2xl font-bold text-black2-300 flex-wrap">
            <h3>Street Avenue 21, CA</h3>
            <h3>+9 0283353</h3>
            <a className="underline leading-none" href="mailto:info@aaronn.com">
              info@aaronn.com
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ContentMe;
