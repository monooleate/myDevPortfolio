import Navlink from './Navlink'
import Toggle from "react-toggle";
import "react-toggle/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Header({ appliedDark, adjustAppliedDark }) {
    return(
        <header id='header' className='text-ellipsis border-spacing-1
        fixed left-0 mx-auto top-0 w-[100%] h-16 px-2 z-50 bg-uni-fill text-uni-text overflow-x-hidden
        sm:px-10
        md:flex md:sticky md:flex-col md:justify-start md:border-r-uni-border md:border-r-2 md:left-auto md:px-0 md:top-5 md:w-24 md:min-w-24 md:min-h-[450px] md:h-[60vh] md:z-10 md:overflow-hidden
        xl:h-[400px] xl:m-auto xl:mr-0 xl:w-24 xl:min-w-10 xl:border-solid xl:border-[2px] xl:rounded'>

            <a
                key='Janos'
                href='/'
                className='bg-secondary absolute ml-14 top-[10%] 
                md:static md:mx-auto md:mb-15 md:mt-5 
                xl:mb-auto 
                text-uni-text hover:bg-uni-palette block rounded-md font-medium text-lg '
            >   
                Janos <br/>
                <FontAwesomeIcon icon={faThumbsUp} />
            </a>
            <label htmlFor='isDark'>
                <Toggle
                    className='pb-2 mt-5 m-auto md:mt-8 md:top-auto md:mb-12 xl:my-auto'
                    checked={appliedDark}
                    onChange={adjustAppliedDark}
                    id='isDark'
                    icons={{ unchecked: "🌙", checked: "🔆" }}
                />
            </label>
            <Navlink />
            
        </header>
    )
}

export default Header
