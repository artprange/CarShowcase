"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily
        </h1>
        {/* <h1 className="hero__title">Encontre, reserve ou alugue um carro — fácil e rápido</h1> */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking.
        </p>
        {/* <p className="hero__subtitle">
          Aluguel de carros como você nunca viu
        </p> */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue
          text-white
          rounded-full
          mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
