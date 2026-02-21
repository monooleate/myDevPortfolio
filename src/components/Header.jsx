import Navlink from './Navlink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Context } from "./LanguageWrapper";
import { useNavigate, useLocation } from 'react-router-dom';
import Magyar from '../lang/hu.json';
import English from '../lang/en.json';
import { useContext } from 'react';

function Header({ appliedDark, adjustAppliedDark }) {
    const context = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    function selectLanguage(e) {
        const newLocale = e.target.value;
        context.setLocale(newLocale);
        if (newLocale.includes("en")) {
            context.setMessages(English);
        } else {
            context.setMessages(Magyar);
        }
        const currentPath = location.pathname;
        if (currentPath.includes("/en")) {
            navigate(currentPath.replace("/en", `/${newLocale}`));
        } else if (currentPath.includes("/hu")) {
            navigate(currentPath.replace("/hu", `/${newLocale}`));
        } else {
            navigate(`/${newLocale}${currentPath}`);
        }
    }

    return (
        <header
            id="header"
            className="
                fixed left-0 top-0 w-full h-16 px-4 z-50
                bg-uni-fill/80 backdrop-blur-xl border-b border-uni-border
                text-uni-text
                flex items-center justify-between
                sm:px-10
                md:sticky md:flex md:flex-col md:justify-start md:items-center
                md:w-24 md:min-w-24 md:h-[60vh] md:min-h-[450px]
                md:px-0 md:top-5 md:z-10
                md:bg-uni-fill md:backdrop-blur-none
                md:border-r md:border-b-0 md:border-uni-border md:rounded-xl
                md:overflow-hidden md:left-auto
                xl:h-[400px] xl:m-auto xl:mr-0 xl:w-24 xl:min-w-10
                xl:border xl:border-uni-border xl:rounded-xl
            "
        >
            {/* --- Nickname link + icon --- */}
            <a
                href="/"
                className="
                    flex items-center gap-1.5
                    text-uni-text hover:text-uni-palette
                    font-medium text-lg
                    transition-colors duration-300
                    shrink-0
                    md:flex-col md:gap-0.5 md:mt-5 md:mb-4
                    xl:mb-3
                "
                aria-label="Home"
            >
                <span className="leading-tight">
                    <FormattedMessage id="myNickName" defaultMessage="Janos" />
                </span>
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-xs text-uni-palette md:text-sm"
                />
            </a>

            {/* --- Controls: dark mode toggle + language selector --- */}
            <div
                className="
                    flex items-center gap-3
                    md:flex-col md:gap-4 md:my-6
                    xl:my-4
                "
            >
                {/* Custom dark mode toggle (pill-shaped) */}
                <button
                    onClick={adjustAppliedDark}
                    className="
                        relative w-12 h-7 rounded-full
                        bg-uni-border/60 hover:bg-uni-border
                        transition-colors duration-300
                        flex items-center shrink-0
                        focus:outline-none focus:ring-2 focus:ring-uni-palette focus:ring-offset-1
                    "
                    aria-label="Toggle dark mode"
                >
                    {/* Sliding circle indicator */}
                    <span
                        className={`
                            absolute top-0.5 w-6 h-6 rounded-full
                            bg-uni-fill shadow-md
                            flex items-center justify-center
                            text-xs leading-none
                            transition-all duration-300 ease-in-out
                            ${appliedDark ? 'left-[22px]' : 'left-0.5'}
                        `}
                    >
                        {appliedDark ? '🔆' : '🌙'}
                    </span>
                </button>

                {/* Language selector */}
                <select
                    id="lang"
                    aria-label="Language"
                    className="
                        bg-uni-card border border-uni-border
                        font-semibold appearance-none
                        text-uni-text text-sm text-center
                        rounded-lg
                        focus:ring-2 focus:ring-uni-palette focus:border-uni-palette
                        w-14 p-1.5
                        transition-all duration-300
                        cursor-pointer
                    "
                    value={context.locale.includes('hu') ? 'hu' : 'en'}
                    onChange={selectLanguage}
                >
                    <option value="en">EN</option>
                    <option value="hu">HU</option>
                </select>
            </div>

            {/* --- GitHub link (visible on md+ sidebar only) --- */}
            <a
                href="https://github.com/monooleate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="
                    hidden md:flex items-center justify-center
                    text-uni-text hover:text-uni-palette
                    transition-colors duration-300
                    text-xl mb-4
                    xl:mb-3
                "
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>

            {/* --- Navigation --- */}
            <Navlink />
        </header>
    );
}

export default Header
