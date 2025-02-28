import { aboutMeText, yourName } from "../config/personalConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {

    return (
        <section id="aboutme" className="text-uni-text text-xl bg-uni-odd pt-5
        xl:min-h-[100%] xl:pt-0">
            <div className="text-center text-4xl tracking-tight font-extrabold pt-10 pb-8
            xl:py-12">
                About Me
            </div>
            <div className="flex flex-wrap pb-10 gap-5">
                <div className="mx-5 md:w-3/5">
                    Hello! I’m 
                    <b className="font-bold"> {yourName.name}</b>

                    <div className="mx-auto h-40 w-40">
                        <img alt="Programmer sits" src="/programmer.svg"/>
                    </div>

                    {aboutMeText.description}
                </div>
                <div className="my-5 mx-auto sm:my-auto md:w-1/4">
                    
                    <dl className="text-base text-uni-text divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Age</dt>
                            <dd className=" font-semibold">99</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Residence</dt>
                            <dd className="font-semibold">Your Dreams</dd>
                        </div>
                        <div className="flex flex-col items-center pt-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">LinkedIn</dt>
                            <dd className="relative pl-2 w-10 h-10 font-semibold">
                                <a href="" target="_blank">
                                    <span className="relative ml-0 pt-[6px] flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
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