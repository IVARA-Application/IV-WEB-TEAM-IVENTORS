import React from "react";
import Logo from "../img/Logo.png";
import ArrowRightAltTwoToneIcon from "@material-ui/icons/ArrowRightAltTwoTone";

function NavBar() {
  return (
    <div className="bg-primary text-shadow navbar flex flex-col justify-center">
      <div className="flex flex-wrap items-center justify-center lg:justify-between px-4 lg:w-4/5 mx-auto">
        <div className="text-shadow flex flex-1 flex-wrap items-center justify-center md:justify-start">
          <img src={Logo} alt="Site Logo" />
          <h1 className="lg:text-xl xl:text-2xl text-center lg:text-left">
            IVentors Initiatives Private Limited
          </h1>
        </div>
        <div className="flex space-x-4 lg:space-x-8 flex-1 justify-center xl:justify-end py-4">
          <div className="flex space-x-4 xl:space-x-8 px-2 lg:px-4 items-center rounded-full Buttons">
            <p>About</p>
            <ArrowRightAltTwoToneIcon className="bg-secondary rounded-full icons" />
          </div>
          <div className="flex space-x-4 xl:space-x-8 items-center rounded-full Buttons px-2 lg:px-4">
            <p>Contact</p>
            <ArrowRightAltTwoToneIcon className="bg-secondary rounded-full icons" />
          </div>
          <div className="flex space-x-4 xl:space-x-8 px-4 xl:py-2 items-center rounded-full Buttons">
            <p className="">Team Login</p>
            <ArrowRightAltTwoToneIcon className="bg-secondary rounded-full icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
