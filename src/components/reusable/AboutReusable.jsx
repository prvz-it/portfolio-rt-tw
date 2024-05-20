import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const AboutReusable = ({ iconLink, number, text }) => {
  let [condition, setCondition] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 1095) {
        setCondition(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="xl:w-[23.9%] sm:w-[48%] w-full sm:mb-0 mb-4 xl:text-start text-center border-[1px] border-solid border-[#eaeaea] p-8 rounded-[15px] hover:shadow-SDW_2 duration-500">
        <div className="mb-[10px] flex xl:justify-start justify-center items-center">
          <div className="text-[32px]">{iconLink}</div>
        </div>
        <CountUp start={0} end={`${condition ? number : 0}`} duration={5}
          className="font-Montserrat font-semibold text-[36px] text-Main_Tx opacity-95"
        >
        </CountUp>
        <p className="font-Montserrat font-semibold text-[15px] leading-7 uppercase text-Main_Tx opacity-90">{text}</p>
      </div>
    </>
  );
};

export default AboutReusable;
