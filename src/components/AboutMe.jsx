import { useContext } from 'react';
import { yourName } from "../config/personalConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Context } from "./LanguageWrapper";

const AboutMe = () => {
    const context = useContext(Context);
    const isHu = context.locale.includes('hu');
    const displayName = isHu ? 'Mészáros János' : 'János Mészáros';
    const age = new Date().getFullYear() - 1988 - (new Date() < new Date(new Date().getFullYear(), 7, 15) ? 1 : 0);

    return (
        <section id="aboutme" className="text-uni-text bg-uni-odd section-padding xl:min-h-full xl:pt-0">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-3xl sm:text-4xl tracking-tight font-bold pt-6 pb-10 xl:py-12">
                    <FormattedMessage id="aboutMe" defaultMessage="About Me" />
                </h2>

                <div className="flex flex-col md:flex-row gap-8 pb-10 items-center">
                    <div className="md:w-3/5 text-base leading-relaxed">
                        <p className="text-lg">
                            <FormattedMessage id="aboutMeIntro1" defaultMessage="Hello! I'm " />
                            <span className="font-bold gradient-text">{displayName}</span>
                            <FormattedMessage id="aboutMeIntro2" defaultMessage=" " />
                        </p>

                        <div className="my-6 mx-auto w-40 h-40 animate-float">
                            <img alt="Programmer illustration" src="/programmer.svg" loading="lazy" className="w-full h-full object-contain" />
                        </div>

                        <p className="text-uni-muted">
                            <FormattedMessage id="aboutMeDesc" defaultMessage="a software developer." />
                        </p>
                    </div>

                    <div className="md:w-2/5">
                        <div className="glass-card rounded-2xl p-6 space-y-4">
                            <div className="flex flex-col">
                                <span className="text-sm text-uni-muted">
                                    <FormattedMessage id="aboutMeAge" defaultMessage="Age" />
                                </span>
                                <span className="font-semibold text-lg">{age}</span>
                            </div>
                            <div className="border-t border-uni-border" />
                            <div className="flex flex-col">
                                <span className="text-sm text-uni-muted">
                                    <FormattedMessage id="aboutMeResidence" defaultMessage="Residence" />
                                </span>
                                <span className="font-semibold text-lg">
                                    {isHu ? 'Budapest, Magyarország' : 'Budapest, Hungary'}
                                </span>
                            </div>
                            <div className="border-t border-uni-border" />
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-uni-muted mb-2">
                                    <FormattedMessage id="aboutMeLinkedin" defaultMessage="LinkedIn" />
                                </span>
                                <a href="https://www.linkedin.com/in/janosmeszaros1/" target="_blank" rel="noopener noreferrer" className="relative group" aria-label="LinkedIn Profile">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/25">
                                        <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                                    </div>
                                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
