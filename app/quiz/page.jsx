"use client";
import { useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { UserContext } from "@components/UserContext";
import { LessonsContext } from "@components/LessonsContext";
import { Tooltip } from "@material-tailwind/react";

const Quiz = () => {
  const { basket, setBasket } = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { lessons, setLessons } = useContext(LessonsContext);

  //const quizName = ["React", "JavaScript", "Python", "Gatsby", "Angular", "Django", "CSS", "Kotlin", "Laravel"]

  const handleClick = (e) => {};

  return (
    <div className="bg-white min-h-screen flex-col items-center py-5 px-10 justify-center shadow-xl">
      <h2 className="text-3xl font-bold mb-5 text-center blue_gradient head_text">
        Witaj w quiz
      </h2>
      <p class="font-medium text-xl leading-7 text-center green_gradient">
        Wybierz temat i przetestuj się.
      </p>
      <div className="flex flex-wrap justify-center mt-10 mb-12 gap-4">
        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3 hover:bg-blue-gray-100"
          value="React"
          onClick={handleClick}
        >
          <svg
            width="36"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.5884 16.0035C35.5884 13.678 32.6762 11.4742 28.2112 10.1075C29.2416 5.55675 28.7837 1.93616 26.7659 0.776994C26.3008 0.505091 25.757 0.376296 25.1631 0.376296V1.97193C25.4922 1.97193 25.757 2.03633 25.9788 2.15797C26.9519 2.71609 27.3741 4.84122 27.0449 7.57455C26.9662 8.24715 26.8374 8.95552 26.68 9.67821C25.2776 9.33476 23.7463 9.07001 22.1364 8.89828C21.1704 7.57455 20.1687 6.37245 19.1598 5.32062C21.4924 3.15256 23.6819 1.96478 25.1702 1.96478V0.369141C23.2025 0.369141 20.6266 1.77158 18.0221 4.20439C15.4175 1.78589 12.8416 0.397762 10.8739 0.397762V1.9934C12.3551 1.9934 14.5517 3.17403 16.8844 5.32778C15.8826 6.37961 14.8809 7.57455 13.9292 8.89828C12.3121 9.07001 10.7809 9.33476 9.37844 9.68537C9.21387 8.96983 9.09222 8.27577 9.00636 7.61032C8.67006 4.87699 9.08507 2.75186 10.051 2.18659C10.2657 2.0578 10.5448 2.00055 10.8739 2.00055V0.404917C10.2729 0.404917 9.72905 0.533713 9.2568 0.805615C7.24615 1.96478 6.79537 5.57821 7.83289 10.1147C3.38228 11.4885 0.484375 13.6852 0.484375 16.0035C0.484375 18.329 3.39659 20.5328 7.86151 21.8995C6.83114 26.4503 7.28908 30.0709 9.30688 31.23C9.77198 31.5019 10.3158 31.6307 10.9168 31.6307C12.8845 31.6307 15.4605 30.2283 18.065 27.7955C20.6695 30.214 23.2454 31.6021 25.2132 31.6021C25.8142 31.6021 26.358 31.4733 26.8303 31.2014C28.8409 30.0422 29.2917 26.4288 28.2542 21.8923C32.6905 20.5257 35.5884 18.3218 35.5884 16.0035ZM26.2721 11.2309C26.0074 12.154 25.6783 13.1056 25.3062 14.0573C25.0128 13.4848 24.7051 12.9124 24.3688 12.34C24.0397 11.7676 23.6891 11.2094 23.3385 10.6656C24.3545 10.8159 25.3348 11.0019 26.2721 11.2309ZM22.995 18.8513C22.4369 19.8173 21.8645 20.7332 21.2706 21.5847C20.2044 21.6777 19.124 21.7278 18.0364 21.7278C16.9559 21.7278 15.8755 21.6777 14.8165 21.5918C14.2226 20.7403 13.643 19.8316 13.0849 18.8728C12.5411 17.9354 12.0474 16.9838 11.5966 16.025C12.0402 15.0662 12.5411 14.1074 13.0777 13.17C13.6359 12.204 14.2083 11.2882 14.8022 10.4367C15.8683 10.3437 16.9488 10.2936 18.0364 10.2936C19.1168 10.2936 20.1973 10.3437 21.2563 10.4295C21.8502 11.281 22.4297 12.1897 22.9879 13.1485C23.5317 14.0859 24.0254 15.0375 24.4762 15.9964C24.0254 16.9552 23.5317 17.914 22.995 18.8513ZM25.3062 17.9211C25.6926 18.88 26.0217 19.8388 26.2936 20.769C25.3563 20.9979 24.3688 21.1911 23.3456 21.3414C23.6962 20.7904 24.0468 20.2252 24.376 19.6456C24.7051 19.0731 25.0128 18.4936 25.3062 17.9211ZM18.0507 25.5559C17.3852 24.869 16.7198 24.1033 16.0615 23.2662C16.7055 23.2948 17.3638 23.3162 18.0292 23.3162C18.7018 23.3162 19.3673 23.3019 20.0184 23.2662C19.3744 24.1033 18.709 24.869 18.0507 25.5559ZM12.7271 21.3414C11.7111 21.1911 10.7308 21.0051 9.79345 20.7761C10.0582 19.8531 10.3873 18.9014 10.7594 17.9498C11.0528 18.5222 11.3605 19.0946 11.6968 19.667C12.0331 20.2395 12.3765 20.7976 12.7271 21.3414ZM18.0149 6.45116C18.6804 7.13807 19.3458 7.90369 20.0041 8.74086C19.3601 8.71224 18.7018 8.69078 18.0364 8.69078C17.3638 8.69078 16.6983 8.70509 16.0472 8.74086C16.6912 7.90369 17.3566 7.13807 18.0149 6.45116ZM12.72 10.6656C12.3694 11.2166 12.0188 11.7819 11.6896 12.3615C11.3605 12.9339 11.0528 13.5063 10.7594 14.0787C10.373 13.1199 10.0439 12.1611 9.77198 11.2309C10.7093 11.0091 11.6968 10.8159 12.72 10.6656ZM6.24441 19.6241C3.71143 18.5437 2.07286 17.1269 2.07286 16.0035C2.07286 14.8801 3.71143 13.4562 6.24441 12.3829C6.85977 12.1182 7.53236 11.882 8.22643 11.6602C8.63428 13.0627 9.17093 14.5224 9.83638 16.0178C9.17809 17.5061 8.6486 18.9587 8.2479 20.3539C7.53952 20.1321 6.86692 19.8889 6.24441 19.6241ZM10.094 29.8491C9.12085 29.2909 8.69868 27.1658 9.02783 24.4325C9.10654 23.7599 9.23533 23.0515 9.39275 22.3288C10.7952 22.6723 12.3264 22.937 13.9364 23.1087C14.9023 24.4325 15.9041 25.6346 16.913 26.6864C14.5804 28.8545 12.3908 30.0423 10.9025 30.0423C10.5805 30.0351 10.3086 29.9707 10.094 29.8491ZM27.0664 24.3967C27.4027 27.13 26.9877 29.2552 26.0217 29.8204C25.8071 29.9492 25.528 30.0065 25.1988 30.0065C23.7177 30.0065 21.521 28.8258 19.1884 26.6721C20.1901 25.6203 21.1919 24.4253 22.1435 23.1016C23.7606 22.9299 25.2919 22.6651 26.6943 22.3145C26.8589 23.0372 26.9877 23.7313 27.0664 24.3967ZM29.8212 19.6241C29.2058 19.8889 28.5332 20.125 27.8392 20.3468C27.4313 18.9444 26.8947 17.4847 26.2292 15.9892C26.8875 14.5009 27.417 13.0484 27.8177 11.6531C28.5261 11.8749 29.1987 12.1182 29.8283 12.3829C32.3613 13.4634 33.9999 14.8801 33.9999 16.0035C33.9927 17.1269 32.3542 18.5508 29.8212 19.6241Z"
              fill="#61DAFB"
            ></path>
            <path
              d="M18.0293 19.2734C19.8352 19.2734 21.2992 17.8093 21.2992 16.0034C21.2992 14.1974 19.8352 12.7334 18.0293 12.7334C16.2233 12.7334 14.7593 14.1974 14.7593 16.0034C14.7593 17.8093 16.2233 19.2734 18.0293 19.2734Z"
              fill="#61DAFB"
            ></path>
          </svg>
          <span className="sc-kMjNwy text-lg font-semibold ml-2">React</span>
        </div>

        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="JavaScript"
          onClick={handleClick}
        >
          <svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_564)">
              <path
                d="M3.48081 35.8101L0.556152 0.0668945L35.4842 0.138722L32.3916 35.8101L18.152 39.9333L3.48081 35.8101Z"
                fill="#E9CA32"
              ></path>
              <path
                d="M18.1519 36.481V3.4707L32.5354 3.51859L29.9705 33.0527L18.1519 36.481Z"
                fill="#FFDE25"
              ></path>
              <path
                d="M16.6118 7.39062H12.8091V29.3615L9.85153 28.7981V25.8405L6.33057 25.2771V31.8966L16.6118 34.5725V7.39062ZM19.4643 7.39062H29.9915L29.2873 11.6017H23.483V18.5121H29.2873L28.5831 32.4599L19.4643 34.5725V30.2065L25.6255 28.0939L25.9812 22.3195L19.4643 23.2631V7.39062Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1063_564">
                <rect
                  width="34.928"
                  height="40"
                  fill="white"
                  transform="translate(0.556152)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className=" text-lg font-semibold ml-2">JavaScript</span>
        </div>

        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="Python"
          onClick={handleClick}
        >
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_607)">
              <path
                d="M20.5565 0.0112305C10.3868 0.0112305 11.0218 4.42143 11.0218 4.42143L11.0331 8.99053H20.7379V10.3623H7.17851C7.17851 10.3623 0.670898 9.62425 0.670898 19.8854C0.670898 30.1469 6.3509 29.783 6.3509 29.783H9.7407V25.0213C9.7407 25.0213 9.55796 19.3413 15.33 19.3413H24.9554C24.9554 19.3413 30.3633 19.4286 30.3633 14.1148V5.32856C30.3633 5.32856 31.1846 0.0112305 20.5565 0.0112305ZM15.2053 3.08386C15.4347 3.08365 15.6618 3.12867 15.8737 3.21634C16.0856 3.304 16.2782 3.43259 16.4403 3.59475C16.6025 3.75692 16.7311 3.94946 16.8187 4.16138C16.9064 4.37329 16.9514 4.60041 16.9512 4.82974C16.9514 5.05907 16.9064 5.28619 16.8187 5.49811C16.7311 5.71002 16.6025 5.90257 16.4403 6.06473C16.2782 6.22689 16.0856 6.35548 15.8737 6.44315C15.6618 6.53081 15.4347 6.57583 15.2053 6.57562C14.976 6.57583 14.7489 6.53081 14.537 6.44315C14.3251 6.35548 14.1325 6.22689 13.9703 6.06473C13.8082 5.90257 13.6796 5.71002 13.5919 5.49811C13.5043 5.28619 13.4592 5.05907 13.4594 4.82974C13.4592 4.60041 13.5043 4.37329 13.5919 4.16138C13.6796 3.94946 13.8082 3.75692 13.9703 3.59475C14.1325 3.43259 14.3251 3.304 14.537 3.21634C14.7489 3.12867 14.976 3.08365 15.2053 3.08386Z"
                fill="url(#paint0_linear_1063_607)"
              ></path>
              <path
                d="M20.8451 39.8627C31.0148 39.8627 30.3798 35.4525 30.3798 35.4525L30.3685 30.8836H20.6636V29.5118H34.2229C34.2229 29.5118 40.7305 30.2499 40.7305 19.9884C40.7305 9.72703 35.0505 10.091 35.0505 10.091H31.6607V14.8525C31.6607 14.8525 31.8435 20.5325 26.0714 20.5325H16.446C16.446 20.5325 11.0381 20.4451 11.0381 25.7592V34.5455C11.0381 34.5455 10.217 39.8627 20.8449 39.8627H20.8451ZM26.1963 36.7904C25.9669 36.7906 25.7398 36.7456 25.5279 36.6579C25.316 36.5703 25.1234 36.4417 24.9613 36.2795C24.7991 36.1173 24.6705 35.9248 24.5829 35.7129C24.4952 35.501 24.4502 35.2739 24.4504 35.0445C24.4502 34.8152 24.4952 34.588 24.5828 34.3761C24.6705 34.1642 24.7991 33.9716 24.9612 33.8094C25.1234 33.6473 25.3159 33.5187 25.5279 33.431C25.7398 33.3433 25.9669 33.2983 26.1963 33.2985C26.4256 33.2983 26.6527 33.3433 26.8646 33.431C27.0765 33.5186 27.2691 33.6472 27.4313 33.8094C27.5934 33.9715 27.722 34.1641 27.8097 34.376C27.8973 34.5879 27.9424 34.815 27.9422 35.0444C27.9424 35.2737 27.8973 35.5008 27.8097 35.7127C27.722 35.9246 27.5934 36.1172 27.4313 36.2793C27.2691 36.4415 27.0765 36.5701 26.8646 36.6578C26.6527 36.7454 26.4256 36.7906 26.1963 36.7904Z"
                fill="url(#paint1_linear_1063_607)"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1063_607"
                x1="385.645"
                y1="358.453"
                x2="2370.89"
                y2="2323.9"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#387EB8"></stop>
                <stop offset="1" stop-color="#366994"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_1063_607"
                x1="579.261"
                y1="622.795"
                x2="2711.19"
                y2="2638.17"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFE052"></stop>
                <stop offset="1" stop-color="#FFC331"></stop>
              </linearGradient>
              <clipPath id="clip0_1063_607">
                <rect
                  width="40.1606"
                  height="40"
                  fill="white"
                  transform="translate(0.647949)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className=" text-lg font-semibold ml-2">Python</span>
        </div>

        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="Gatsby"
          onClick={handleClick}
        >
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_586)">
              <path
                d="M20.5884 0C9.54198 0 0.588379 8.9536 0.588379 20C0.588379 31.0464 9.54198 40 20.5884 40C31.6348 40 40.5884 31.0464 40.5884 20C40.5884 8.9536 31.6348 0 20.5884 0ZM4.88598 20.208L20.3804 35.7024C11.8716 35.592 4.99638 28.7168 4.88598 20.208ZM24.1036 35.3104L5.27798 16.4848C6.87478 9.504 13.1228 4.2944 20.5884 4.2944C25.806 4.2944 30.43 6.84 33.286 10.7568L31.1116 12.6752C28.7948 9.3536 24.9452 7.1792 20.5884 7.1792C15.0412 7.1792 10.3164 10.7024 8.53078 15.6336L24.9548 32.056C28.9436 30.6112 32.0108 27.2448 33.038 23.0752H26.2316V20H36.2956C36.294 27.4656 31.0844 33.7136 24.1036 35.3104Z"
                fill="#744C9E"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1063_586">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0.588379)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className=" text-lg font-semibold ml-2">Gatsby</span>
        </div>

        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="angular"
          onClick={handleClick}
        >
          <svg
            width="38"
            height="40"
            viewBox="0 0 38 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_603)">
              <path
                d="M0.0151367 6.69445L18.5163 0.102539L37.5157 6.57724L34.4394 31.0552L18.5163 39.8737L2.84234 31.1724L0.0151367 6.69445Z"
                fill="#E23237"
              ></path>
              <path
                d="M37.5155 6.57724L18.5161 0.102539V39.8737L34.4392 31.0699L37.5155 6.57724Z"
                fill="#B52E31"
              ></path>
              <path
                d="M18.5455 4.74609L7.01709 30.3959L11.3237 30.3227L13.6383 24.5364H23.9802L26.5144 30.3959L30.6306 30.4692L18.5455 4.74609ZM18.5749 12.964L22.4714 21.1086H15.1469L18.5749 12.964Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1063_603">
                <rect width="37.648" height="40" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span className=" text-lg font-semibold ml-2">Angular</span>
        </div>

        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="Django"
          onClick={handleClick}
        >
          <svg
            width="33"
            height="40"
            viewBox="0 0 33 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8912 0H21.4277V29.9592C18.0796 30.5925 15.6148 30.8417 12.9479 30.8417C4.96439 30.8333 0.808594 27.2667 0.808594 20.4167C0.808594 13.8167 5.21676 9.53331 12.0478 9.53331C13.1078 9.53331 13.9153 9.61674 14.8912 9.86665V0ZM15.1202 15.2656C14.3546 15.0156 13.7238 14.9323 12.9161 14.9323C9.61007 14.9323 7.70044 16.9489 7.70044 20.483C7.70044 23.9239 9.52603 25.8239 12.8742 25.8239C13.5975 25.8239 14.1864 25.7831 15.1202 25.6581V15.2656Z"
              fill="#2BA977"
            ></path>
            <path
              d="M32.117 10.3376V25.3378C32.117 30.5035 31.7301 32.9877 30.5944 35.1295C29.5344 37.1885 28.1379 38.4869 25.2524 39.921L19.187 37.0628C22.0725 35.7218 23.4689 34.5369 24.3607 32.7286C25.2944 30.8795 25.5888 28.7377 25.5888 23.1044V10.3378L32.117 10.3376ZM24.9301 0H31.4667V6.64169H24.9301V0Z"
              fill="#2BA977"
            ></path>
          </svg>
          <span className=" text-lg font-semibold ml-2">Django</span>
        </div>

        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="CSS"
          onClick={handleClick}
        >
          <svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_645)">
              <path
                d="M3.14145 35.8095L0.216797 0.0668945L35.1448 0.138722L32.0523 35.8095L17.8126 39.9327L3.14145 35.8095Z"
                fill="#1B73BA"
              ></path>
              <path
                d="M17.8125 36.481V3.47119L32.1961 3.51908L29.6311 33.053L17.8125 36.481Z"
                fill="#1C88C7"
              ></path>
              <path
                d="M28.6242 7.69043H6.49756L7.09697 12.0052H17.5968L7.26485 16.4402L7.86398 20.6113H23.0867L22.5351 26.4363L17.381 27.4433L12.7066 26.2448L12.3469 22.9365H8.0558L8.63098 29.8168L17.8365 32.3817L26.6586 29.577L27.7853 16.1284H18.4596L28.6239 11.9094L28.6242 7.69043Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1063_645">
                <rect
                  width="34.928"
                  height="40"
                  fill="white"
                  transform="translate(0.216797)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="text-lg font-semibold ml-2">CSS</span>
        </div>
        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="Kotlin"
          onClick={handleClick}
        >
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_654)">
              <path
                d="M40.392 39.9975H0.375977V0.00292969H40.392L19.9712 19.7033L40.392 39.9975Z"
                fill="url(#paint0_radial_1063_654)"
              ></path>
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_1063_654"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(39.2204 1.47819) scale(46.0048)"
              >
                <stop stop-color="#E44857"></stop>
                <stop offset="0.47" stop-color="#C711E1"></stop>
                <stop offset="1" stop-color="#7F52FF"></stop>
              </radialGradient>
              <clipPath id="clip0_1063_654">
                <rect
                  width="40.016"
                  height="40"
                  fill="white"
                  transform="translate(0.375977)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="text-lg font-semibold ml-2">Kotlin</span>
        </div>
        <div
          className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3  hover:bg-blue-gray-100"
          value="Laravel"
          onClick={handleClick}
        >
          <svg
            width="59"
            height="40"
            viewBox="0 0 59 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1063_664)">
              <path
                d="M58.561 18.6811C58.1445 18.2646 52.7996 11.5315 51.8972 10.4208C50.9254 9.31021 50.509 9.51846 49.8842 9.58787C49.2595 9.65728 42.5264 10.8373 41.7628 10.9067C40.9992 11.0456 40.5133 11.3232 40.9992 12.0174C41.4157 12.6421 45.8582 18.8893 46.83 20.347L29.1295 24.5813L15.1078 1.04996C14.5525 0.21699 14.4137 -0.0606661 13.1643 0.00874785C11.9148 0.0781618 2.12744 0.911129 1.4333 0.911129C0.739165 0.980543 -0.0243881 1.2582 0.669751 2.92413C1.36389 4.59007 12.4701 28.4685 12.7478 29.1626C13.0254 29.8567 13.8584 30.9674 15.7326 30.5509C17.6762 30.065 24.3399 28.3296 28.0188 27.3578C29.9624 30.8285 33.8496 37.9088 34.6132 38.95C35.585 40.3382 36.2791 40.0606 37.7368 39.6441C38.9168 39.297 55.9232 33.1886 56.6868 32.8415C57.4503 32.4945 57.9362 32.2862 57.3809 31.5227C56.9644 30.9674 52.522 24.9283 50.1619 21.8047C51.7584 21.3882 57.5198 19.8611 58.1445 19.6529C58.8386 19.4446 58.9775 19.0976 58.561 18.6811ZM26.4223 25.2754C26.2141 25.3448 16.2879 27.7049 15.802 27.8437C15.2467 27.9826 15.2467 27.9131 15.2467 27.7049C15.1078 27.4967 3.44631 3.34062 3.23807 3.06296C3.09924 2.78531 3.09924 2.50765 3.23807 2.50765C3.37689 2.50765 12.6089 1.67468 12.8866 1.67468C13.2337 1.67468 13.1643 1.7441 13.3031 1.95234C13.3031 1.95234 26.2835 24.373 26.4917 24.7201C26.7694 25.0672 26.6306 25.206 26.4223 25.2754ZM54.3267 30.4815C54.4655 30.7591 54.6738 30.8979 54.1185 31.0368C53.6326 31.245 37.3897 36.7287 37.0427 36.8675C36.6956 37.0064 36.4873 37.0758 36.0709 36.4511C35.6544 35.8263 30.3789 26.7331 30.3789 26.7331L47.663 22.2212C48.0795 22.0824 48.2183 22.013 48.4959 22.4294C48.7736 22.9153 54.1879 30.2732 54.3267 30.4815ZM55.4373 18.2646C55.0209 18.334 48.7042 19.9305 48.7042 19.9305L43.4981 12.8503C43.3593 12.6421 43.2205 12.4338 43.5676 12.3644C43.9146 12.295 49.8148 11.2538 50.0925 11.1844C50.3701 11.115 50.5784 11.0456 50.9254 11.5315C51.2725 11.9479 55.715 17.6399 55.9232 17.8481C56.1315 18.0564 55.8538 18.1952 55.4373 18.2646Z"
                fill="#FB503B"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1063_664">
                <rect
                  width="58.3771"
                  height="40"
                  fill="white"
                  transform="translate(0.39209)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className=" text-lg font-semibold ml-2">Laravel</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;