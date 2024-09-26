import Toggle from "react-toggle";
import "react-toggle/style.css"

import NavlinkForLayout from './NavlinkForLayout'

import { Context } from "../LanguageWrapper";
import { useNavigate, useLocation } from 'react-router-dom';

import Magyar from '../../lang/hu.json';
import English from '../../lang/en.json';

import { useContext } from 'preact/hooks';

export default function HeaderForLayout({ appliedDark, adjustAppliedDark }) {
    
    const context = useContext(Context);
    const navigate = useNavigate(); // Use `useNavigate` for navigation
    const location = useLocation(); // Use `useLocation` to access the current path

    function selectLanguage(e) {
        const newLocale = e.target.value;
        context.setLocale(newLocale);
        if (newLocale.includes("en")) {
            context.setMessages(English);
        } else {
            context.setMessages(Magyar);
        }

        // Modify the URL to include the new language
        const currentPath = location.pathname;
        if (currentPath.includes("/en")) {
        navigate(currentPath.replace("/en", `/${newLocale}`));
        } else if (currentPath.includes("/hu")) {
        navigate(currentPath.replace("/hu", `/${newLocale}`));
        } else {
        navigate(`/${newLocale}${currentPath}`); // Add language to the path if it's not present
        }
   }

    return(
        <header id='header' className='text-ellipsis border-spacing-1 fixed flex justify-center gap-14 top-0 w-[100%] h-16 z-50 bg-yellow-400 dark:bg-slate-700 text-uni-text overflow-x-hidden'>
                   
            <a
                key='Janos'
                href='/'
                className='bg-secondary top-[10%] text-uni-text flex items-center hover:bg-uni-palette rounded-md font-medium text-lg'
            >   
                Janos
            </a>

            <div className='flex justify-center mt-5 flex-row gap-8 md:content-center md:gap-4'>
                <label htmlFor='isDark'>
                    <Toggle
                        className='my-auto pb-2'
                        checked={appliedDark}
                        onChange={adjustAppliedDark}
                        id='isDark_'
                        icons={{ unchecked: "🌙", checked: "🔆" }}
                    />
                </label>
                {context.locale.includes('hu') ?
                    <div className=''>
                        {/* <label htmlFor='lang'>lang</label> */}
                        <select 
                            id="lang"
                            aria-label="lang"
                            className=" bg-gray-200 border font-bold border-gray-300 appearance-none text-gray-900 text-sm text-center rounded-lg dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 w-12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value = {context.locale} 
                            onChange={selectLanguage}>
                                <option label='HU' value='hu' selected>HU</option>
                                <option label='EN' value='en'>EN</option>                                
                        </select>
                    </div>
                :
                    <div className=''>
                        {/* <label htmlFor='lang'>lang</label> */}
                        <select 
                            id="lang" 
                            aria-label="lang"
                            className=" bg-gray-200 border font-bold border-gray-300 appearance-none text-gray-900 text-sm text-center rounded-lg dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 w-12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value = {context.locale} 
                            onChange={selectLanguage}>
                                <option label='EN' value='en' selected>EN</option>
                                <option label='HU' value='hu'>HU</option>
                        </select>
                    </div>
                } 
            </div>
            
            <NavlinkForLayout />

        </header>
    )
}