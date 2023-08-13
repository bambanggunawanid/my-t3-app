/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
import { api } from "y/utils/api";

// image
export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <div className="relative flex h-[1024px] w-full flex-col items-start justify-start overflow-hidden bg-gray-200 text-left font-fira-code text-[20px] text-slategray">
      <div className="flex flex-row items-center justify-between self-stretch border-[1px] border-solid border-border-1">
        <div className="flex flex-row items-center justify-center gap-[120px] overflow-hidden">
          <div className="flex flex-row items-center justify-center self-stretch px-6 py-[18px]">
            <div className="relative font-medium">bambang.gt</div>
          </div>
          <div className="flex flex-row items-center justify-center self-stretch text-base">
            <div className="flex flex-row items-center justify-center self-stretch border-[1px] border-solid border-border-1 px-8 py-0 text-white">
              <div className="relative font-medium">_hello</div>
            </div>
            <div className="flex flex-row items-center justify-center self-stretch border-[1px] border-solid border-border-1 px-8 py-0">
              <div className="relative font-medium">_about</div>
            </div>
            <div className="flex flex-row items-center justify-center self-stretch border-[1px] border-solid border-border-1 px-8 py-0">
              <div className="relative font-medium">_projects</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end self-stretch border-[1px] border-solid border-border-1 text-base">
          <div className="flex flex-row items-center justify-center self-stretch border-[1px] border-solid border-border-1 px-6 py-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.781 4.21901C27.8849 4.32301 27.9558 4.45522 27.9852 4.59923C28.0145 4.74323 28.0009 4.89268 27.946 5.02901L19.2175 26.8495C19.1406 27.0417 19.0122 27.2089 18.8463 27.3328C18.6805 27.4566 18.4837 27.5323 18.2776 27.5516C18.0715 27.5708 17.8641 27.5328 17.6782 27.4418C17.4923 27.3507 17.3352 27.2101 17.224 27.0355L12.457 19.543L4.96452 14.776C4.7895 14.665 4.64855 14.5078 4.55722 14.3217C4.4659 14.1356 4.42776 13.928 4.447 13.7216C4.46624 13.5152 4.54212 13.3182 4.66626 13.1522C4.79041 12.9862 4.95799 12.8578 5.15052 12.781L26.971 4.05551C27.1073 4.00063 27.2568 3.98701 27.4008 4.01634C27.5448 4.04568 27.677 4.11667 27.781 4.22051V4.21901ZM13.954 19.105L18.0955 25.612L25.195 7.86401L13.954 19.105ZM24.1345 6.80351L6.38652 13.903L12.895 18.043L24.1345 6.80351Z"
                fill="#607B96"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center self-stretch border-[1px] border-solid border-border-1 px-6 py-0">
            <div className="relative font-medium">_contact-me</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-row items-center justify-center self-stretch overflow-hidden p-2.5 text-[18px] text-aliceblue">
        <div className="flex flex-row items-center justify-start gap-[92px]">
          <div className="flex flex-col items-start justify-start gap-[60px] overflow-hidden py-0 pl-[0.34765625px] pr-0">
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="relative self-stretch">Hi all. I am</div>
              <span>{hello.data?.greeting}</span>
              <div className="relative text-[62px] font-medium">
                Bambang Gunawan
              </div>
              <div className="relative self-stretch text-[32px] text-royalblue">{`> Back-end developer`}</div>
            </div>
            <div className="flex flex-col items-start justify-start text-base text-slategray">
              <div className="relative">
                <span>// complete the game to continue</span>
              </div>
              <div className="relative font-medium text-darksalmon">
                <span className="text-royalblue">const</span>
                <span className="text-white">{` `}</span>
                <span className="text-mediumaquamarine">githubLink</span>
                <span className="text-white">{` = `}</span>
                <span>
                  “
                  <span className="[text-decoration:underline]">
                    https://github.com/bambanggunawanid
                  </span>
                  ”
                </span>
              </div>
              <div className="relative">
                <span>// you can also see it on my Github page</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[8px] rounded-lg border-[1px] border-solid border-gray-100 py-[12.08001708984375px] pl-[12.73046875px] pr-[12.76953125px] text-right text-sm text-gray-300 shadow-[0px_2px_0px_rgba(255,_255,_255,_0.3)_inset] [backdrop-filter:blur(64px)] [background:linear-gradient(150.26deg,_rgba(23,_85,_83,_0.7),_rgba(67,_217,_173,_0.09))] md:hidden Desktop_Small:hidden">
            <svg
              width="486"
              height="14"
              viewBox="0 0 486 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_15_255)">
                <g filter="url(#filter0_di_15_255)">
                  <circle
                    cx="7.4043"
                    cy="7.33997"
                    r="6.5"
                    fill="url(#paint0_radial_15_255)"
                  />
                </g>
                <path
                  d="M4.63501 9.63465L10.1736 5.04526M4.63501 5.04526L10.1736 9.63465"
                  stroke="#114944"
                />
                <g filter="url(#filter1_di_15_255)">
                  <circle
                    cx="478.904"
                    cy="7.33997"
                    r="6.5"
                    fill="url(#paint1_radial_15_255)"
                  />
                </g>
                <path
                  d="M476.135 9.63465L481.674 5.04526M476.135 5.04526L481.674 9.63465"
                  stroke="#114944"
                />
              </g>
              <defs>
                <filter
                  id="filter0_di_15_255"
                  x="-1.0957"
                  y="-1.16003"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_15_255"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_15_255"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.101667 0 0 0 0 0.508333 0 0 0 0 0.466409 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_15_255"
                  />
                </filter>
                <filter
                  id="filter1_di_15_255"
                  x="470.404"
                  y="-1.16003"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_15_255"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_15_255"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.12184 0 0 0 0 0.504167 0 0 0 0 0.464752 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_15_255"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_15_255"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(7.4043 4.33997) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#196C6A" />
                  <stop offset="1" stop-color="#114B4A" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_15_255"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(478.904 4.33997) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#217D7A" />
                  <stop offset="1" stop-color="#114B4A" />
                </radialGradient>
                <clipPath id="clip0_15_255">
                  <rect
                    width="484.5"
                    height="13"
                    fill="white"
                    transform="translate(0.904297 0.839966)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="flex w-[484.5px] flex-row items-center justify-start gap-[24px] overflow-hidden">
              <div className="relative h-[405.32px] flex-1 overflow-hidden rounded-lg bg-gray-400 shadow-[1px_5px_11px_rgba(2,_18,_27,_0.71)_inset]">
                <svg
                  width="61"
                  height="162"
                  viewBox="0 0 61 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.42236 4.2283V79.2283H56.4224V157.84"
                    stroke="url(#paint0_linear_15_172)"
                    stroke-width="8"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_15_172"
                      x1="4.42236"
                      y1="13.2283"
                      x2="67.5951"
                      y2="131.84"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#43D9AD" />
                      <stop offset="1" stop-color="#43D9AD" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.1"
                    cx="10.4222"
                    cy="11.1125"
                    r="10.3456"
                    fill="#43D9AD"
                  />
                  <circle
                    opacity="0.2"
                    cx="10.4222"
                    cy="11.1125"
                    r="7.34558"
                    fill="#43D9AD"
                  />
                  <circle cx="10.4222" cy="11.1125" r="4" fill="#43D9AD" />
                </svg>
                <div className="absolute left-[63.35px] top-[311.68px] flex flex-row items-center justify-center rounded-lg bg-sandybrown px-3.5 py-2.5">
                  <div className="relative">start-game</div>
                </div>
              </div>
              <div className="relative h-[405.32px] flex-1 overflow-hidden text-left text-white">
                <div className="absolute left-[119.38px] top-[367.32px] flex flex-row items-center justify-center rounded-lg border-[1px] border-solid border-white px-3.5 py-2.5 text-right">
                  <div className="relative">skip</div>
                </div>
                <div className="absolute left-[13.19px] top-[162.58px] inline-block w-[134.46px]">
                  <span>// food left</span>
                </div>
                <svg
                  width="132"
                  height="22"
                  viewBox="0 0 132 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_15_473)">
                    <circle
                      opacity="0.1"
                      cx="10.6908"
                      cy="10.6866"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="10.6908"
                      cy="10.6866"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="10.6908" cy="10.6866" r="4" fill="#43D9AD" />
                    <circle
                      opacity="0.1"
                      cx="38.3832"
                      cy="10.6866"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="38.3832"
                      cy="10.6866"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="38.3832" cy="10.6866" r="4" fill="#43D9AD" />
                    <circle
                      opacity="0.1"
                      cx="66.0756"
                      cy="10.6866"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="66.0756"
                      cy="10.6866"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="66.0756" cy="10.6866" r="4" fill="#43D9AD" />
                    <circle
                      opacity="0.1"
                      cx="93.7679"
                      cy="10.6866"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="93.7679"
                      cy="10.6866"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="93.7679" cy="10.6866" r="4" fill="#43D9AD" />
                    <circle
                      opacity="0.1"
                      cx="121.46"
                      cy="10.6866"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="121.46"
                      cy="10.6866"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="121.46" cy="10.6866" r="4" fill="#43D9AD" />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_473">
                      <rect
                        width="131.461"
                        height="20.6912"
                        fill="white"
                        transform="translate(0.345215 0.341064)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="132"
                  height="22"
                  viewBox="0 0 132 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_15_475)">
                    <circle
                      opacity="0.1"
                      cx="10.6908"
                      cy="11.1868"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="10.6908"
                      cy="11.1868"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="10.6908" cy="11.1868" r="4" fill="#43D9AD" />
                    <circle
                      opacity="0.1"
                      cx="38.3832"
                      cy="11.1868"
                      r="10.3456"
                      fill="#43D9AD"
                    />
                    <circle
                      opacity="0.2"
                      cx="38.3832"
                      cy="11.1868"
                      r="7.34558"
                      fill="#43D9AD"
                    />
                    <circle cx="38.3832" cy="11.1868" r="4" fill="#43D9AD" />
                    <g opacity="0.3">
                      <circle
                        opacity="0.1"
                        cx="66.0756"
                        cy="11.1868"
                        r="10.3456"
                        fill="#43D9AD"
                      />
                      <circle
                        opacity="0.2"
                        cx="66.0756"
                        cy="11.1868"
                        r="7.34558"
                        fill="#43D9AD"
                      />
                      <circle cx="66.0756" cy="11.1868" r="4" fill="#43D9AD" />
                    </g>
                    <g opacity="0.3">
                      <circle
                        opacity="0.1"
                        cx="93.7679"
                        cy="11.1868"
                        r="10.3456"
                        fill="#43D9AD"
                      />
                      <circle
                        opacity="0.2"
                        cx="93.7679"
                        cy="11.1868"
                        r="7.34558"
                        fill="#43D9AD"
                      />
                      <circle cx="93.7679" cy="11.1868" r="4" fill="#43D9AD" />
                    </g>
                    <g opacity="0.3">
                      <circle
                        opacity="0.1"
                        cx="121.46"
                        cy="11.1868"
                        r="10.3456"
                        fill="#43D9AD"
                      />
                      <circle
                        opacity="0.2"
                        cx="121.46"
                        cy="11.1868"
                        r="7.34558"
                        fill="#43D9AD"
                      />
                      <circle cx="121.46" cy="11.1868" r="4" fill="#43D9AD" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_475">
                      <rect
                        width="131.461"
                        height="20.6912"
                        fill="white"
                        transform="translate(0.345215 0.841248)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="absolute left-[0px] top-[0px] h-[142px] w-[181.38px] overflow-hidden rounded-lg bg-gray-500">
                  <svg
                    width="50"
                    height="29"
                    viewBox="0 0 50 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.80615 0.612488H41.8848C46.0269 0.612488 49.3848 3.97035 49.3848 8.11249V20.8036C49.3848 24.9458 46.0269 28.3036 41.8848 28.3036H8.80616C4.66402 28.3036 1.30615 24.9458 1.30615 20.8036V8.11249C1.30615 3.97035 4.66402 0.612488 8.80615 0.612488Z"
                      fill="#010C15"
                    />
                    <path
                      d="M25.3455 11.4581L29.5955 17.4581H21.0955L25.3455 11.4581Z"
                      fill="white"
                    />
                    <path
                      d="M8.80615 0.612488H41.8848C46.0269 0.612488 49.3848 3.97035 49.3848 8.11249V20.8036C49.3848 24.9458 46.0269 28.3036 41.8848 28.3036H8.80616C4.66402 28.3036 1.30615 24.9458 1.30615 20.8036V8.11249C1.30615 3.97035 4.66402 0.612488 8.80615 0.612488Z"
                      stroke="#1E2D3D"
                    />
                  </svg>

                  <div className="absolute left-[13.19px] top-[15.69px] inline-block w-[156px]"></div>
                  <svg
                    width="157"
                    height="30"
                    viewBox="0 0 157 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_497)">
                      <path
                        d="M94.8843 28.8036L61.8056 28.8036C57.6635 28.8036 54.3056 25.4458 54.3056 21.3036L54.3056 8.61248C54.3056 4.47035 57.6635 1.11248 61.8056 1.11248L94.8843 1.11249C99.0264 1.11249 102.384 4.47035 102.384 8.61249L102.384 21.3037C102.384 25.4458 99.0264 28.8036 94.8843 28.8036Z"
                        fill="#010C15"
                      />
                      <path
                        d="M78.345 17.9581L74.0949 11.9581L82.595 11.9581L78.345 17.9581Z"
                        fill="white"
                      />
                      <path
                        d="M94.8843 28.8036L61.8056 28.8036C57.6635 28.8036 54.3056 25.4458 54.3056 21.3036L54.3056 8.61248C54.3056 4.47035 57.6635 1.11248 61.8056 1.11248L94.8843 1.11249C99.0264 1.11249 102.384 4.47035 102.384 8.61249L102.384 21.3037C102.384 25.4458 99.0264 28.8036 94.8843 28.8036Z"
                        stroke="#1E2D3D"
                      />
                      <path
                        d="M148.345 28.8036L115.267 28.8036C111.124 28.8036 107.767 25.4458 107.767 21.3036L107.767 8.61248C107.767 4.47035 111.124 1.11248 115.267 1.11248L148.345 1.11249C152.487 1.11249 155.845 4.47035 155.845 8.61249L155.845 21.3037C155.845 25.4458 152.487 28.8036 148.345 28.8036Z"
                        fill="#010C15"
                      />
                      <path
                        d="M134.806 14.9581L128.806 19.2081L128.806 10.7081L134.806 14.9581Z"
                        fill="white"
                      />
                      <path
                        d="M148.345 28.8036L115.267 28.8036C111.124 28.8036 107.767 25.4458 107.767 21.3036L107.767 8.61248C107.767 4.47035 111.124 1.11248 115.267 1.11248L148.345 1.11249C152.487 1.11249 155.845 4.47035 155.845 8.61249L155.845 21.3037C155.845 25.4458 152.487 28.8036 148.345 28.8036Z"
                        stroke="#1E2D3D"
                      />
                      <path
                        d="M41.4238 28.8036L8.34518 28.8036C4.20305 28.8036 0.845177 25.4458 0.845177 21.3036L0.845179 8.61248C0.845179 4.47035 4.20304 1.11248 8.34518 1.11248L41.4238 1.11249C45.566 1.11249 48.9238 4.47035 48.9238 8.61249L48.9238 21.3037C48.9238 25.4458 45.566 28.8036 41.4238 28.8036Z"
                        fill="#010C15"
                      />
                      <path
                        d="M21.8845 14.9581L27.8845 10.7081L27.8845 19.2081L21.8845 14.9581Z"
                        fill="white"
                      />
                      <path
                        d="M41.4238 28.8036L8.34518 28.8036C4.20305 28.8036 0.845177 25.4458 0.845177 21.3036L0.845179 8.61248C0.845179 4.47035 4.20304 1.11248 8.34518 1.11248L41.4238 1.11249C45.566 1.11249 48.9238 4.47035 48.9238 8.61249L48.9238 21.3037C48.9238 25.4458 45.566 28.8036 41.4238 28.8036Z"
                        stroke="#1E2D3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_497">
                        <rect
                          width="156"
                          height="28.6912"
                          fill="white"
                          transform="translate(0.345154 0.61248)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <svg
              width="486"
              height="14"
              viewBox="0 0 486 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_15_259)">
                <g filter="url(#filter0_di_15_259)">
                  <circle
                    cx="7.4043"
                    cy="6.66003"
                    r="6.5"
                    fill="url(#paint0_radial_15_259)"
                  />
                </g>
                <path
                  d="M4.63501 8.95472L10.1736 4.36533M4.63501 4.36533L10.1736 8.95472"
                  stroke="#093430"
                />
                <g filter="url(#filter1_di_15_259)">
                  <circle
                    cx="478.904"
                    cy="6.66003"
                    r="6.5"
                    fill="url(#paint1_radial_15_259)"
                  />
                </g>
                <path
                  d="M476.135 8.95472L481.674 4.36533M476.135 4.36533L481.674 8.95472"
                  stroke="#163355"
                />
              </g>
              <defs>
                <filter
                  id="filter0_di_15_259"
                  x="-1.0957"
                  y="-1.83997"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0359028 0 0 0 0 0.177018 0 0 0 0 0.195833 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_15_259"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_15_259"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.088125 0 0 0 0 0.391667 0 0 0 0 0.360374 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_15_259"
                  />
                </filter>
                <filter
                  id="filter1_di_15_259"
                  x="470.404"
                  y="-1.83997"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0709722 0 0 0 0 0.174244 0 0 0 0 0.304167 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_15_259"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_15_259"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.170868 0 0 0 0 0.343622 0 0 0 0 0.554167 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_15_259"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_15_259"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(7.4043 3.66003) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#164C51" />
                  <stop offset="1" stop-color="#0D3A40" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_15_259"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(478.904 3.66003) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#234B7C" />
                  <stop offset="1" stop-color="#122E4F" />
                </radialGradient>
                <clipPath id="clip0_15_259">
                  <rect
                    width="484.5"
                    height="13"
                    fill="white"
                    transform="translate(0.904297 0.160034)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 box-border flex w-[1921px] flex-row items-center justify-between border-[1px] border-solid border-border-1 text-left font-fira-code text-base text-mediumseagreen">
        <div className="flex flex-1 flex-row items-center justify-start overflow-hidden bg-[url(/navleft@3x.png)] bg-cover bg-[top] bg-no-repeat">
          <div className="box-border flex w-[556px] flex-row items-center justify-start gap-[8px] self-stretch p-6">
            <div className="relative font-medium md:text-xs sm:hidden">
              <span>{`> visitor@guest:`}</span>
              <span className="text-dodgerblue">~</span>
              <span className="text-white">$</span>
            </div>
            <div className="relative text-aquamarine md:text-xs sm:hidden">
              <span className="font-medium">
                https://bambanggunawan.com/_hello
              </span>
              <b>|</b>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end self-stretch border-[1px] border-solid border-border-1 text-slategray">
          <div className="flex flex-row items-center justify-center gap-[8px] self-stretch border-[1px] border-solid border-border-1 px-6 py-0 sm:hidden">
            <div className="relative font-medium md:hidden Desktop_Small:hidden">
              @bambanggunawan
            </div>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z"
                fill="#607B96"
              />
            </svg>

            <i className="bi bi-send"></i>
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px] self-stretch border-[1px] border-solid border-border-1 px-6 py-0 sm:hidden">
            <div className="relative font-medium md:hidden Desktop_Small:hidden">
              @bambanggunawanid
            </div>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C9.37 4 4 9.37 4 16C4 21.31 7.435 25.795 12.205 27.385C12.805 27.49 13.03 27.13 13.03 26.815C13.03 26.53 13.015 25.585 13.015 24.58C10 25.135 9.22 23.845 8.98 23.17C8.845 22.825 8.26 21.76 7.75 21.475C7.33 21.25 6.73 20.695 7.735 20.68C8.68 20.665 9.355 21.55 9.58 21.91C10.66 23.725 12.385 23.215 13.075 22.9C13.18 22.12 13.495 21.595 13.84 21.295C11.17 20.995 8.38 19.96 8.38 15.37C8.38 14.065 8.845 12.985 9.61 12.145C9.49 11.845 9.07 10.615 9.73 8.965C9.73 8.965 10.735 8.65 13.03 10.195C13.99 9.925 15.01 9.79 16.03 9.79C17.05 9.79 18.07 9.925 19.03 10.195C21.325 8.635 22.33 8.965 22.33 8.965C22.99 10.615 22.57 11.845 22.45 12.145C23.215 12.985 23.68 14.05 23.68 15.37C23.68 19.975 20.875 20.995 18.205 21.295C18.64 21.67 19.015 22.39 19.015 23.515C19.015 25.12 19 26.41 19 26.815C19 27.13 19.225 27.505 19.825 27.385C22.2073 26.581 24.2775 25.05 25.744 23.0076C27.2106 20.9653 27.9996 18.5144 28 16C28 9.37 22.63 4 16 4Z"
                fill="#607B96"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
