import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import PortfolioReusable from './reusable/PortfolioReusable';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Portfolio = () => {
    let settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  dots: false,
                }
            },
        ]
    };
    
  return (
    <div id='portfolio'>
        <MarginL>
            <Container>
                <MarginX className="pt-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'><span className='relative z-0 before:absolute before:content[""] xl:before:bottom-[8px] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full xl:before:h-[10px] lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Portfolio</span></h2>
                    </div>
                    <div className="portfolio mt-20">
                        <Tabs>
                            <TabList >
                                <Tab >All</Tab>
                                <Tab >ReactJS</Tab>
                                <Tab >Bootstrap</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="flex flex-wrap justify-center xl:gap-4 gap-2">
                                    <PortfolioReusable imageLink="https://i.postimg.cc/5Nh1VJH9/bwfc-rt-b-bwfc-rt-b-netlify-app.png" projectLink="https://bwfc-rt-b.netlify.app/"/>
                                    <div className="portfolio xl:w-[32.4%] lg:w-[32.7%] sm:w-[49%] w-[48%] relative">
                                        <Slider {...settings}>
                                            <div className="w-full group relative">
                                                <div className="">
                                                    <img className='w-full rounded-3xl' src="https://i.postimg.cc/6Q9PJ6Xv/Agency-rt-b-agency-rt-b-netlify-app-png-01.png" alt="" />
                                                </div>
                                                <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
                                                    <div className="flex items-center justify-center h-full rotate-[-90deg]">
                                                        <a className='font-Montserrat font-bold text-[16px] uppercase text-[#292929] opacity-0 group-hover:opacity-100' href="https://agency-rt-b.netlify.app/" target='blank'>Project_Link</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full group relative">
                                                <div className="">
                                                    <img className='w-full rounded-3xl' src="https://i.postimg.cc/FRGpy0dW/Agency-rt-b-agency-rt-b-netlify-app-png-02.png" alt="" />
                                                </div>
                                                <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
                                                    <div className="flex items-center justify-center h-full rotate-[-90deg]">
                                                        <a className='font-Montserrat font-bold text-[16px] uppercase text-[#292929] opacity-0 group-hover:opacity-100' href="https://agency-rt-b.netlify.app/" target='blank'>Project_Link</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full group relative">
                                                <div className="">
                                                    <img className='w-full rounded-3xl' src="https://i.postimg.cc/HWy9zJck/Agency-rt-b-agency-rt-b-netlify-app-png-03.png" alt="" />
                                                </div>
                                                <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
                                                    <div className="flex items-center justify-center h-full rotate-[-90deg]">
                                                        <a className='font-Montserrat font-bold text-[16px] uppercase text-[#292929] opacity-0 group-hover:opacity-100' href="https://agency-rt-b.netlify.app/" target='blank'>Project_Link</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                        <div className="absolute top-[20px] right-[10px]">
                                            <img className='w-[56px]' src="https://i.postimg.cc/TYsdCmJ4/photo-2.png" alt="" />
                                        </div>
                                    </div>
                                    <PortfolioReusable imageLink="https://i.postimg.cc/Bb8T2HB0/Petrol-rt-t-petrol-rt-tw-netlify-app.png" projectLink="https://petrol-rt-tw.netlify.app/"/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-wrap justify-center lg:gap-4 gap-2">
                                    <PortfolioReusable imageLink="https://i.postimg.cc/brhtgfvN/Qwery-rt-qwery-rt-b-netlify-app.png" projectLink="https://qwery-rt-b.netlify.app/"/>
                                    <PortfolioReusable imageLink="https://i.postimg.cc/5Nh1VJH9/bwfc-rt-b-bwfc-rt-b-netlify-app.png" projectLink="https://bwfc-rt-b.netlify.app/"/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-wrap justify-center lg:gap-4 gap-2">
                                    <PortfolioReusable imageLink="https://i.postimg.cc/Bb8T2HB0/Petrol-rt-t-petrol-rt-tw-netlify-app.png" projectLink="https://petrol-rt-tw.netlify.app/"/>
                                    <PortfolioReusable imageLink="https://i.postimg.cc/5Nh1VJH9/bwfc-rt-b-bwfc-rt-b-netlify-app.png" projectLink="https://bwfc-rt-b.netlify.app/"/>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </MarginX>
            </Container>
        </MarginL>
    </div>
  )
}

export default Portfolio