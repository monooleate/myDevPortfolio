import { useEffect, useState, useMemo, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { lineParticles, introBackgroundConfig, appliedConfig } from "../config/dataConfig";
import { introSecDetails } from "../config/personalConfig"
import { loadFull } from "tsparticles";
import { FormattedMessage } from 'react-intl';
import { Context } from "./LanguageWrapper";

export default function Intro({ openModal }) {
    const [init, setInit] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);

    const options = useMemo(() => (lineParticles), []);

    const typewriterStrings = context.locale.includes('hu')
        ? introSecDetails.typeWritterHeadingsHun
        : introSecDetails.typeWritterHeadingsEng;

    return (
        <section id='section-intro' className='rounded-2xl bg-uni-fill overflow-hidden h-[95vh] min-h-[400px]
        md:h-[97vh]
        xl:min-w-[400px] xl:w-[20vh] xl:max-w-[500px] xl:min-h-[400px] xl:h-[80vh] xl:max-h-[600px] xl:float-left'>
            <div id='hero-wrap' className="relative w-full h-full">
                {appliedConfig.appliedIntro === introBackgroundConfig.particles &&
                init && (appliedConfig.particlesOn ?
                    <Particles
                        id='tsparticles'
                        className='absolute w-full h-full'
                        options={options}
                    />
                    :
                    <div className='absolute w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' />
                )}

                <div id='hero-content' className="relative h-full">
                    <div className="flex flex-col h-full justify-center items-center px-6">
                        {/* Decorative gradient orb */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                        {/* Profile Photo */}
                        <div className="relative mb-6 xl:mb-4">
                            <img
                                src="/profile.webp"
                                alt="János Mészáros"
                                className="w-36 h-36 rounded-full object-cover object-top shadow-xl shadow-blue-500/25 ring-4 ring-blue-500/30"
                            />
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse" />
                        </div>

                        <h1 className="text-uni-textIntro font-bold text-3xl sm:text-4xl tracking-tight">
                            {introSecDetails.heading1}
                        </h1>

                        <h2 className="text-uni-palette mt-2 pb-4 text-xl xl:text-2xl xl:pb-2 font-medium">
                            <Typewriter
                                key={context.locale}
                                options={{
                                    strings: typewriterStrings,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>

                        <p className="text-uni-textIntro/60 text-sm mb-6 max-w-xs text-center">
                            {introSecDetails.heading2}
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center mx-auto pb-4">
                            <a
                                href="/Janos_Meszaros_Resume_27_09_2024_Software.pdf"
                                download
                                className="btn-primary cursor-pointer text-sm"
                            >
                                <FormattedMessage id="introBtnText1" defaultMessage="Download CV" />
                                <FontAwesomeIcon icon={faFileArrowDown} />
                            </a>

                            <button
                                onClick={openModal}
                                className="btn-secondary cursor-pointer text-sm"
                            >
                                <FormattedMessage id="introBtnText2" defaultMessage="Certificates" />
                                <FontAwesomeIcon icon={faCertificate} />
                            </button>

                            <a
                                href="https://github.com/monooleate"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary cursor-pointer text-sm"
                                aria-label="GitHub"
                            >
                                GitHub
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>

                        <a href='#aboutme' className='pb-6 text-uni-palette mx-auto xl:hidden' aria-label="Scroll down">
                            <FontAwesomeIcon icon={faChevronDown} className="animate-bounce w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
