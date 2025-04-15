import React from "react";

const PortfolioReusable = ({ imageLink, projectLink }) => {
  return (
    <>
      <div className="xl:w-[32.4%] lg:w-[32.7%] sm:w-[49%] w-[48%] group relative">
        <div className="">
          <img className="w-full rounded-3xl" src={imageLink} alt="" />
        </div>
        <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
          <div className="flex items-center justify-center h-full rotate-[-90deg]">
            <a className="font-Montserrat font-bold text-[16px] uppercase text-[#292929] opacity-0 group-hover:opacity-100"
               href={projectLink} target="blank">
                Project_Link
            </a>
          </div>
        </div>
        <div className="absolute top-[20px] right-[10px]">
          <img className="w-[56px]" src="https://i.postimg.cc/TYsdCmJ4/photo-2.png" alt=""/>
        </div>
      </div>
    </>
  );
};

export default PortfolioReusable;
