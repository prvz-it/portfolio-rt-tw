import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import { FaRegUser } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";

const Resume = () => {
  return (
    <div id='resume'>
        <MarginL>
            <Container>
                <MarginX className="pt-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'><span className='relative z-0 before:absolute before:content[""] xl:before:bottom-[8px] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full xl:before:h-[10px] lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Resume</span></h2>
                    </div>
                </MarginX>
                <div className="mx-12">
                    <div className="xl:mt-20 mt-32 xl:w-[68%] w-full mx-auto">
                        <div className="md:flex items-center relative">
                            <div className="xl:w-[49.9%] md:border-r-[1.5px] border-solid border-[#eaeaea] opacity-100">
                                <div className="lg:mr-12 md:mr-3 mr-0">
                                    <div className="xl:w-[340px] relative after:content[''] after:absolute after:bottom-[-48px] after:left-[50%] after:h-[48px] after:border-[1px] after:border-dashed after:border-[#989898]">
                                        <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
                                            <h4 className='font-Montserrat font-medium text-[16px] text-[#908e9b]'>2021 - 2022</h4>
                                            <h3 className='mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx'>JavaScript Developer</h3>
                                            <p className='font-Montserrat font-normal text-[16px] text-[#908e9b]'>I learned JavaScript from Creative It Institute yet again. It required many hours of hard work.</p>
                                        </div>
                                    </div>
                                    <div className="xl:w-[340px] py-12 relative after:content[''] after:absolute after:top-[50%] after:left-[-46px] xl:after:w-[46px] after:border-[1px] after:border-dashed xl:after:border-[#989898] after:border-transparent">
                                        <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
                                            <h4 className='font-Montserrat font-medium text-[16px] text-[#908e9b]'>2022 - 2024</h4>
                                            <h3 className='mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx'>ReactJS Developer</h3>
                                            <p className='font-Montserrat font-normal text-[16px] text-[#908e9b]'>I entered the Creative It Institute this time to learn React JS. It required a great deal of effort.</p>
                                        </div>
                                    </div>
                                    <div className="xl:w-[340px] relative after:content[''] after:absolute after:top-[-48px] after:left-[50%] after:h-[48px] after:border-[1px] after:border-dashed after:border-[#989898]">
                                        <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
                                            <h4 className='font-Montserrat font-medium text-[16px] text-[#908e9b]'>2023 - 2024</h4>
                                            <h3 className='mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx'>Frontend Developer</h3>
                                            <p className='font-Montserrat font-normal text-[16px] text-[#908e9b]'>Again, the Creative It Institute taught me frontend. There was a lot of work to be done.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute xl:top-[43%] md:top-[-16%] top-[-7.5%] xl:left-[-23.5%] md:left-[14%] sm:left-[38%] left-[27%]">
                                <div className="p-4 text-center border-[1px] border-solid border-[#eaeaea] rounded-xl opacity-100">
                                    <div className="mx-10">
                                        <FaRegUser className='text-[24px]'/>
                                    </div>
                                    <h3 className='mt-3 font-Montserrat font-semibold text-[14px] uppercase text-Main_Tx'>Education</h3>
                                </div>
                            </div>
                            <div className="xl:w-[49.9%] lg:ml-12 md:ml-3 md:mt-0 mt-[160px]">
                                <div className="xl:w-[340px] relative after:content[''] after:absolute after:bottom-[-48px] after:left-[50%] after:h-[48px] after:border-[1px] after:border-dashed after:border-[#989898]">
                                    <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
                                        <h4 className='font-Montserrat font-medium text-[16px] text-[#908e9b]'>2023 - 2024</h4>
                                        <h3 className='mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx'>Junior Developer</h3>
                                        <p className='font-Montserrat font-normal text-[16px] text-[#908e9b]'>I performed well at work. They were equal to me since I executed their work perfectly.</p>
                                    </div>
                                </div>
                                <div className="xl:w-[340px] py-12 relative after:content[''] after:absolute after:top-[50%] after:right-[-46px] xl:after:w-[46px] after:border-[1px] after:border-dashed xl:after:border-[#989898] after:border-transparent">
                                    <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
                                        <h4 className='font-Montserrat font-medium text-[16px] text-[#908e9b]'>2023 - 2024</h4>
                                        <h3 className='mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx'>Junior-Ex Developer</h3>
                                        <p className='font-Montserrat font-normal text-[16px] text-[#908e9b]'>I performed well at work. They were equal to me since I executed their work perfectly.</p>
                                    </div>
                                </div>
                                <div className="xl:w-[340px] relative after:content[''] after:absolute after:top-[-48px] after:left-[50%] after:h-[48px] after:border-[1px] after:border-dashed after:border-[#989898]">
                                    <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
                                        <h4 className='font-Montserrat font-medium text-[16px] text-[#908e9b]'>2024 - Current</h4>
                                        <h3 className='mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx'>Ex.s Developer</h3>
                                        <p className='font-Montserrat font-normal text-[16px] text-[#908e9b]'>I performed well at work. They were equal to me since I executed their work perfectly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute xl:top-[43%] md:top-[-16%] sm:top-[48%] top-[48.2%] xl:right-[-23.5%] md:right-[13%] sm:right-[37%] right-[27%]">
                                <div className="p-4 text-center border-[1px] border-solid border-[#eaeaea] rounded-xl opacity-100">
                                    <div className="mx-10">
                                        <GoBriefcase className='text-[24px]'/>
                                    </div>
                                    <h3 className='mt-3 font-Montserrat font-semibold text-[14px] uppercase text-Main_Tx'>Experiment</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </MarginL>
    </div>
  )
}

export default Resume