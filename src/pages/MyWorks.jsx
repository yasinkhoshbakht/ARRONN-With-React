import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyWorks() {
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
          My works
        </h1>
        <p className="text-justify text-black2-500 w-[580px] pb-8 text-opacity-50 text-base font-semibold font-rubik">
          Showcase About Works
        </p>
      </div>
      <hr className="px-[144px] bg-black2-700 opacity-50" />
      <br />
      <br />
      <br />
      <br />
      <div className="header-cards w-full flex justify-between flex-wrap">
        <div
          className="card h-[440px] flex flex-col justify-between text-center"
          data-aos="fade-right"
        >
          <img src="/src/assets/my-work-1.png" alt="Work 1" />
          <p className="font-Inter font-bold text-[13px] text-workCard">BLUE</p>
          <h4 className="text-2xl font-bold font-Inter text-black2-300">
            Orvillebury
          </h4>
        </div>
        <div
          className="card h-[440px] flex flex-col justify-between text-center"
          data-aos="fade-up"
        >
          <img src="/src/assets/my-work-2.png" alt="Work 2" />
          <p className="font-Inter font-bold text-[13px] text-workCard">
            GREEN
          </p>
          <h4 className="text-2xl font-bold font-Inter text-black2-300">
            West Lavada
          </h4>
        </div>
        <div
          className="card h-[440px] flex flex-col justify-between text-center"
          data-aos="fade-left"
        >
          <img src="/src/assets/my-work-3.png" alt="Work 3" />
          <p className="font-Inter font-bold text-[13px] text-workCard">AQUA</p>
          <h4 className="text-2xl font-bold font-Inter text-black2-300">
            Rempelshire
          </h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="content-section h-full w-full pb-36 flex flex-col items-center">
        <div className="content-cards w-full flex justify-between flex-wrap gap-[20px]">
          <div
            className="card h-[440px] flex flex-col justify-between text-center"
            data-aos="fade-right"
            style={{ minWidth: "250px" }}
          >
            <img src="/src/assets/my-work-4.png" alt="Work 4" />
            <p className="font-Inter font-bold text-[13px] text-workCard">
              LIME
            </p>
            <h4 className="text-2xl font-bold font-Inter text-black2-300">
              Delfinaland
            </h4>
          </div>
          <div
            className="card h-[440px] flex flex-col justify-between text-center"
            data-aos="fade-left"
            style={{ minWidth: "250px" }}
          >
            <img src="/src/assets/my-work-5.png" alt="Work 5" />
            <p className="font-Inter font-bold text-[13px] text-workCard">
              FUCHSIA
            </p>
            <h4 className="text-2xl font-bold font-Inter text-black2-300">
              Buckridgeburgh
            </h4>
          </div>
          <div
            className="card h-[440px] flex flex-col justify-between text-center"
            data-aos="fade-right"
            style={{ minWidth: "250px" }}
          >
            <img src="/src/assets/my-work-6.png" alt="Work 6" />
            <p className="font-Inter font-bold text-[13px] text-workCard">
              BLACK
            </p>
            <h4 className="text-2xl font-bold font-Inter text-black2-300">
              Pfefferstad
            </h4>
          </div>
          <div
            className="card h-[440px] flex flex-col justify-between text-center"
            data-aos="fade-up"
            style={{ minWidth: "250px" }}
          >
            <img src="/src/assets/my-work-7.png" alt="Work 7" />
            <p className="font-Inter font-bold text-[13px] text-workCard">
              PURPLE
            </p>
            <h4 className="text-2xl font-bold font-Inter text-black2-300">
              South Adrienne
            </h4>
          </div>
          <div
            className="card h-[440px] flex flex-col justify-between text-center"
            data-aos="fade-left"
            style={{ minWidth: "250px" }}
          >
            <img src="/src/assets/my-work-8.png" alt="Work 8" />
            <p className="font-Inter font-bold text-[13px] text-workCard">
              MAROON
            </p>
            <h4 className="text-2xl font-bold font-Inter text-black2-300">
              Lake Trevor
            </h4>
          </div>
        </div>
        <br />
        <br />
        <br />
        <a href="#">
          <button className="bg-transparent w-[242px] h-[65px] rounded-[30px] text-brand font-Inter font-bold text-[13px] border border-brand">
            EXPLORE MORE
          </button>
        </a>
      </div>
    </div>
  );
}

export default MyWorks;
