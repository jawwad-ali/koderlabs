import { useState } from "react";
import PlayStore from "../assets/images/playstore.png";
import AppStore from "../assets/images/appstore.png";
import Close from "../assets/images/momentpin-close.png";
import Mobile from "../assets/images/momentpin-mobile.png";
import Number from "../assets/images/momentpin-210.png";
import Label from "../assets/images/momentpin-black-label.png";
import Phoneleft from "../assets/images/iphone-left.png";
import EventSlackMac from "../assets/images/event-slack-mac.png";
import BannerPhone from "../assets/images/banner-phone.png";
import SnapShotMiddle from "../assets/images/snapshot-middle.png";
import ESupply from "../assets/images/e-supply.png";
import HrScreen from "../assets/images/hr-screen.png";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

const Softwares = () => {
  const [backgroundColor, setBackgroundColor] = useState("#26ae61");

  const changeBackground = () => {
    if (window.pageYOffset >= 1018 && window.pageYOffset <= 1881) {
      setBackgroundColor("#26ae61");
    }
    if (window.pageYOffset >= 1882 && window.pageYOffset <= 2816) {
      setBackgroundColor("#066350");
    }
    if (window.pageYOffset >= 2817 && window.pageYOffset <= 3312) {
      setBackgroundColor("#0B4090");
    }
    if (window.pageYOffset >= 3313 && window.pageYOffset <= 3994) {
      setBackgroundColor("#43ebc1");
    }
    if (window.pageYOffset >= 3995 && window.pageYOffset <= 4589) {
      setBackgroundColor("#4B3EA8");
    }
    if (window.pageYOffset >= 4590 && window.pageYOffset <= 5846) {
      setBackgroundColor("#00BAFF");
    }
    if (window.pageYOffset >= 5847) {
      setBackgroundColor("#16cda1");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className="w-full my-10 py-20 h-auto duration-500"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto">
          <h2
            className="text-white text-[52px] py-3"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            Momentpin
          </h2>
          <p className="text-white text-2xl">
            Our expert software development company successfully designed and
            developed a Social App to Capture & Share Blissful Moments in Your
            Life.
          </p>
          <div className="mt-10 flex">
            <img
              src={PlayStore}
              alt="Play Store"
              className="h-10 w-32"
              data-aos="fade-right"
              data-aos-duration="400"
            />
            <img
              src={AppStore}
              alt="Play Store"
              className="h-10 w-32 ml-6"
              data-aos="fade-right"
              data-aos-duration="500"
            />
          </div>
          <div className="mt-5 ">
            <button
              data-aos="fade-up"
              data-aos-duration="300"
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="md:mt-5 lg:mt-0 md:mx-auto">
          <div className="h-[150px] ">
            <img src={Close} alt="Close" data-aos="fade-right" />
          </div>
          <div className="h-[200px] -mt-40">
            <img
              src={Mobile}
              alt="Mobile"
              className="mt-0"
              data-aos="fade-up"
            />
          </div>
          <div className="h-[200px] -mt-48">
            <img src={Number} alt="Number" data-aos="fade-left" />
          </div>
          <div className="-mt-52">
            <img src={Label} alt="Label" data-aos="fade-right" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto md:w-full">
          <h2
            className="text-white text-[52px] py-3"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            Shoptalk
          </h2>
          <p className="text-white text-2xl">
            Not just any online store, Shoptalk delivers shoppers with a whole
            new experience of fashion exploration and social networking.
          </p>
          <div className="mt-10 flex">
            <img src={PlayStore} alt="Play Store" className="h-10 w-32" />
            <img src={AppStore} alt="Play Store" className="h-10 w-32 ml-6" />
          </div>
          <div className="mt-5">
            <button
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="md:mx-auto">
          <div className="md:mt-5 lg:mt-0 md:mx-auto">
            <img
              src={Phoneleft}
              alt="Close"
              className="lg:w-[80%] md:w-[80%]  h-auto"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto md:w-full">
          <h2 className="text-white text-[52px] py-3">Event Slack</h2>
          <p className="text-white text-2xl">
            Our custom software development company Houston has stepped in and
            renovated the concept of socializing. You will never miss out on an
            event near you.
          </p>

          <div className="mt-5">
            <button
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="mx-auto md:mt-5">
          <img
            src={EventSlackMac}
            alt="Close"
            className="w-[80%] h-auto mx-auto "
          />
        </div>
      </div>

      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto md:w-full">
          <h2 className="text-white text-[52px] py-3">Shopwell</h2>
          <p className="text-white text-2xl">
            We’ve stepped in to digitalize and renovate the concept of shopping.
            Customers can find their favorite clothes and accessories at amazing
            discounts and deals.
          </p>

          <div className="mt-5">
            <button
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="mx-auto">
          <img
            src={BannerPhone}
            alt="Close"
            className="w-[80%] h-auto mx-auto "
          />
        </div>
      </div>

      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto md:w-full">
          <h2 className="text-white text-[52px] py-3">1 deal</h2>
          <p className="text-white text-2xl">
            The combined effort of our expert software developers has resulted
            in an amazing eCommerce store that offers premium products at the
            best deals and discounts.
          </p>

          <div className="mt-5">
            <button
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="mx-auto">
          <img
            src={SnapShotMiddle}
            alt="Close"
            className="w-[80%] h-auto mx-auto "
          />
        </div>
      </div>

      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto md:w-full">
          <h2 className="text-white text-[52px] py-3">eSupplySystem</h2>
          <p className="text-white text-2xl">
            A modern profit management system that can connect customers with
            budget-friendly and authentic retailers. Meeting the customer’s
            needs quality standards.
          </p>

          <div className="mt-5">
            <button
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="mx-auto">
          <img src={ESupply} alt="Close" className="w-[80%] h-auto mx-auto " />
        </div>
      </div>

      <div className="max-w-6xl pt-80 mx-auto flex lg:flex-row md:flex-col">
        {/* left COl */}
        <div className="flex flex-col lg:w-1/2 justify-start pl-8 font-roboto md:w-full">
          <h2 className="text-white text-[52px] py-3">Altanova</h2>
          <p className="text-white text-2xl">
            Auto-manage your company’s work log with an efficient and modern
            management solution. We deliver full turn-key test interface
            solutions and log management.
          </p>

          <div className="mt-5 ">
            <button
              className="text-white border-2 text-[15px] font-body py-3 px-8 flex"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="hover:translate-x-2 duration-300">
                Case Study{" "}
                <FaArrowRight className="inline-block pb-1 w-8 h-6 " />
              </div>
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="mx-auto md:mt-5">
          <img
            src={HrScreen}
            alt="Close"
            className="w-[80%] md:w-[55%] h-auto mx-auto "
          />
        </div>
      </div>
    </div>
  );
};
export default Softwares;
