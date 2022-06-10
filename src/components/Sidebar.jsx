import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="bg-half-transparent w-screen h-screen z-10 fixed nav-item top-0 right-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-CustomPurple scrollbar-track-gray-100">
        <div className="float-right h-auto pb-10 dark:text-gray-200 bg-white w-400 animateSidebar">
          <div className="w-full pr-24 flex text-3xl justify-end text-CustomPurple mt-8">
            <FaRegWindowClose className="cursor-pointer" />
          </div>
          <div className="flex flex-col flex-wrap pr-72 ml-6 justify-start w-400 ">
            <ul className="font-roboto text-lg text-[#333] capitalize font-semibold cursor-pointer">
              <li className="py-3 hover:text-CustomPurple duration-300">
                About
              </li>
              <li className="py-3 hover:text-CustomPurple duration-300">
                case studies
              </li>
              <li className="py-3 hover:text-CustomPurple duration-300">
                services
              </li>
              <li className="py-3 hover:text-CustomPurple duration-300">
                technology
              </li>
              <li className="py-3 hover:text-CustomPurple duration-300">
                blog
              </li>
              <li className="py-3 hover:text-CustomPurple duration-300">
                contact
              </li>
            </ul>
            <ul className="text-[#969696] font-medium capitalize mt-4 font-roboto">
              <li className="hover:text-CustomPurple cursor-pointer duration-300">
                facebook
              </li>
              <li className="hover:text-CustomPurple cursor-pointer duration-300">
                twitter
              </li>
              <li className="hover:text-CustomPurple cursor-pointer duration-300">
                linkedIn
              </li>
              <li className="hover:text-CustomPurple cursor-pointer duration-300">
                google+
              </li>
              <li className="hover:text-CustomPurple cursor-pointer duration-300">
                github
              </li>
            </ul>
          </div>
          <div className="bg-black h-[1px] mt-4 w-[87%] mx-auto " />

          <div className="ml-6 mt-4">
            <p className="font-bold font-roboto text-base py-2">
              Dallas/Ft Worth, USA
            </p>
            <p className="text-[#969696] text-base font-roboto">
              Office# 950 E Hwy 114 Suite 160 ,<br /> Southlake, TX 76092
            </p>
          </div>

          <div className="ml-6 mt-4">
            <p className="font-bold font-roboto text-base py-2">Karachi, PK</p>
            <p className="text-[#969696] text-base font-roboto">
              House #, 105B Tipu Sultan Rd, <br /> Mohammad Ali Society,
              Karachi, Pakistan 75300
            </p>
          </div>

          <div className="ml-6 mt-4">
            <p className="font-bold font-roboto text-base py-2">
              Houston, Texas, USA
            </p>
            <p className="text-[#969696] text-base font-roboto">
              Office# 700 Milam St, Suite 1300, <br /> Houston, TX 77002
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
