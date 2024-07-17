import React from "react";
import saly from "../../../public/image/Saly-1.png";
import Image from "next/image";
import background from "../../../public/image/backgroundLogin.png";

const Introduce = () => {
    return (
        <div
            className="h-1/2 bg-gray-200 flex-shrink-0"
            style={{
                background: "linear-gradient(180deg, #3C7FF5 46.47%, #234A8F 100%)",
            }}
        >
            <Image src={background} alt="Description of image" width={857} height={1054} className="absolute flex-shrink-0 ml-12 sm:block hidden" />
            <div className="relative z-20 sm:block hidden">
                {/* Logo SHSOFTVINA */}
                <div className="flex items-center mt-103px ml-180px gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <g filter="url(#filter0_i_222_15033)">
                            <path
                                d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                                fill="#3C7FF5"
                            />
                            <path
                                d="M42.0167 11.5278C42.0167 13.4455 40.4621 15.0001 38.5445 15.0001C36.6268 15.0001 35.0723 13.4455 35.0723 11.5278C35.0723 9.61018 36.6268 8.05566 38.5445 8.05566C40.4621 8.05566 42.0167 9.61018 42.0167 11.5278Z"
                                fill="white"
                            />
                            <path
                                d="M42.0167 11.4586C42.0167 13.3762 40.4621 14.9307 38.5445 14.9307C36.6268 14.9307 35.0723 13.3762 35.0723 11.4586C35.0723 9.54092 36.6268 7.98633 38.5445 7.98633C40.4621 7.98633 42.0167 9.54092 42.0167 11.4586Z"
                                fill="#292929"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M38.5414 17.0138C41.6097 17.0138 44.097 14.5265 44.097 11.4582C44.097 11.3106 44.0912 11.1644 44.0799 11.0197C46.9292 14.9211 48.6109 19.7294 48.6109 24.9305C48.6109 37.9705 38.0398 48.5415 24.9998 48.5415C11.9597 48.5415 1.38867 37.9705 1.38867 24.9305C1.38867 11.8904 11.9597 1.31934 24.9998 1.31934C30.2443 1.31934 35.0895 3.02925 39.0082 5.922C38.8543 5.90919 38.6986 5.90267 38.5414 5.90267C35.4732 5.90267 32.9859 8.38996 32.9859 11.4582C32.9859 14.5265 35.4732 17.0138 38.5414 17.0138ZM38.5414 14.9304C40.4591 14.9304 42.0137 13.3759 42.0137 11.4582C42.0137 9.54058 40.4591 7.98599 38.5414 7.98599C36.6238 7.98599 35.0692 9.54058 35.0692 11.4582C35.0692 13.3759 36.6238 14.9304 38.5414 14.9304ZM24.9998 32.5693C29.2186 32.5693 32.6387 29.1493 32.6387 24.9305C32.6387 20.7116 29.2186 17.2915 24.9998 17.2915C20.781 17.2915 17.3609 20.7116 17.3609 24.9305C17.3609 29.1493 20.781 32.5693 24.9998 32.5693Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M36.4844 18.0771C36.4907 18.0791 36.4971 18.0811 36.5035 18.083L36.5181 18.0875L36.5273 18.0902C36.558 18.0995 36.5889 18.1086 36.6198 18.1175C36.575 18.1032 36.5299 18.0897 36.4844 18.0771Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M28.5758 17.8468C30.4934 17.8468 32.048 16.2922 32.048 14.3746C32.048 14.0446 32.0019 13.7254 31.916 13.4231C31.9105 13.4046 31.9051 13.3861 31.8997 13.3676C31.8507 13.2054 31.79 13.0482 31.7188 12.897C31.319 12.048 30.5852 11.385 29.6868 11.0818H29.6868C29.338 10.964 28.9643 10.9023 28.5758 10.9023C26.6581 10.9023 25.1035 12.4569 25.1035 14.3746C25.1035 16.2922 26.6581 17.8468 28.5758 17.8468Z"
                                fill="#3C7FF5"
                            />
                            <path
                                d="M35.5562 24.8956C37.4739 24.8956 39.0284 23.3411 39.0284 21.4234C39.0284 21.058 38.972 20.7058 38.8673 20.3749C38.5291 19.3058 37.6874 18.4605 36.6205 18.1173C36.5897 18.1084 36.559 18.0993 36.5285 18.09L36.5192 18.0873L36.5047 18.0828C36.4984 18.0809 36.492 18.0789 36.4857 18.077C36.1899 17.995 35.8782 17.9512 35.5562 17.9512C33.6386 17.9512 32.084 19.5058 32.084 21.4234C32.084 23.3411 33.6386 24.8956 35.5562 24.8956Z"
                                fill="#3C7FF5"
                            />
                            <path
                                d="M24.9994 39.4791C33.0535 39.4791 39.5827 32.9499 39.5827 24.8958C39.5827 23.3242 39.3263 21.794 38.866 20.3751C38.9707 20.7059 39.0271 21.0582 39.0271 21.4236C39.0271 23.3413 37.4726 24.8958 35.5549 24.8958C33.6373 24.8958 32.0827 23.3413 32.0827 21.4236C32.0827 19.5059 33.6373 17.9514 35.5549 17.9514C35.8769 17.9514 36.1886 17.9952 36.4844 18.0772C34.2792 17.3942 32.5748 15.6354 31.916 13.4235C32.0019 13.7258 32.048 14.045 32.048 14.375C32.048 16.2926 30.4934 17.8472 28.5758 17.8472C26.6581 17.8472 25.1035 16.2926 25.1035 14.375C25.1035 12.4574 26.6581 10.9028 28.5758 10.9028C28.9643 10.9028 29.338 10.9644 29.6868 11.0822C28.2156 10.5831 26.6391 10.3125 24.9994 10.3125C16.9452 10.3125 10.416 16.8416 10.416 24.8958C10.416 32.9499 16.9452 39.4791 24.9994 39.4791Z"
                                fill="#3C7FF5"
                            />
                            <path
                                d="M32.6391 24.9309C32.6391 29.1498 29.219 32.5698 25.0002 32.5698C20.7814 32.5698 17.3613 29.1498 17.3613 24.9309C17.3613 20.7121 20.7814 17.292 25.0002 17.292C29.219 17.292 32.6391 20.7121 32.6391 24.9309Z"
                                fill="white"
                            />
                            <path
                                d="M42.0167 11.4586C42.0167 13.3762 40.4621 14.9307 38.5445 14.9307C36.6268 14.9307 35.0723 13.3762 35.0723 11.4586C35.0723 9.54092 36.6268 7.98633 38.5445 7.98633C40.4621 7.98633 42.0167 9.54092 42.0167 11.4586Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_i_222_15033"
                                x="0"
                                y="0"
                                width="50"
                                height="50.45"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="0.450007" />
                                <feGaussianBlur stdDeviation="0.225003" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_222_15033" />
                            </filter>
                        </defs>
                    </svg>
                    <h1 className="text-white font-bold text-2xl leading-9">SHSOFTVINA</h1>
                </div>

                {/* Description */}
                <div className="flex-shrink-0 ml-180px mt-4 w-96 h-44">
                    <h1 className="text-white text-3xl font-normal leading-normal font-inter">Welcome to our community</h1>
                    <div className="text-white text-base font-light leading-relaxed w-330px h-115px font-inter mt-30px">
                        A massive library of free open-source design front-end UI/UX. This offers a wide range of resources to fit any design project.
                        Also, connect with other developers and share knowledge from each other.
                    </div>
                </div>

                {/* IMAGE LAPTOP */}
                <div className="relative mt-[81px] ml-[88px]">
                    <svg width="648" height="410" viewBox="0 0 648 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_222_14968)">
                            <ellipse cx="323.798" cy="362.903" rx="279.661" ry="3.09645" fill="black" />
                        </g>
                        <path
                            d="M73 28C73 13.0883 85.0883 1 100 1H548.316C563.228 1 575.316 13.0883 575.316 28V339.086C575.316 340.743 573.973 342.086 572.316 342.086H76C74.3431 342.086 73 340.743 73 339.086V28Z"
                            fill="#1A202C"
                            stroke="#4A5568"
                            strokeWidth="2"
                        />
                        <path
                            d="M75.541 25.0967C75.541 12.9464 85.3908 3.09668 97.541 3.09668H551.677C563.827 3.09668 573.677 12.9464 573.677 25.0967V330.081H75.541V25.0967Z"
                            fill="black"
                        />
                        <path
                            d="M12 342.609C12 341.505 12.8954 340.609 14 340.609H632.979C634.083 340.609 634.979 341.505 634.979 342.609V351.757H12V342.609Z"
                            fill="#A3ACB1"
                        />
                        <path
                            d="M12 342.609C12 341.505 12.8954 340.609 14 340.609H632.979C634.083 340.609 634.979 341.505 634.979 342.609V351.757H12V342.609Z"
                            fill="url(#paint0_linear_222_14968)"
                        />
                        <path
                            d="M12 351.757H634.979C610.524 356.699 585.638 359.188 560.689 359.188H79.5651C56.8394 359.188 34.1824 356.696 12 351.757Z"
                            fill="#647279"
                        />
                        <path
                            d="M12 351.757H634.979C610.524 356.699 585.638 359.188 560.689 359.188H79.5651C56.8394 359.188 34.1824 356.696 12 351.757Z"
                            fill="url(#paint1_linear_222_14968)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M272.213 340.609C272.531 345.451 276.551 349.279 281.463 349.279H366.134C371.046 349.279 375.066 345.451 375.384 340.609H272.213Z"
                            fill="#96A1A8"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M272.213 340.609C272.531 345.451 276.551 349.279 281.463 349.279H366.134C371.046 349.279 375.066 345.451 375.384 340.609H272.213Z"
                            fill="url(#paint2_linear_222_14968)"
                        />
                        <rect x="86" y="12" width="477" height="309" rx="16" fill="url(#pattern0_222_14968)" />
                        <defs>
                            <filter
                                id="filter0_f_222_14968"
                                x="0.137695"
                                y="315.807"
                                width="647.321"
                                height="94.1934"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur_222_14968" />
                            </filter>
                            <pattern id="pattern0_222_14968" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_222_14968" transform="matrix(0.000904977 0 0 0.00140117 -2.40074e-08 -0.00373134)" />
                            </pattern>
                            <linearGradient
                                id="paint0_linear_222_14968"
                                x1="12"
                                y1="346.183"
                                x2="634.979"
                                y2="346.183"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#0D1012" />
                                <stop offset="0.0295345" stopColor="#CAD4DB" />
                                <stop offset="0.0625" stopColor="#242729" />
                                <stop offset="0.133609" stopColor="#A3ACB1" />
                                <stop offset="0.865967" stopColor="#A3ACB1" />
                                <stop offset="0.941937" stopColor="#242729" />
                                <stop offset="0.971275" stopColor="#CAD4DB" />
                                <stop offset="0.996436" stopColor="#0D1012" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_222_14968"
                                x1="323.489"
                                y1="351.757"
                                x2="323.489"
                                y2="359.188"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#7A7F83" />
                                <stop offset="1" stopColor="#0B0B0E" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_222_14968"
                                x1="282.39"
                                y1="345.873"
                                x2="367.061"
                                y2="345.873"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#3C3C3C" />
                                <stop offset="0.317518" stopColor="#3C3C3C" stopOpacity="0" />
                                <stop offset="0.660584" stopColor="#3C3C3C" stopOpacity="0" />
                                <stop offset="1" stopColor="#444444" />
                            </linearGradient>
                            <image
                                id="image0_222_14968"
                                width="1105"
                                height="4096"
                            />
                        </defs>
                    </svg>
                </div>

                {/* Image Saly */}
                <div className="absolute z-50 top-58px left-485px">
                    <Image src={saly} alt="Description of image" width={385} height={385} />
                </div>
            </div>
        </div>
    );
};

export default Introduce;