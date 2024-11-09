import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="px-[144px]">
      <div class="header-title w-full h-[350px] flex flex-col justify-center">
        <div class="circle-bg absolute ml-[-450px]">
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
                fill-opacity="0.18"
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
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        <h1 class="font-Syne font-bold text-black2-300 text-7xl relative">
          About Me
        </h1>
        <p class="text-justify text-black2-500 w-[580px] pb-8 text-opacity-50 text-base font-semibold font-rubik">
          Little Brief About Myself
        </p>
      </div>
      <hr class="px-[144px] bg-black2-700 opacity-50" />
      <br />
      <br />
      <br />
      <br />
      <div class="header-text w-full flex items-center justify-between flex-wrap">
        <div class="mission w-[538px] px-[21px] h-[335px] leading-[85px]">
          <h2 class="font-Syne font-bold text-black2-300 text-[80px]">
            My mission is to make design easier.
          </h2>
        </div>
        <div class="mission-text w-[680px] px-[66px]">
          <p class="text-justify text-black2-500 pb-8 text-opacity-50 text-[21px] font-semibold font-OpenSans">
            Create custom Designs with AARONN that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARONN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without porbolem.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="content-section h-full w-full pb-36  flex flex-col items-center">
        <div class="personal flex justify-between w-full flex-wrap">
          <img src="/src/assets/man-1.png" alt="" />
          <img src="/src/assets/man-2.png" alt="" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="social-media w-full flex flex-col gap-10">
          <h2 class="font-Syne text-5xl font-bold text-black2-300">
            Follow me on:
          </h2>
          <div class="messneger w-full flex justify-between items-center font-Inter text-[32px] font-bold text-testimonial flex-wrap">
            <a href="#">DRIBBLE</a>
            <a href="#">TWITTER</a>
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
