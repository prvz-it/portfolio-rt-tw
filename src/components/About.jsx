import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import { LuMapPin, LuPhoneCall, LuClock3 } from "react-icons/lu";
import { BsEnvelopeAt, BsGlobe2 } from "react-icons/bs";

import { HiArrowLongRight } from "react-icons/hi2";

import { SlLayers } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";
import AboutReusable from './reusable/AboutReusable';

const About = () => {
  return (
    <div id='about'>
        <MarginL>
            <Container>
                <MarginX className="pt-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'><span className='relative z-0 before:absolute before:content[""] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>About</span> Me</h2>
                    </div>
                    <div className="my-20 xl:flex xl:items-center">
                        <div className="xl:w-1/2 xl:mb-0 mb-8">
                            <div className=" relative z-0 before:absolute before:content[''] before:bottom-[0px] before:left-[0px] xl:before:w-[36%] lg:before:w-[28%] md:before:w-[28%] sm:before:w-[28%] before:w-[50%] before:h-[96%] before:bg-Main before:-z-10 ">
                                <img className='xl:w-[400px] xl:h-500px w-fit' src="https://i.postimg.cc/P5SPK5HQ/Mob-menu.png" alt="About Image" />
                            </div>
                        </div>
                        <div className="xl:w-1/2">
                            <div className="">
                                <h3 className='mb-[6px] font-Montserrat font-semibold uppercase text-[28px] text-Main_Tx leading-10 tracking-widest opacity-90'>MH Parvez</h3>
                                <h4 className='mb-5 font-Montserrat font-medium text-[18px] text-Main_Tx leading-5 opacity-90'>Frontend Developer <span className='ml-3 inline-block h-[1px] w-[45px] bg-[#b7b7b7] relative top-[-4px] left-[]10px'></span></h4>
                                <p className='font-Montserrat font-normal text-[16px] text-Main_Tx leading-[30px] tracking-wider'>I'm a frontend developer specializing in ReactJS. I make cool and user-friendly websites. With a keen eye for detail and a knack for turning innovative ideas into reality, I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS, allowing me to seamlessly blend creativity with functionality.</p>
                                <ul className='mt-[30px] mb-[40px] sm:flex sm:flex-wrap'>
                                    <li className='sm:w-1/2 w-full py-3 px-[5px]'><a className='flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90' href="#"><LuMapPin className='w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]' />Equria, South Keranigonj</a></li>
                                    <li className='sm:w-1/2 w-full py-3 px-[5px]'><a className='flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90' href="tel:+880 969-6365626"><LuPhoneCall className='w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]' />+880 9696-365626</a></li>
                                    <li className='sm:w-1/2 w-full py-3 px-[5px]'><a className='flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90' href="mailto:parvez.rzk.bd@gmail.com"><BsEnvelopeAt className='w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]' />parvez.rzk.bd@gmail.com</a></li>
                                    <li className='sm:w-1/2 w-full py-3 px-[5px]'><a className='flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90' href="www.portfolio-pz.netlify.app/"><BsGlobe2 className='w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]' />www.portfolio-pz.netlify.app/</a></li>
                                </ul>
                                <ul className='flex justify-start'>
                                    <li><button className='py-4 px-8 bg-Main hover:bg-Main_Hv font-Montserrat font-medium uppercase text-[16px] text-white duration-500 flex items-center relative mb-[7px] mr-[7px] border-solid border-[1px] border-Main z-10 before:absolute before:content[""] before:w-full before:h-full before:border-solid before:border-[1px] before:border-Main hover:before:border-Main_Hv before:top-[7px] hover:before:top-[0px] before:left-[7px] hover:before:left-[0px] before:z-0 before:duration-500 '>Download CV <HiArrowLongRight className='ml-2 text-[20px]' /></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap xl:gap-[16.5px] lg:gap-[33px] md:gap-[29px] sm:gap-6">
                        <AboutReusable iconLink={<SlLayers/>} number="07" text="Projects done"/>
                        <AboutReusable iconLink={<PiUsers/>} number="15" text="Happy Customers"/>
                        <AboutReusable iconLink={<LuClock3/>} number="759" text="Working Hours"/>
                        <AboutReusable iconLink={<GoTrophy/>} number="04" text="Awards winning"/>
                    </div>
                </MarginX>
            </Container>
        </MarginL>
    </div>
  )
}

export default About