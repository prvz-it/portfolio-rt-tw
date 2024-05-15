import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import ServicesReusable from './reusable/ServicesReusable';

const Services = () => {
    let settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                initialSlide: 2,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
  return (
    <div id='services'>
        <MarginL>
            <Container>
                <MarginX className="pt-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'><span className='relative z-0 before:absolute before:content[""] xl:before:bottom-[8px] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full xl:before:h-[10px] lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Services</span></h2>
                    </div>
                    <div className="service mt-20">
                      <Slider {...settings}>
                        <ServicesReusable iconLink="https://i.postimg.cc/JnWTfW03/coding.png" heading="Web Development" text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS." buttonText="Read More"/>
                        <ServicesReusable iconLink="https://i.postimg.cc/qqy5tMF5/computer.png" heading="Web Design" text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS." buttonText="Read More"/>
                        <ServicesReusable iconLink="https://i.postimg.cc/FFZgDS4H/online-graph.png" heading="SEO Service" text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS." buttonText="Read More"/>
                        <ServicesReusable iconLink="https://i.postimg.cc/tCzPNZLN/graphic-design.png" heading="Graphics Design" text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS." buttonText="Read More"/>
                        <ServicesReusable iconLink="https://i.postimg.cc/QtTBvHVC/content-creator.png" heading="Content Writing" text="I bring a wealth of expertise in creating dynamic and responsive web applications. My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS." buttonText="Read More"/>
                      </Slider>
                    </div>
                </MarginX>
            </Container>
        </MarginL>
    </div>
  )
}

export default Services