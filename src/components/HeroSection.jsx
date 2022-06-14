import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null);

  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Collaboration.", "Expertise.", "Delivery."],
      typeSpeed: 50,
      backSpeed: 25,
      deplay: 100,
      showCursor: false,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
  }, []);

  return (
    <div className="w-full pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:ml-20 lg:pt-24 md:pt-0 md:ml-28">
          <div className="flex flex-row">
            <div className="border-4 border-CustomPurple w-6 h-6 animate-bounce mt-12 font-extrabold" />
            <h1
              className="md:text-[52px] text-[44px] font-body font-bold text-[#202020] not-italic leading-tight -ml-2"
              data-aos="zoom-in"
            >
              Where Technology & <br /> Innovation Inspire
            </h1>
          </div>
          <p
            className="font-roboto text-4xl mt-8 ml-4 md:mt-4 leading-tight"
          >
            Software Development beyond expectations! We strive <br /> to
            mesmerize through
            <div className="type-wrap h-15">
              <span
                style={{ whiteSpace: "pre" }}
                className="text-CustomPurple"
                ref={el}
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
