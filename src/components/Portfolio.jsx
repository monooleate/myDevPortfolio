import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio(){
    return(
        <section id="portfolio" className="relative lg:px-5 pt-5 pb-8 bg-uni-odd" >
            <div className="container m-auto pt-10 ">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="pb-4 text-4xl tracking-tight font-extrabold dark:text-gray-300 md:leading-normal leading-normal">Hobby Portfolio</h3>
                     
                    <p className="text-uni-text max-w-xl mx-auto text-base">Engineer by training, developer by passion: learning through projects.</p>
                    
                </div>

                <div className="grid grid-cols-1 mt-6 mx-4 gap-[30px] 
                                md:grid-cols-2
">
                    
                    <a href="https://github.com/monooleate/myDevPortfolio" target="_blank" className="px-6 py-8 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay h-10 w-10 stroke-1 text-amber-500"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>

                        <div className="mt-4 text-left">
                            <p className="title h5 text-2xl font-medium dark:text-gray-300 hover:text-amber-500">myDevPortfolio
                            {/* new window svg */}
                                <svg className='inline-block mb-1 ml-1 w-[14px] h-[14px] cursor-pointer' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
                                    <path fill="#494c4e" d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"/>
                                    <path fill="#494c4e" d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"/>
                                </svg>
                            </p>
                            <p className="text-slate-400 mt-3 text-[15px]">Streamline your visibility online with my customizable devPortfolio template.</p>
                            <div className='flex gap-2 items-center my-2'>   
                                <svg className='  ml-2 w-7 h-7 cursor-pointer'><title>GitHub</title><FontAwesomeIcon icon={faGithub} /></svg>
                                <p className=" hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Fork it <svg className='inline-block ml-2 w-5 h-5 cursor-pointer'><FontAwesomeIcon icon={faArrowRight} /></svg></p>
                            </div>
                            <svg className='inline-block mt-2 ml-2 w-7 h-7 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><title>React</title><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                            <svg fill="#61dafb" className='inline-block mt-2 ml-2 w-7 h-7 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><title>Tailwind CSS</title><path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
                            <svg fill="none" className='inline-block mt-2 ml-2 w-7 h-7 cursor-pointer' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Vite</title><path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" fill="url(#paint0_linear)"/><path d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z" fill="url(#paint1_linear)"/><defs id="defs50"><linearGradient id="paint0_linear" x1="6.0002" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stopColor="#41D1FF" id="stop38"/><stop offset="1" stopColor="#BD34FE" id="stop40"/></linearGradient><linearGradient id="paint1_linear" x1="194.651" y1="8.8182" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stopColor="#FFEA83" id="stop43"/><stop offset=".0833" stopColor="#FFDD35" id="stop45"/><stop offset="1" stopColor="#FFA800" id="stop47"/></linearGradient></defs></svg>
                            <svg fill="#ffffff" fillRule="evenodd" className='inline-block mt-2 ml-2 w-7 h-7' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>typescript</title><rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6"/><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"/></svg>
                        </div>
                    </a>
                    
                    <a href="/projects/pathfinder" target="_blank"  className="px-6 py-8 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                    <svg className="h-10 w-10 stroke-1 text-amber-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor" fill="none"><circle cx="34.52" cy="11.43" r="5.82"/><circle cx="53.63" cy="31.6" r="5.82"/><circle cx="34.52" cy="50.57" r="5.82"/><circle cx="15.16" cy="42.03" r="5.82"/><circle cx="15.16" cy="19.27" r="5.82"/><circle cx="34.51" cy="29.27" r="4.7"/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"/><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"/><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"/><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"/><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"/></svg>
                        <div className="mt-4 text-left">
                            <p className="title h5 text-2xl font-medium dark:text-gray-300 hover:text-amber-500">Pathfinding algorithms
                                <svg className='inline-block mb-1 ml-1 w-[14px] h-[14px] cursor-pointer' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
                                    <path fill="#494c4e" d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"/>
                                    <path fill="#494c4e" d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"/>
                                </svg>
                            </p>
                            <p className="text-slate-400 mt-3 text-[15px]">Interactive pathfinding algorithms visualization. Learn and explore with ease!</p>
                            <p className="my-2 hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Learn by Play <svg className='inline-block ml-2 w-5 h-5 cursor-pointer'><FontAwesomeIcon icon={faArrowRight} /></svg></p>
                            <svg className='inline-block mt-2 ml-2 w-7 h-7 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><title>React</title><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                            
                            <svg className='inline-block mt-2 ml-2 w-7 h-7 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630"><rect width="630" height="630" fill="#f7df1e"/><title>JavaScript</title><path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/></svg>
                        </div>
                    </a>

                    <div className="px-6 py-8 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg className="h-10 w-10 stroke-1 text-amber-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor" fill="none"><circle cx="34.52" cy="11.43" r="5.82"/><circle cx="53.63" cy="31.6" r="5.82"/><circle cx="34.52" cy="50.57" r="5.82"/><circle cx="15.16" cy="42.03" r="5.82"/><circle cx="15.16" cy="19.27" r="5.82"/><circle cx="34.51" cy="29.27" r="4.7"/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"/><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"/><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"/><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"/><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"/></svg>
                        <div className="mt-4 text-left">
                            <a href="/projects/weather" target="_blank" className="title h5 text-2xl font-medium dark:text-gray-300 hover:text-amber-500 cursor-pointer">Weather Checker 
                                <svg className='inline-block mb-1 ml-1 w-[14px] h-[14px] cursor-pointer' viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
                                    <path fill="#494c4e" d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"/>
                                    <path fill="#494c4e" d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"/>
                                </svg>
                            </a>
                            <p className="text-slate-400 mt-3 text-[15px]">Weather check by two API requests: <br/> 
                                <a className='text-green-500' href="https://geocode.maps.co" target="_blank">geocode.maps.co</a>&nbsp;;&nbsp;  
                                <a className='text-purple-500' href="https://open-meteo.com" target="_blank">open-meteo.com</a><br/> 
                                Using Typescript for strict type scheck. Give it a try!</p>
                            <a href="/projects/weather" target="_blank" className="my-2 hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Check Wheather <svg className='inline-block ml-2 w-5 h-5 cursor-pointer'><FontAwesomeIcon icon={faArrowRight} /></svg></a><br/>
                            <svg fill="#ffffff" fillRule="evenodd" className='inline-block mt-2 ml-2 w-7 h-7' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>typescript</title><rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6"/><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"/></svg>
                        
                            </div>
                    </div>
                   

                    
{/*                     <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>

                        <div className="mt-7">
                            <a href="" className="title h5 text-[17px] font-medium dark:text-gray-300 hover:text-amber-500">Ios App Designer</a>
                            <p className="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <a href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera h-10 w-10 stroke-1 text-amber-500"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>

                        <div className="mt-7">
                            <a href="" className="title h5 text-[17px] font-medium dark:text-gray-300 hover:text-amber-500">Photography</a>
                            <p className="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <a href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-compass h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>

                        <div className=" mt-7">
                            <a href="" className="title h5 text-[17px] font-medium dark:text-gray-300 hover:text-amber-500">Graphic Designer</a>
                            <p className="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <a href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>

                        <div className="mt-7">
                            <a href="" className="title h5 text-[17px] font-medium dark:text-gray-300 hover:text-amber-500">Web Security</a>
                            <p className="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <a href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-watch h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>

                        <div className="mt-7">
                            <a href="" className="title h5 text-[17px] font-medium dark:text-gray-300 hover:text-amber-500">24 / 7</a>
                            <p className="text-slate-400 mt-3 text-[15px]">Just-in-time and 24/7 availability are crucial for ensuring seamless operations and meeting customer demands in real-time</p>
                            
                            <div className="mt-5">
                                <a href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </section>

    )
}
