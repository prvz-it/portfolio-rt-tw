import React from 'react';

const ServicesReusable = ({iconLink, heading, text, buttonText}) => {
  return (
    <>
      <div className="w-full h-[460px]">
        <div className="py-8 px-7 border-[1px] border-solid border-[#eaeaea] rounded-[12px] text-center group hover:shadow-SDW_2 duration-500">
          <div className="w-16 h-14 mx-auto p-3 relative before:absolute before:content[''] before:top-0 before:left-0 before:w-[50%] before:h-[100%] before:rounded-s-[5px] before:bg-[#f4f4f4] before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:rounded-e-[5px]">
            <a href="#">
              <img className="w-[40px]" src={iconLink} alt="" />
            </a>
          </div>
          <div className="mt-8 mb-10 text-center">
            <h3 className="mb-5 font-Montserrat font-bold text-[17px] opacity-90 text-Main_Tx uppercase">
              {heading}
            </h3>
            <p className="font-Montserrat font-normal capitalize text-[16px] leading-7 text-Main_Tx opacity-90">
              {text}
            </p>
          </div>
          <div className="">
            <button className='py-3 px-5 font-Montserrat font-semibold text-[16px] text-Main_Tx duration-500 relative before:absolute before:content[""] before:top-0 before:left-0 before:w-[30%] before:h-[100%] before:rounded-s-[5px] before:bg-[#f4f4f4] before:duration-500 before:-z-10 hover:before:w-full hover:before:rounded-e-[5px]'>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesReusable