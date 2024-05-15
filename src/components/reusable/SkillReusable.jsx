import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillReusable = ({imageLink, number, text}) => {
  return (
    <>
        <div className="xl:w-[276px] xl:h-[272px] lg:w-[23.5%] lg:h-[198px] md:w-[23.3%] md:h-[170px] sm:w-[23%] sm:h-[144px] max-[450px]:w-[47.5%] max-[450px]:h-[175px] max-[399px]:h-[160px]">
            <div className="relative">
                <CircularProgressbar value={75} className='text-Main_Tx absolute top-0 left-0 bg-[#ffffffe1] rounded-full z-10' />
                <div className="absolute top-0 left-0 z-0">
                    <img src={imageLink} alt="Skill Image 01" className='xl:h-[276px] lg:h-[200px] md:h-[169px] sm:h-[142px] max-[450px]:h-[177px] max-[399px]:h-[158px] rounded-full' />
                </div>
                <div className="absolute top-0 left-0 w-full h-[100px] text-center xl:my-[80px] lg:my-[42px] md:my-[36px] sm:my-[21px] my-[36px] max-[400px]:my-[30px] z-20">
                    <h2 className='font-Montserrat font-bold xl:text-[48px] lg:text-[48px] md:text-[36px] sm:text-[32px] text-[36px] text-Main_Tx mb-1'>{number}<span className='font-normal text-[24px]'>%</span></h2>
                    <h3 className='font-Montserrat font-normal text-[18px] leading-[28px] uppercase text-Main_Tx'>{text}</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillReusable