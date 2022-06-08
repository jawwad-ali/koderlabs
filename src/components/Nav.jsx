import React, { useState } from "react";
import Logo from "../assets/images/logo.png"; 
import { Squash as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar"; 

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-white shadow-xl py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="ml-7">
            <a href="/">
              <img src={Logo} alt="KoderLabs" />
            </a>
          </div> 
          <div className="flex mr-16 ">
            <div>
              <button className="outline-btn-primary text-sm text-black tracking-wide font-body font-bold hover:text-CustomPurple mt-1">
                Start a Discussion
              </button>
            </div>

            {isOpen ? (
              <div className="ml-4" onClick={() => setOpen(false)}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Sidebar className="animationFadeOut" />
              </div>
            ) : (
              <div className="ml-4" onClick={() => setOpen(true)}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
