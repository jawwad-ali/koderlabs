import React from "react";

const Offer = () => {
  return (
    <div
      className="w-full pb-12 mb-12"
      style={{ boxShadow: "0 0 10px rgb(0 0 0 / 20%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col ml-20 mt-24">
          <h2
            className="text-[47px] font-body my-8 font-bold text-[#202020] not-italic leading-tight -ml-2"
            data-aos="fade-up"
          >
            Custom Software <br /> Development Company Houston
            <span className="text-[#391f5b] font-bold text-[33px]">
              {" "}
              ... Devoted To Your <br /> Business Plan
            </span>
          </h2>
          <div>
            <button className="outline-btn-primary text-sm text-black tracking-wide font-body font-bold hover:text-CustomPurple ">
              Read More
            </button>

            <ul
              className="font-roboto text-[25.2px] text-[#333] mt-16"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              <li className="py-1">UI/UX Design</li>
              <li className="py-1">Website Development</li>
              <li className="py-1">Android App Development</li>
              <li className="py-1">iOS App Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
