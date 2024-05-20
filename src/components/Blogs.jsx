import React from 'react';
import MarginL from './MarginL';
import Container from './Container';
import MarginX from './MarginX';

import HeaderReusable from './reusable/HeaderReusable';
import BlogsReusable from './reusable/BlogsReusable';

const Blogs = () => {
  return (
    <div id="blog">
        <MarginL>
            <Container>
                <MarginX className="pb-24">
                    <HeaderReusable spanTx="Blogs" h2_Tx="Post"/>
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