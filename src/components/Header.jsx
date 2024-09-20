import Navlink from './Navlink'
import Toggle from "react-toggle";
import "react-toggle/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, {useContext} from 'react';
import { Context } from "./LanguageWrapper";

function Header({ appliedDark, adjustAppliedDark }) {
    const context = useContext(Context);
    return(
        <header id='header' className='text-ellipsis border-spacing-1
        fixed left-0 mx-auto top-0 w-[100%] h-16 px-2 z-50 bg-uni-fill text-uni-text overflow-x-hidden
        sm:px-10
        md:flex md:sticky md:flex-col md:justify-start md:border-r-uni-border md:border-r-2 md:left-auto md:px-0 md:top-5 md:w-24 md:min-w-24 md:min-h-[450px] md:h-[60vh] md:z-10 md:overflow-hidden
        xl:h-[400px] xl:m-auto xl:mr-0 xl:w-24 xl:min-w-10 xl:border-solid xl:border-[2px] xl:rounded'>

            <a
                key='any'
                href='/'
                className='bg-secondary absolute ml-14 top-[10%] 
                md:static md:mx-auto md:mb-15 md:mt-5 
                xl:mb-auto 
                text-uni-text hover:bg-uni-palette block rounded-md font-medium text-lg '
            >   
                 <br/>
                <FontAwesomeIcon icon={faThumbsUp} />
            </a>
            <div className='flex justify-center mt-5 flex-row gap-8 md:content-center md:flex-col md:gap-2 md:my-10'>
                <label htmlFor='isDark'>      
                    <Toggle
                        className='pb-2 mt-5 m-auto md:mt-8 md:top-auto md:mb-12 xl:my-auto'
                        checked={appliedDark}
                        onChange={adjustAppliedDark}
                        id='isDark'
                        icons={{ unchecked: "🌙", checked: "🔆" }}
                    />
                </label>

            {context.locale.includes('hu') ? 
                    <div className=''>
                        <select 
                            id="language" 
                            className=" bg-gray-200 border font-bold border-gray-300 appearance-none text-gray-900 text-sm text-center rounded-lg dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 w-12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value = {context.locale} 
                            onChange={context.selectLanguage}>
                                <option value='hu' defaultValue>HU</option>
                                <option value='en'>EN</option>                                
                        </select>
                    </div>
                :
                    <div className=''>
                        <select 
                            id="language" 
                            aria-label="language"
                            className=" bg-gray-200 border font-bold border-gray-300 appearance-none text-gray-900 text-sm text-center rounded-lg dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 w-12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value = {context.locale} 
                            onChange={context.selectLanguage}>
                                <option value='en' defaultValue>EN</option>
                                <option value='hu'>HU</option>
                        </select>
                    </div>
                } 
            </div>

            <Navlink />
            
        </header>
    )
}

export default Header
