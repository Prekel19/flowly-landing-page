import React from "react";
import Image, { StaticImageData } from "next/image";
import slide1 from "../assets/hero-slider/hero-slide-01.webp";
import slide2 from "../assets/hero-slider/hero-slide-02.webp";
import slide3 from "../assets/hero-slider/hero-slide-03.webp";
import slide4 from "../assets/hero-slider/hero-slide-04.webp";
import slide5 from "../assets/hero-slider/hero-slide-05.webp";
import slide6 from "../assets/hero-slider/hero-slide-06.webp";

export default function HeroSection() {
  const slides: StaticImageData[] = [slide1, slide2, slide3, slide4, slide5, slide6];

  return (
    <div
      className="flex flex-col items-center text-center gap-16 pt-12 max-sm:gap-20"
      id="home"
    >
      <div className="flex flex-col items-center gap-4 max-sm:px-4 max-sm:gap-6">
        <h1 className="font-stix text-3xl font-semibold">
          Zwiększ swoją produktywność dzięki naszemu menedżerowi zadań!
        </h1>
        <p className="font-noto">
          Pozostań zorganizowany i na bieżąco z zadaniami dzięki naszemu intuicyjnemu
          menedżerowi zadań. <br />
          Usprawnij swój proces pracy i nigdy więcej nie przegap terminu!
        </p>
        <div className="flex font-noto items-center justify-center gap-6 *:transition *:duration-300">
          <a
            href="#"
            className="flex bg-primary1 text-white items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-secondary1 hover:text-primary1"
          >
            Rozpocznij
          </a>
          <a
            href="#features"
            className="flex items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-primary1 hover:text-white"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>
      <div className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => {
            return (
              <div key={index} className="slide">
                <Image src={slide} alt="slide photo" placeholder="blur" priority />
              </div>
            );
          })}
        </div>
        <div className="slider-container">
          {slides.map((slide, index) => {
            return (
              <div key={index} className="slide">
                <Image src={slide} alt="slide photo" placeholder="blur" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
