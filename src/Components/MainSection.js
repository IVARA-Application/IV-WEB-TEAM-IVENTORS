import React from "react";
import img from "../img/Main.png";

function MainSection() {
  return (
    <div className="bg-primary text-shadow main">
      <div className="flex flex-col md:w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row mx-auto items-center justify-center content-container">
          {/* Left side */}
          <div className="space-y-4 flex-1">
            <p className="md:text-2xl text-xl px-2 font-light">
              <span className="text-4xl md:text-7xl italic font-extralight">
                IV
              </span>
              For Learning, Livelihood and life
            </p>
            <div className="space-y-4 text-md px-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores ea, doloremque dolore magni error debitis at eveniet
                quasi quod fugit sapiente, voluptatum repellendus possimus
                necessitatibus rem minus laudantium non! Animi eos distinctio ex
                aliquid dolor doloribus placeat dolorum veniam, facilis eaque
                quam error molestiae reiciendis fugiat omnis libero soluta
                quibusdam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores ea, doloremque dolore magni error debitis at eveniet
                quasi quod fugit sapiente, voluptatum repellendus possimus
                necessitatibus rem minus laudantium non! Animi eos distinctio ex
                aliquid dolor doloribus placeat dolorum veniam, facilis eaque
                quam error molestiae reiciendis fugiat omnis libero soluta
                quibusdam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores ea, doloremque dolore magni error debitis at eveniet
                quasi quod fugit sapiente, voluptatum repellendus possimus
                necessitatibus rem minus laudantium non! Animi eos distinctio ex
                aliquid dolor doloribus placeat dolorum veniam, facilis eaque
                quam error molestiae reiciendis fugiat omnis libero soluta
                quibusdam.
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex items-center justify-end px-2 pt-2 lg:px-0 lg:pt-6">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
