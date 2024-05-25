import React from "react";

const ResumeCenReusable = ({ numberTx, headerTx, text }) => {
  return (
    <>
      <div className="xl:w-[340px] py-12 relative after:content[''] after:absolute md:after:top-[240px] sm:after:top-[232px] after:top-[216px] max-[350px]:after:top-[240px] after:left-[50%] after:h-[48px] after:border-[1px] after:border-dashed after:border-[#989898] before:content[''] before:absolute before:top-[0px] before:left-[50%] before:h-[48px] before:border-[1px] before:border-dashed before:z-50 before:border-[#989898]">
        <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border-[1px] border-solid border-[#eaeaea] rounded-xl">
          <h4 className="font-Montserrat font-medium text-[16px] text-[#908e9b]">{numberTx}</h4>
          <h3 className="mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx">{headerTx}</h3>
          <p className="font-Montserrat font-normal text-[16px] text-[#908e9b]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ResumeCenReusable;
