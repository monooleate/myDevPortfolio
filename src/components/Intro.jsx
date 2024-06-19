
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { lineParticles, introBackgroundConfig, appliedConfig, IntroSecDetails } from "../config/dataConfig";
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
        <section id='section-intro' className='bg-uni-fill h-[60vh] min-h-[400px] xl:min-w-[400px] xl:w-[20vh] xl:max-w-[500px] xl:min-h-[400px] xl:h-[80vh] xl:max-h-[600px] xl:float-left'>
            <div id='hero-wrap' className="relative w-full h-full">
                {appliedConfig.appliedIntro === introBackgroundConfig.particles &&
                init && ( appliedConfig.particlesOn ?
                    <Particles
                    id='tsparticles'
                    className='absolute w-full h-full z-0'
                    options={options}
                    />
                    :
                    <div className='absolute w-full h-full bg-uni-bg z-0'>
                    </div>
                )}

                <div id='hero-content' className="relative z-10 h-full">
                    <div className="flex flex-col h-full justify-center content-center ">
                        <p className='text-uni-textIntro font-bold text-4xl'>
                            {IntroSecDetails.heading1}
                        </p>
                        <h2 className="text-uni-textIntro font-bold mb-2 text-3xl xl:text-4xl py-10">
                            <Typewriter
                            options={{
                                strings: IntroSecDetails.typeWritterHeadings,
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h2>
                        <p className="text-2xl text-uni-textIntro">
                            {IntroSecDetails.heading2}
                        </p>
                        <div className="flex gap-5 mx-auto">
                            <a
                                href={'#first'}
                                download
                                className="text-uni-textIntro bg-uni-palette rounded-md mt-7 w-40 py-1 mx-auto"
                                >
                                {IntroSecDetails.btnText}
                            </a>
                            <div className="flex items-center justify-center">
                                <button
                                type="button"
                                onClick={openModal}
                                className="rounded-md text-uni-textIntro mt-7 px-4 py-2 text-sm font-medium  hover:bg-uni-palette focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                >
                                Certificates
                                </button>
                            </div>
                        </div>
                        <a
                            href='#second'
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