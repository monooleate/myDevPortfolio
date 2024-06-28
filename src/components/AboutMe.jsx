import Lottie from "lottie-react";
import animation from "../../src/assets/coding.json";
import { aboutMeText } from "../config/personalConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {

    return (
        <section id="aboutme" className="text-uni-text text-xl bg-uni-odd pb-5">
            <div className="text-center text-4xl py-5">
                About Me
            </div>
            <div className="flex flex-wrap p-2 gap-5">
                <div className="mx-5 md:w-3/5">
                    Hello! I’m 
                    <b className=" font-bold"> Janos Meszaros</b>,
                    <Lottie className="mx-auto h-40 w-40" animationData={animation} />
                    {aboutMeText.description}
                </div>
                <div className="my-5 mx-auto sm:my-auto md:w-1/4">
                    
                    <dl className="text-base text-uni-text divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Age</dt>
                            <dd className=" font-semibold">36</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Residence</dt>
                            <dd className="font-semibold">Hungarian</dd>
                        </div>
                        <div className="flex flex-col items-center pt-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">LinkedIn</dt>
                            <dd className="relative pl-2 w-10 h-10 font-semibold">
                                <a href="https://www.linkedin.com/in/janosmeszaros1/" target="_blank">
                                    <span class="relative ml-0 pt-[6px] flex h-2 w-2">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                                    </span>
                                    <svg className='w-6 h-6 cursor-pointer'>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </svg>

                                </a>
                            </dd>
                        </div>
                    </dl>

                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe