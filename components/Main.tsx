"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Main = () => {
  const handleScroll = () => {};

  return (
    <div className="main">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="main__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>

        <p className="main__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          btnType="button"
        />
      </div>
      <div className="main__image-container">
        <div className="main__image">
          <Image src="/hero.png" alt="main" fill className="object-contain" />
        </div>
        <div className="main__image-overlay"></div>
      </div>
    </div>
  );
};

export default Main;
