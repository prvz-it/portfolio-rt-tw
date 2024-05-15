import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import { HiArrowLongRight } from "react-icons/hi2";

import { LuMapPin, LuPhoneCall } from "react-icons/lu";
import { BsEnvelopeAt, BsGlobe2 } from "react-icons/bs";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ContactReusable from './reusable/ContactReusable';


const Contact = () => {
  return (
    <div id="contact">
        <MarginL>
            <Container>
                <MarginX className="pt-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'><span className='relative z-0 before:absolute before:content[""] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Contact</span> Me</h2>
                    </div>
                    <div className="my-20 sm:flex">
                        <div className="sm:w-1/2 w-full lg:mr-8 md:mr-6 sm:mr-4">
                            <div className="mb-14">
                                <div className="pb-[6px] border-b-[1px] border-solid border-[#eaeaea]">
                                    <input type="text" placeholder='Full name' className='w-full font-Montserrat font-medium capitalize text-[17px] text-Main_Tx' />
                                </div>
                            </div>
                            <div className="mb-14">
                                <div className="pb-[6px] border-b-[1px] border-solid border-[#eaeaea]">
                                    <input type="email" className='w-full font-Montserrat font-medium capitalize text-[17px] text-Main_Tx' placeholder='Email Address' />
                                </div>
                            </div>
                            <div className="mb-14">
                                <div className="pb-[6px] border-b-[1px] border-solid border-[#eaeaea]">
                                    <input type="text" className='w-full font-Montserrat font-medium capitalize text-[17px] text-Main_Tx' placeholder='Your Subject' />
                                </div>
                            </div>
                            <div className="mb-16">
                                <div className="pb-[6px] border-b-[1px] border-solid border-[#eaeaea]">
                                    <input type="text" className='w-full pb-[100px] font-Montserrat font-medium capitalize text-[17px] text-Main_Tx' placeholder='Your Massage' />
                                </div>
                            </div>
                            <ul className='flex justify-start'>
                                <li><button className='py-4 px-8 bg-Main hover:bg-Main_Hv font-Montserrat font-semibold uppercase text-[16px] text-white duration-500 flex items-center relative mb-[7px] mr-[7px] border-solid border-[1px] border-Main z-10 before:absolute before:content[""] before:w-full before:h-full before:border-solid before:border-[1px] before:border-Main hover:before:border-Main_Hv before:top-[7px] hover:before:top-[0px] before:left-[7px] hover:before:left-[0px] before:z-0 before:duration-500 '>Submit Now <HiArrowLongRight className='ml-2 font-semibold text-[20px]' /></button></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 w-full lg:ml-8 md:ml-6 sm:ml-4">
                            <ul className='xl:my-10 my-0 md:flex md:flex-wrap xl:gap-6 lg:gap-4 md:gap-6 sm:gap-4'>
                                <ContactReusable iconLink={<LuMapPin/>} title="My Location" prg="Equria, South Keranigonj"/>
                                <ContactReusable iconLink={<BsEnvelopeAt/>} link="mailto:parvez.rzk.bd@gmail.com" title="Email Address" prg="parvez.rzk.bd@gmail.com"/>
                                <ContactReusable iconLink={<LuPhoneCall/>} link="tel:+8809696365626" title="Phone Number" prg="+880 9696-365626"/>
                                <ContactReusable iconLink={<BsGlobe2/>} link="www.portfolio-pz.netlify.app/" title="Website" prg="www.portfolio-pz.netlify.app/"/>
                            </ul>
                        </div>
                    </div>
                </MarginX>
                <div className="py-6 bg-[#222]">
                    <MarginX>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div className="lg:w-2/5 sm:w-3/5 w-full">
                                <div className="sm:flex sm:justify-start sm:items-center flex justify-center">
                                    <p className='font-Montserrat font-medium text-base text-[#fff] capitalize tracking-wide opacity-90'>Copyright @ 2024, <span>All right reserved</span></p> 
                                </div>
                            </div>
                            <div className="sm:w-1/5 w-full sm:mt-0 mt-4 ">
                                <ul className='sm:flex sm:justify-end flex justify-center'>
                                    <li className='ml-6'><a href="#"><FaTwitter className='text-[18px] text-[#fff] opacity-90' /></a></li>
                                    <li className='ml-6'><a href="#"><FaFacebookF className='text-[18px] text-[#fff] opacity-90' /></a></li>
                                    <li className='ml-6'><a href="#"><FaLinkedinIn className='text-[18px] text-[#fff] opacity-90' /></a></li>
                                    <li className='ml-6'><a href="#"><FaYoutube className='text-[18px] text-[#fff] opacity-90' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </MarginX>
                </div>
            </Container>
        </MarginL>
    </div>
  )
}

export default Contact