import React from 'react';

const AboutReusable = ({iconLink, number, text}) => {
  return (
    <>
        <div className="xl:w-[23.9%] sm:w-[48%] w-full sm:mb-0 mb-4 xl:text-start text-center border-[1px] border-solid border-[#eaeaea] p-8 rounded-[15px] hover:shadow-SDW_2 duration-500">
            <div className="mb-[10px] flex xl:justify-start justify-center items-center">
                <div className="text-[32px]">
                    {iconLink}
                </div>
            </div>
            <h5 className='my-2 font-Montserrat font-semibold text-[32px] text-Main_Tx opacity-95'>{number}</h5>
            <p className='font-Montserrat font-semibold text-[15px] leading-7 uppercase text-Main_Tx opacity-90'>{text}</p>
        </div>
    </>
  )
}

export default AboutReusable