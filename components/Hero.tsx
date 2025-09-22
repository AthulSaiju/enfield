import Vertical from "../common/vertical";
import React from "react";
import Container from "./Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="main-container  relative">
      <div className=" mt-[7px] ml-[2px]">
        <Vertical />
      </div>

      <div className=" absolute left-3 top-[40%]">
        <Image src="/assets/MLG.svg" alt="Icon 1" width={35} height={35} />
      </div>

      <div className=" absolute right-3 top-[30%]">
        <Image src="/assets/gun.svg" alt="Icon 1" width={35} height={35} />
      </div>

      <Container />

      <div className="absolute bottom-[3px] left-[3px]">
        <Vertical />
      </div>
    </div>
  );
};

export default Hero;
