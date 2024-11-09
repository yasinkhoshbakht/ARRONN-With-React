import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div class="header-title w-full h-screen" data-aos="zoom-in">
        <div class="circle-bg absolute rotate-12 ml-[500px] top-[20px] z-10">
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
        <div class="title h-full w-full flex justify-center items-center text-center flex-col relative">
          <h1 class="font-Syne font-bold text-black2-300 text-7xl pb-3">
            Adaptive Logo Design
          </h1>
          <h1 class="font-Syne font-bold text-black2-300 text-7xl">
            for Your Brand
          </h1>
          <div class="brand w-full flex justify-center h-28 pt-28 z-20">
            <a>
              <button class="bg-brand w-60 h-16 rounded-[30px] flex items-center justify-center shadow-2xl shadow-black text-white font-Rubik font-bold text-sm gap-6">
                EXPLORE WORKS
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5H17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 1L17 6L12 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="content-section h-full w-full pb-36">
        <div class="closer w-full h-screen flex flex-row px-[144px] justify-between">
          <div
            class="closer-text w-[875px] flex flex-col gap-12 py-16"
            data-aos="fade-right"
          >
            <div class="circle-bg-second absolute ml-[-450px] mt-[-250px] z-10">
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
            <h2 class="font-Syne text-justify font-bold text-black2-300 text-6xl relative">
              Let’s get know
              <br />
              about me closer
            </h2>
            <p class="text-justify text-black2-500 w-[580px] pb-8 text-opacity-50 text-xl">
              Aaronn is a New York-based visual designer focusing on branding
              and visual identity. Her portfolio showcases her wide range of
              work, spanning books, posters and web design.
            </p>
            <a class="z-20">
              <button class="bg-brand w-72 h-[60px] rounded-[30px] flex items-center justify-center shadow-2xl shadow-black text-white font-Rubik font-bold text-sm">
                Discover More About Me
              </button>
            </a>
          </div>
          <div class="man w-1/2 h-screen flex justify-end" data-aos="fade-left">
            <img class="w-[470px] h-[510px]" src="/src/assets/man.png" alt="" />
          </div>
        </div>
        <div class="projects w-full h-[2200px] flex flex-col">
          <div class="title w-full h-52 flex justify-between flex-col items-center">
            <div class="projects-title-bg absolute mt-[-250px] ml-[380px] z-10">
              <svg
                width="741"
                height="581"
                viewBox="0 0 741 581"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_101_461)">
                  <path
                    d="M388.282 380.439C450.966 376.315 491.877 353.176 531.67 299.342C612.284 190.285 141.291 155.641 206.885 275.453C248.243 350.996 308.215 385.706 388.282 380.439Z"
                    fill="white"
                    fill-opacity="0.2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_101_461"
                    x="0.595825"
                    y="0.18811"
                    width="740.389"
                    height="580.771"
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
                      result="effect1_foregroundBlur_101_461"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <h1 class="font-Syne font-bold text-black2-300 text-[64px] relative">
              My Projects Highlight
            </h1>
            <a class="z-20">
              <button class="bg-transparent w-[242px] h-[65px] rounded-[30px] flex items-center justify-center text-white font-Rubik font-bold text-sm border border-brand gap-6">
                EXPLORE MORE
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5H17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 1L17 6L12 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div class="cards-container w-full h-[1630px] flex flex-wrap gap-y-20 gap-x-8 px-[144px] justify-between pt-20">
            <div
              class="card h-[770px] flex flex-col justify-between text-justify"
              data-aos="fade-right"
            >
              <img
                class="rounded-[16px]"
                src="/src/assets/project-1.jpg"
                alt=""
              />
              <div class="card-title flex gap-10 items-center text-black2-500 text-2xl font-bold">
                <h3 class="font-Syne">Brand Journey Improvements</h3>
                <div class="line w-[48px] h-[1px] bg-brand"></div>
              </div>
              <div class="card-content font-Rubik text-[14px]">
                <div class="client flex pb-2">
                  <h4 class="text-card pr-8">Client:</h4>
                  <p class="text-black2-500">Organc</p>
                </div>
                <div class="work flex">
                  <h4 class="text-card pr-9">Work:</h4>
                  <p class="text-black2-500">Branding</p>
                  <p class="pl-3 text-black2-500">Logo desine</p>
                </div>
              </div>
            </div>
            <div
              class="card h-[770px] flex flex-col justify-between text-justify"
              data-aos="fade-left"
            >
              <img
                class="rounded-[16px]"
                src="/src/assets/project-2.jpg"
                alt=""
              />
              <div class="card-title flex gap-10 items-center text-black2-500 text-2xl font-bold">
                <h3 class="font-Syne">Brand Grouping</h3>
                <div class="line w-[48px] h-[1px] bg-brand"></div>
              </div>
              <div class="card-content font-Rubik text-[14px]">
                <div class="client flex pb-2">
                  <h4 class="text-card pr-8">Client:</h4>
                  <p class="text-black2-500">FR</p>
                </div>
                <div class="work flex">
                  <h4 class="text-card pr-9">Work:</h4>
                  <p class="text-black2-500">Branding</p>
                  <p class="pl-3 text-black2-500">Logo desine</p>
                </div>
              </div>
            </div>
            <div
              class="card h-[770px] flex flex-col justify-between text-justify"
              data-aos="fade-right"
            >
              <img
                class="rounded-[16px]"
                src="/src/assets/project-3.jpg"
                alt=""
              />
              <div class="card-title flex gap-10 items-center text-black2-500 text-2xl font-bold">
                <h3 class="font-Syne">NFT Glimps</h3>
                <div class="line w-[48px] h-[1px] bg-brand"></div>
              </div>
              <div class="card-content font-Rubik text-[14px]">
                <div class="client flex pb-2">
                  <h4 class="text-card pr-8">Client:</h4>
                  <p class="text-black2-500">Rumanda</p>
                </div>
                <div class="work flex">
                  <h4 class="text-card pr-9">Work:</h4>
                  <p class="text-black2-500">NFT Design</p>
                </div>
              </div>
            </div>
            <div
              class="card h-[770px] flex flex-col justify-between text-justify"
              data-aos="fade-left"
            >
              <img
                class="rounded-[16px]"
                src="/src/assets/project-4.jpg"
                alt=""
              />
              <div class="card-title flex gap-10 items-center text-black2-500 text-2xl font-bold">
                <h3 class="font-Syne">Brand Suggestions</h3>
                <div class="line w-[48px] h-[1px] bg-brand"></div>
              </div>
              <div class="card-content font-Rubik text-[14px]">
                <div class="client flex pb-2">
                  <h4 class="text-card pr-8">Client:</h4>
                  <p class="text-black2-500">T3d</p>
                </div>
                <div class="work flex">
                  <h4 class="text-card pr-9">Work:</h4>
                  <p class="text-black2-500">NFT logo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-title-bg absolute mt-[-250px]">
          <svg
            width="486"
            height="675"
            viewBox="0 0 486 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_101_405)">
              <path
                d="M54.1869 473.805C149.282 467.548 211.347 432.446 271.716 350.776C394.011 185.329 -320.514 132.772 -221.004 314.534C-158.261 429.139 -67.2795 481.796 54.1869 473.805Z"
                fill="white"
                fill-opacity="0.18"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_101_405"
                x="-430.545"
                y="0.353455"
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
                  result="effect1_foregroundBlur_101_405"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          class="testimonial w-full h-[420px] flex flex-row justify-between px-[144px]"
          data-aos="fade-right"
        >
          <div class="testimonial-text text-justify flex flex-col w-8/12 justify-around">
            <h2 class="font-Syne text-black2-300 text-[64px] font-[700px] relative">
              Testimonial
            </h2>
            <p class="text-testimonial font-Rubik text-[18px] font-[400px] w-[878px]">
              “Aaronn was fantastic to work with from start to finish. We were
              looking for a simple, stand-out logo and he delivered. I tried
              designing the logo myself thinking I wouldn’t need to pay the
              money for a professional graphic designer but I was very wrong.
              Working with Aaronn was worth every penny and was surprisingly
              affordable! I remember him saying simplicity is key to a
              successful logo and boy he was right. I can’t thank Aaronn enough
              for his effort and professionalism. I would recommend him to
              anyone looking for a design!”
            </p>
            <h3 class="font-Syne text-[24px] font-[700px] text-black2-300">
              -Martin lee
            </h3>
          </div>
          <div class="testimonial-comma w-4/12 flex justify-end items-start">
            <svg
              width="161"
              height="93"
              viewBox="0 0 161 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="path-1-outside-1_101_422"
                maskUnits="userSpaceOnUse"
                x="-1"
                y="-1"
                width="163"
                height="95"
                fill="black"
              >
                <rect fill="white" x="-1" y="-1" width="163" height="95" />
                <path d="M96 0.231993L91.968 18.088C95.04 19.624 98.304 22.984 101.76 28.168C105.024 33.352 106.944 39.016 107.52 45.16L87.936 48.328V92.392H160.8V65.608C160.8 47.944 155.712 33.256 145.536 21.544C135.168 9.832 118.656 2.72799 96 0.231993ZM8.73599 0.231993L4.70399 18.088C7.776 19.624 11.04 22.984 14.496 28.168C17.76 33.352 19.68 39.016 20.256 45.16L0.671991 48.328V92.392H73.536V65.608C73.536 47.944 68.448 33.256 58.272 21.544C47.904 9.832 31.392 2.72799 8.73599 0.231993Z" />
              </mask>
              <path
                d="M96 0.231995L95.0246 0.0117302L95.2214 -0.85984L96.1095 -0.761993L96 0.231995ZM91.968 18.088L91.5208 18.9824L90.82 18.632L90.9926 17.8677L91.968 18.088ZM101.76 28.168L102.592 27.6133L102.599 27.6241L102.606 27.6352L101.76 28.168ZM107.52 45.16L108.516 45.0667L108.603 45.9978L107.68 46.1472L107.52 45.16ZM87.936 48.328H86.936V47.4768L87.7763 47.3408L87.936 48.328ZM87.936 92.392V93.392H86.936V92.392H87.936ZM160.8 92.392H161.8V93.392H160.8V92.392ZM145.536 21.544L146.285 20.8811L146.291 20.8881L145.536 21.544ZM8.73599 0.231995L7.76054 0.0117302L7.95735 -0.85984L8.8455 -0.761993L8.73599 0.231995ZM4.70399 18.088L4.25677 18.9824L3.55597 18.632L3.72855 17.8677L4.70399 18.088ZM14.496 28.168L15.328 27.6133L15.3353 27.6241L15.3422 27.6352L14.496 28.168ZM20.256 45.16L21.2516 45.0667L21.3389 45.9978L20.4157 46.1472L20.256 45.16ZM0.671997 48.328H-0.328003V47.4768L0.512299 47.3408L0.671997 48.328ZM0.671997 92.392V93.392H-0.328003V92.392H0.671997ZM73.536 92.392H74.536V93.392H73.536V92.392ZM58.272 21.544L59.0208 20.8811L59.0269 20.8881L58.272 21.544ZM96.9754 0.452255L92.9434 18.3083L90.9926 17.8677L95.0246 0.0117302L96.9754 0.452255ZM92.4152 17.1936C95.7237 18.8478 99.1066 22.3851 102.592 27.6133L100.928 28.7227C97.5014 23.5829 94.3563 20.4002 91.5208 18.9824L92.4152 17.1936ZM102.606 27.6352C105.954 32.9529 107.925 38.7677 108.516 45.0667L106.524 45.2533C105.963 39.2643 104.094 33.7511 100.914 28.7008L102.606 27.6352ZM107.68 46.1472L88.0957 49.3152L87.7763 47.3408L107.36 44.1728L107.68 46.1472ZM88.936 48.328V92.392H86.936V48.328H88.936ZM87.936 91.392H160.8V93.392H87.936V91.392ZM159.8 92.392V65.608H161.8V92.392H159.8ZM159.8 65.608C159.8 48.1495 154.777 33.7048 144.781 22.1999L146.291 20.8881C156.647 32.8072 161.8 47.7385 161.8 65.608H159.8ZM144.787 22.2068C134.645 10.7503 118.411 3.70704 95.8905 1.22598L96.1095 -0.761993C118.901 1.74895 135.691 8.91373 146.285 20.8812L144.787 22.2068ZM9.71143 0.452255L5.67943 18.3083L3.72855 17.8677L7.76054 0.0117302L9.71143 0.452255ZM5.1512 17.1936C8.45973 18.8478 11.8426 22.3851 15.328 27.6133L13.6639 28.7227C10.2374 23.5829 7.09227 20.4002 4.25677 18.9824L5.1512 17.1936ZM15.3422 27.6352C18.6904 32.9529 20.6611 38.7677 21.2516 45.0667L19.2604 45.2533C18.6989 39.2643 16.8295 33.7511 13.6497 28.7008L15.3422 27.6352ZM20.4157 46.1472L0.83168 49.3152L0.512299 47.3408L20.0963 44.1728L20.4157 46.1472ZM1.672 48.328V92.392H-0.328003V48.328H1.672ZM0.671997 91.392H73.536V93.392H0.671997V91.392ZM72.536 92.392V65.608H74.536V92.392H72.536ZM72.536 65.608C72.536 48.1495 67.5132 33.7048 57.5171 22.1999L59.0269 20.8881C69.3828 32.8072 74.536 47.7385 74.536 65.608H72.536ZM57.5232 22.2068C47.3813 10.7503 31.1469 3.70704 8.62648 1.22598L8.8455 -0.761993C31.6371 1.74895 48.4266 8.91373 59.0208 20.8812L57.5232 22.2068Z"
                fill="#FF9142"
                mask="url(#path-1-outside-1_101_422)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
