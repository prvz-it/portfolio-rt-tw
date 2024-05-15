import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import BlogsReusable from './reusable/BlogsReusable';

const Blogs = () => {
  return (
    <div id='blog'>
        <MarginL>
            <Container>
                <MarginX className="pt-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'><span className='relative z-0 before:absolute before:content[""] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Blogs</span> Post</h2>
                    </div>
                    <div className="mt-10">
                        <BlogsReusable image="https://i.postimg.cc/rsW8G6CP/coding-924920-1920.jpg" date="15 MAY, 2024 - IT_TECH" hadingTx="New resources on the gender gap in computer science" para="My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS, allowing me to seamlessly blend creativity with functionality."/>
                        <BlogsReusable image="https://i.postimg.cc/wBDxXSXP/digital-marketing.jpg" date="12 MAY, 2024 - TECHNOLOGY" hadingTx="New resources on the gender gap in computer science" para="My journey in the realm of Frontend Development has equipped me with a deep understanding of ReactJS, allowing me to seamlessly blend creativity with functionality."/>
                    </div>
                </MarginX>
            </Container>
        </MarginL>
    </div>
  )
}

export default Blogs