import Toggle from "react-toggle";
import "react-toggle/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import NavlinkForLayout from './NavlinkForLayout'

export default function HeaderForLayout({ appliedDark, adjustAppliedDark }) {
    return(
        <header id='header' className='text-ellipsis border-spacing-1 fixed flex justify-center gap-5 top-0 w-[100%] h-16 z-50 bg-yellow-500 text-uni-text overflow-x-hidden'>
                   
            <a
                key='Janos'
                href='#'
                className='bg-secondary top-[10%] text-uni-text hover:bg-uni-palette rounded-md font-medium text-lg '
            >   
                Janos <br/>
                <FontAwesomeIcon icon={faThumbsUp} />
            </a>

            <Toggle
                className='pb-2 my-4'
                checked={appliedDark}
                onChange={adjustAppliedDark}
                icons={{ unchecked: "🌙", checked: "🔆" }}
            />
            
            <NavlinkForLayout />

        </header>
    )
}