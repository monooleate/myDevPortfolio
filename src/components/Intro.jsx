
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { lineParticles, introBackgroundConfig, appliedConfig, } from "../config/dataConfig";
import { introSecDetails } from "../config/personalConfig"
import { loadFull } from "tsparticles";

function Intro({ openModal }){
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
        <section id='section-intro' className='rounded-xl bg-uni-fill h-[60vh] min-h-[400px] xl:min-w-[400px] xl:w-[20vh] xl:max-w-[500px] xl:min-h-[400px] xl:h-[80vh] xl:max-h-[600px] xl:float-left '>
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
                    <div className="flex flex-col h-full justify-center content-center ">
                        <h1 className='text-uni-textIntro font-bold text-4xl'>
                            {introSecDetails.heading1}
                        </h1>
                        <h2 className="text-uni-textIntro font-bold mb-2 text-3xl xl:text-4xl py-10">
                            <Typewriter
                            options={{
                                strings: introSecDetails.typeWritterHeadings,
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h2>
                        <p className="text-2xl text-uni-textIntro">
                            {introSecDetails.heading2}
                        </p>
                        <div className="flex gap-8 mx-auto">
                            <a
                                /* href='' */
                                className="flex justify-center items-center gap-2 text-uni-textIntro bg-uni-palette rounded-md mt-7 w-36 mx-auto"
                                >
                                {introSecDetails.btnText}
                                <svg className='w-6 h-6 cursor-pointer'>
                                    <FontAwesomeIcon icon={faFileArrowDown} />
                                </svg>
                            </a>

                            <div className="flex items-center justify-center">
                                <a
                                
                                onClick={openModal}
                                className="flex justify-center gap-2 rounded-md text-uni-textIntro bg-uni-palette mt-7 px-4 py-2 w-36 cursor-pointer hover:bg-uni-palette focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                >
                                Certificates
                                <svg className='w-6 h-6 cursor-pointer'>
                                    <FontAwesomeIcon icon={faCertificate} />
                                </svg>
                                </a>
                            </div>
                        </div>
                        <a
                            href='#aboutme'
                            className='relative text-uni-palette mx-auto top-8 xl:hidden'
                            >
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

export default Intro