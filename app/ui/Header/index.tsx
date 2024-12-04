'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaReact,FaNode } from "react-icons/fa";

import { 
    animatedText,
    headerBackground,
    bouncingDiv,
    scrollFromLeft,
    scrollFromRight,
    scrollFromLeftHeading
    } from './constants';

const Header = () => {
    useEffect(() => {
        gsap.fromTo(`.${scrollFromLeftHeading}`,
            { x: -2000,
              opacity:0,
              duration:1,
              delay:1,
            },
            {  x:0,
               opacity:1,
               duration:1,
               });
        gsap.fromTo(`.${scrollFromLeft}`,
             { x: -2000,
               opacity:0,
               duration:1,
               delay:1,
               rotate: 60

             },
             {  x:0,
                opacity:1,
                duration:1,
                rotate:0
                });
        gsap.fromTo(`.${scrollFromRight}`,
            { x: 2000,
                opacity:0,
                duration:1,
                delay:1,
                rotate:-60
            },
            {   x:0,
                opacity:1,
                duration:1,
                rotate: 0
            });

        gsap.to(`.${bouncingDiv}`,{
            repeat:1,
            rotation: 360,
            duration:2,
            ease:'bounce'
        });
    }, []); 

    return (
        <section className={`${headerBackground} w-dvw h-dvh flex flex-col gap-4 items-center justify-center overflow-x-hidden`}>
            <div className={`${animatedText} flex flex-col gap-8 items-center font-extrabold text-5xl`}>
            
                <span className={` text-primary capitalize underline decoration-wavy underline-offset-[12px] ${scrollFromLeftHeading}`}>Full Stack Developer</span>
                <div className='flex gap-2 items-center text-secondary text-2xl'>
                    <span className={`${scrollFromLeft} flex gap-2 items-center`} >
                        React Js
                        <span className={bouncingDiv}>
                            <FaReact/>
                        </span>
                    </span> 
                    <span>+</span> 
                    <span className={`${scrollFromRight} flex gap-2 items-center`}>
                        Node Js
                        <span className={bouncingDiv}>
                            <FaNode/>
                        </span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Header;
