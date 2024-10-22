
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown, faCertificate, faUser } from '@fortawesome/free-solid-svg-icons';
import { lineParticles, introBackgroundConfig, appliedConfig, } from "../config/dataConfig";
import { introSecDetails } from "../config/personalConfig"
import { loadFull } from "tsparticles";

export default function Intro({ openModal }){
    const [init, setInit] = useState(false);
    
    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);


    const options = useMemo(
        () => (lineParticles),
        [],
      );
    
    return(
        <section id='section-intro' className='rounded-xl bg-uni-fill h-[95vh] min-h-[400px]
        md:h-[97vh]
        xl:min-w-[400px] xl:w-[20vh] xl:max-w-[500px] xl:min-h-[400px] xl:h-[80vh] xl:max-h-[600px] xl:float-left '>
            <div id='hero-wrap' className="relative w-full h-full">
                {appliedConfig.appliedIntro === introBackgroundConfig.particles &&
                init && ( appliedConfig.particlesOn ?
                    <Particles
                    id='tsparticles'
                    className='absolute w-full h-full '
                    options={options}
                    />
                    :
                    <div className='absolute w-full h-full bg-uni-bg'>
                    </div>
                )}

                <div id='hero-content' className="relative h-full">
                    <div className=" bg- flex flex-col h-full justify-center items-center ">
{/*                         <h1 className='text-uni-textIntro font-bold text-4xl'>
                            {introSecDetails.heading1}
                        </h1> */}
                        <figure className="object-contain py-3 pt-5 transition-all duration-300 cursor-pointer filter grayscale-0 xl:my-0 xl:pt-2">
                            {/* <img className="rounded-full object-contain mx-auto max-w-[70%] max-h-[80vh]" src="/profile.png" alt="Janos Meszaros"></img> */}
                            <svg className='rounded-full object-contain mx-auto max-w-[70%] max-h-[80vh] text-white'>
                                    <FontAwesomeIcon icon={faUser} />
                            </svg>
                        </figure>
                        <h1 className="text-uni-textIntro font-semibold text-3xl">{introSecDetails.heading1}</h1>
                        <h2 className="text-uni-palette pb-5 text-xl xl:text-2xl xl:pb-2">
                            <Typewriter
                            options={{
                                strings: introSecDetails.typeWritterHeadings,
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h2>
{/*                         <p className="text-2xl text-uni-textIntro">
                            {introSecDetails.heading2}
                        </p> */}
                        <div className="flex gap-8 mx-auto pb-4 text-uni-text">
                            <a
                                /* href='' */
                                className="flex justify-center items-center gap-2 bg-uni-palette rounded-md w-36 mx-auto"
                                >
                                {introSecDetails.btnText}
                                <svg className='w-6 h-6 cursor-pointer'>
                                    <FontAwesomeIcon icon={faFileArrowDown} />
                                </svg>
                            </a>

                            <div className="flex items-center justify-center">
                                <a
                                onClick={openModal}
                                className="text-uni-text flex justify-center gap-2 rounded-md bg-uni-palette px-4 py-2 w-36 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                >
                                Certificates
                                <svg className='w-6 h-6 cursor-pointer'>
                                    <FontAwesomeIcon icon={faCertificate} />
                                </svg>
                                </a>
                            </div>
                        </div>
                        <a href='#aboutme' className='pb-6 text-uni-palette mx-auto xl:hidden'>
                            <svg className='animate-bounce w-6 h-6 cursor-pointer'>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>

    )
}
