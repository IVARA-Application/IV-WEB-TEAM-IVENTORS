import React from "react";
import Ivara from "../img/Ivaralogo.png";
import MentorBaba from "../img/MbLogo.png";
import Hmm from "../img/hmmlogo.png";

function Footer() {
  return (
    <div className="bg-primary text-shadow footer flex-col flex pt-6 lg:pt-0 lg:justify-end">
      <div className="lg:w-4/5 mx-auto flex flex-col">
        <div className="Socials flex space-x-12 self-end items-center py-2">
          <a href="https://ivaraedu.com/">
            <div className="flex flex-col items-center ">
              <img src={Ivara} alt="" />
              <p>IVARA</p>
            </div>
          </a>
          <a href="https://www.mentorbaba.in/">
            <div className="flex flex-col items-center">
              <img src={MentorBaba} alt="" />
              <p>MentorBaba</p>
            </div>
          </a>
          <a href="https://www.healmymind.in/">
            <div className="flex flex-col items-center ">
              <img src={Hmm} alt="" />
              <p>HealMyMind</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
