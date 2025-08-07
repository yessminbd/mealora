import { useRef } from "react";
import Section from "./Section";
import food from '../assets/food.jpg'
import { BackgroundBurgers, BottomLine,  heroIcons } from '../design/Hero'
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import Cooking from "./Cooking";
import Notification from "./Notification";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 mt-6">
            Heart cooked, soul filled
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
           Nestled in the heart of Tunisia, Mealora offers a journey through the rich and soulful tastes of traditional Tunisian cuisine, reimagined for today's guests. From the moment you step inside, you're welcomed into an atmosphere blending contemporary comfort with cultural heritage.
          </p>
          <Button href="/" white className={'hover:text-n-5'}>
             Step into Tradition
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="  rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                    src={food}
                    alt="hero"
                    className="w-full h-full object-cover rounded-[0.9rem]"
                    width={1000}
                    height={1400}
                />
                   <ScrollParallax isAbsolutelyPositioned>
                <Cooking className={'absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2'} />
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((Icon, index) => (
                      <li className="p-5" key={index}>
                        <Icon  width={24} height={25} alt={Icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
              <Notification className={`hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex`} title ='Today’s special dish!' />
              </ScrollParallax>
              </div>
            </div>
          </div>
          <BackgroundBurgers/>
        </div>
        <h5 className=" relative z-10 mt-20  tagline mb-6 text-center text-n-1/50">Your guide to the ultimate food destination</h5>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;