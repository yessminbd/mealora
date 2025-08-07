import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import burger from'../assets/icons/burger.png'
import { FaUtensils, FaHamburger } from 'react-icons/fa';
import { GiFruitBowl } from 'react-icons/gi';
import { LuChefHat } from 'react-icons/lu'; // ou TbChefHat
import { CiBurger } from "react-icons/ci";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25  pointer-events-none xl:block" />

      <CiBurger className="hidden absolute text-color-2 top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <CiBurger className="hidden absolute text-color-2 top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Burgers = () => {
  return (
    <>
      <CiBurger
        className="absolute top-1/2 left-1/2 w-[20rem] opacity-10 -translate-x-1/2 -translate-y-1/2"
      />
      <CiBurger
        src={burger}
        alt="burger ring"
        className="absolute top-1/2 left-1/2 w-[30rem] opacity-10 -translate-x-1/2 -translate-y-1/2"
      />
      <CiBurger
        src={burger}
        alt="burger ring"
        className="absolute top-1/2 left-1/2 w-[40rem] opacity-10 -translate-x-1/2 -translate-y-1/2"
      />
      
    </>
  );
};


export const BackgroundBurgers = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute text-color-2 -top-[42.375rem] left-1/2 w-[78rem] aspect-square   -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Burgers />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <CiBurger
            className={` w-6 h-6 -ml-1 -mt-36  transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <CiBurger
            className={`w-6 h-6 -ml-1 -mt-32 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute  bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <CiBurger
            className={`hidden w-6 h-6 -ml-1 mt-[12.9rem]  rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className=" absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <CiBurger
            className={`w-6 h-6 -ml-1.5 mt-52  rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <CiBurger
            className={`w-6 h-6 -ml-3 -mt-3   rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <CiBurger
            className={`w-6 h-6 -ml-3 -mt-3   transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};


export const heroIcons = [FaUtensils, FaHamburger, GiFruitBowl, LuChefHat];
