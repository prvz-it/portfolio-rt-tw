import React from "react";
import MarginL from "./MarginL";
import Container from "./Container";
import MarginX from "./MarginX";

import { Typewriter } from "react-simple-typewriter";
import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <>
        <MarginL className="relative bg-[#f4f4f4] lg:h-screen">
          <div className="bg-[url('../src/assets/bg01.png'),_url('../src/assets/bg02.png')] bg-no-repeat bg-center bg-cover">
            <Container>
              <MarginX className="lg:h-screen lg:flex lg:items-center">
                <div className="lg:w-1/2 lg:text-left text-center">
                  <h2 className="font-playFair font-black lg:text-[62px] text-[48px] max-[350px]:text-[40px] text-Main_Hv mb-1">Hello</h2>
                  <h1 className="font-playFair font-bold xl:text-[84px] lg:text-[62px] text-[60px] max-[350px]:text-[48px] text-Main_Hv duration-500 mb-4">I'm{" "}
                    <span className='relative z-0 before:absolute before:content[""] lg:before:bottom-[12px] before:bottom-[8px] before:left-[0px] before:w-full before:h-[10px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Parvez</span>
                  </h1>
                  <span className=" font-Space font-medium sm:text-[22px] text-[20px] text-Main tracking-wider">
                    <Typewriter
                      words={["A Frontend Developer", "I Develop with ReactJS", "I Develop with Sass & Tailwind"]}
                      loop={5}
                      cursor
                      cursorStyle="|"
                      typeSpeed={300}
                      deleteSpeed={200}
                      delaySpeed={2000}
                    />
                  </span>
                  <ul className="lg:mt-16 lg:flex lg:justify-start hidden">
                    <li>
                      <a href="https://github.com/prvz-it" target="blank" className='py-4 px-8 bg-Main hover:bg-Main_Hv font-Montserrat font-medium uppercase text-[16px] text-white duration-500 flex items-center relative mb-[7px] mr-[7px] border-solid border-[1px] border-Main z-10 before:absolute before:content[""] before:w-full before:h-full before:border-solid before:border-[1px] before:border-Main hover:before:border-Main_Hv before:top-[7px] hover:before:top-[0px] before:left-[7px] hover:before:left-[0px] before:z-0 before:duration-500 '>Github Link{" "}
                        <HiArrowLongRight className="ml-2 text-[20px]" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full xl:h-screen">
                    <img className="w-full xl:pr-6 lg:pr-8" src="https://i.postimg.cc/9MjvTxZs/Hero.png" alt="Hero Image"/>
                  </div>
                </div>
              </MarginX>
              <div className="lg:block hidden lg:mx-6 mx-0">
                <div className="h-1/2 absolute content[''] right-[0%] xl:top-[25%] lg:top-[28%]">
                  <div className="h-full flex flex-col justify-around items-center">
                    <div className="">
                      <a className="rotate-90 font-Montserrat font-bold text-[16px] uppercase text-[#292929] hover:text-[#000]" href="https://www.facebook.com/prvz.it" target="blank"> Facebook </a>
                    </div>
                    <div className="">
                      <a className="rotate-90  font-Montserrat font-bold text-[16px] uppercase text-[#292929] hover:text-[#000]" href="https://twitter.com/prvz_it" target="blank"> Twitter </a>
                    </div>
                    <div className="">
                      <a className=" rotate-90 font-Montserrat font-bold text-[16px] uppercase text-[#292929] hover:text-[#000]" href="https://www.linkedin.com/in/prvz-it" target="blank"> Linkedin </a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </MarginL>
    </>
  );
};

export default Hero;
