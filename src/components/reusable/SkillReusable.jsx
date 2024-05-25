import React from "react";

import SkillProgressProvider from "../SkillProgressProvider";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillReusable = ({ imageLink, number, text }) => {
  return (
    <>
      <div className="xl:w-[276px] xl:h-[272px] lg:w-[23.5%] lg:h-[198px] md:w-[23.3%] md:h-[170px] sm:w-[23%] sm:h-[144px] max-[450px]:w-[47.5%] max-[350px]:w-[47%] max-[450px]:h-[175px] max-[399px]:h-[160px] max-[350px]:h-[130px]">
        <div className="relative">
          <SkillProgressProvider values={[1, number]}>
            {(percentage) => (
              <CircularProgressbar value={percentage} text={`${number}%`}
                styles={buildStyles({
                    
                })}
                className="text-Main_Tx absolute top-0 left-0 bg-[#ffffffe1] rounded-full z-10"
              />
            )}
          </SkillProgressProvider>
          <div className="absolute top-0 left-0 z-0">
            <img src={imageLink} alt="Skill Image 01"
              className="xl:h-[276px] lg:h-[200px] md:h-[169px] sm:h-[142px] max-[450px]:h-[177px] max-[399px]:h-[158px] max-[350px]:h-[130px] rounded-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-[100px] text-center xl:mt-[172px] lg:mt-[120px] md:mt-[100px] sm:mt-[80px] mt-[105px] max-[400px]:mt-[92px] max-[350px]:mt-[75px] z-20">
            <h3 className="font-Montserrat font-normal text-[20px] max-[350px]:text-[16px] leading-[28px] uppercase text-Main_Tx">{text}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillReusable;
