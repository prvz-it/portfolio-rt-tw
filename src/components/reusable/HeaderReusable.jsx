import React from "react";

const HeaderReusable = ({ spanTx, h2_Tx }) => {
  return (
    <>
      <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
        <h2 className="pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] max-[350px]:text-[28px] text-Main_Tx duration-500">
          <span className='relative z-0 before:absolute before:content[""] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>{spanTx}</span>{" "}
          {h2_Tx}
        </h2>
      </div>
    </>
  );
};

export default HeaderReusable;
