import React, { useState } from "react";
import Website from "../assets/images/website.jpg";

const Platform = () => {
  const [webDiv, setWebDiv] = useState(false);
  const [IOSDiv, setIOSDiv] = useState(false);
  const [android, setAndroid] = useState(false);
  const [hybird, setHybird] = useState(false);
  const [wearables, setWearables] = useState(false);
  const [Iot, setIot] = useState(false);

  return (
    <div className="w-full mb-5">
      <div className="lg:max-w-5xl mx-auto md:max-w-xl">
        <div className="flex">
          <div className="border-4 border-CustomPurple w-6 h-6 animate-bounce mt-12 font-extrabold" />
          <h2 className="text-5xl font-body font-bold text-[#202020] not-italic leading-tight -ml-2">
            Platforms <br /> We Work On{" "}
          </h2>
        </div>
      </div>

      {/* Platform Section */}
      <div className="w-full bg-[#f7f7f7] mt-24 border-box md:justify-around">
        <div
          className="flex justify-between lg:max-w-6xl md:max-w-[44rem] mx-auto"
          data-aos="fade-right"
          duration="400"
        >
          <div
            className="flex w-full flex-col justify-center items-center h-[18rem] py-10 px-5 hover:bg-[#391F5B] hover:text-white cursor-pointer"
            onMouseOver={() => setWebDiv(true)}
            onMouseOut={() => setWebDiv(false)}
          >
            <img src={Website} alt="website" />
            <span className="text-2xl font-roboto py-2">Website</span>
            {webDiv && (
              <p className="text-[15px] font-roboto text-white text-center">
                An effective website is a combination of rock-solid technology,
                great design, and engaging content.
              </p>
            )}
          </div>

          <div
            className="flex flex-col w-full justify-center items-center py-10 px-5 h-[18rem] hover:bg-[#391F5B] hover:text-white cursor-pointer"
            onMouseOver={() => setIOSDiv(true)}
            onMouseOut={() => setIOSDiv(false)}
          >
            <img src={Website} alt="website" />
            <span className="text-2xl font-roboto py-2">IOS</span>
            {IOSDiv && (
              <p className="text-[15px] font-roboto text-white text-center">
                iOS apps that look good, have smooth functionality and are
                capable of generating impressive revenue.
              </p>
            )}
          </div>

          <div
            className="flex flex-col w-full justify-center items-center py-10 px-5 h-[18rem] hover:bg-[#391F5B] hover:text-white cursor-pointer"
            onMouseOver={() => setAndroid(true)}
            onMouseOut={() => setAndroid(false)}
          >
            <img src={Website} alt="website" />
            <span className="text-2xl font-roboto py-2">Android</span>
            {android && (
              <p className="text-[15px] font-roboto text-white text-center">
                Affordable and qualitative android apps that are tailored to
                meet your specific requirements.
              </p>
            )}
          </div>

          <div
            className="flex flex-col w-full justify-center items-center py-10 px-5 h-[18rem] hover:bg-[#391F5B] hover:text-white cursor-pointer"
            onMouseOver={() => setHybird(true)}
            onMouseOut={() => setHybird(false)}
          >
            <img src={Website} alt="website" />
            <span className="text-2xl font-roboto py-2">Hybird</span>
            {hybird && (
              <p className="text-[15px] font-roboto text-white text-center">
                Our experts incorporate industry-leading practices to create
                robust and reliable hybrid mobile apps.
              </p>
            )}
          </div>

          <div
            className="flex flex-col w-full justify-center items-center py-10 px-5 h-[18rem] hover:bg-[#391F5B] hover:text-white cursor-pointer"
            onMouseOver={() => setWearables(true)}
            onMouseOut={() => setWearables(false)}
          >
            <img src={Website} alt="website" />
            <span className="text-2xl font-roboto py-2">Wearables</span>
            {wearables && (
              <p className="text-[15px] font-roboto text-white text-center">
                We strive to develop wearable technology software that can
                process and respond to intuitive controls.
              </p>
            )}
          </div>

          <div
            className="flex flex-col w-full justify-center items-center py-10 px-5 h-[18rem] hover:bg-[#391F5B] hover:text-white cursor-pointer"
            onMouseOver={() => setIot(true)}
            onMouseOut={() => setIot(false)}
          >
            <img src={Website} alt="website" />
            <span className="text-2xl font-roboto py-2">IOT</span>
            {Iot && (
              <p className="text-[15px] font-roboto text-white text-center">
                IoT custom software solutions that harness the power of
                connected devices to empower enterprises.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
