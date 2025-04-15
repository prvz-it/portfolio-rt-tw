import React from 'react';
import MarginL from '../layer/MarginL';
import Container from '../layer/Container';
import MarginX from '../layer/MarginX';

import SkillReusable from '../reusable/SkillReusable';

const Skill = () => {
  return (
    <>
        <MarginL>
            <Container>
                <MarginX className="pb-24">
                    <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-[0px] before:w-full before:h-[1px] before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-[0px] after:w-[60px] after:h-[1px] after:bg-Main after:z-10 ">
                        <h2 className='pr-[18px] bg-white inline-block font-playFair font-bold xl:text-[66px] lg:text-[60px] text-[36px] text-Main_Tx duration-500'>My <span className='relative z-0 before:absolute before:content[""] lg:before:bottom-[8px] before:bottom-[4px] before:left-[0px] before:w-full lg:before:h-[10px] before:h-[6px] before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Skill</span></h2>
                    </div>
                    <div className="mt-20 flex flex-wrap gap-4">
                        <SkillReusable imageLink="https://i.postimg.cc/D03MDFhx/skill-1.jpg" number="75" text="Development"/>
                        <SkillReusable imageLink="https://i.postimg.cc/yNXg9ydW/skill-2.png" number="69" text="JavaScript"/>
                        <SkillReusable imageLink="https://i.postimg.cc/QMx9QWWb/skill-3.webp" number="82" text="React JS"/>
                        <SkillReusable imageLink="https://i.postimg.cc/c4bbyQdK/skill-4.png" number="78" text="Tailwindcss"/>
                    </div>
                </MarginX>
            </Container>
        </MarginL>
    </>
  )
}

export default Skill