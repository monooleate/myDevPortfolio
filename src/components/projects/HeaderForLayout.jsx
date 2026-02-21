import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCertificate } from '@fortawesome/free-solid-svg-icons';
import NavlinkForLayout from './NavlinkForLayout'

export default function HeaderForLayout({ appliedDark, adjustAppliedDark, openModal }) {
    return (
        <header className='fixed flex items-center justify-center gap-6 top-0 w-full h-16 z-50 bg-uni-fill/80 backdrop-blur-xl border-b border-uni-border text-uni-text'>
            <a href='/' className='text-uni-text hover:text-uni-palette transition-colors duration-300 font-medium text-lg' aria-label="Home">
                <FontAwesomeIcon icon={faCode} />
            </a>

            {/* Custom dark mode toggle (pill-shaped) - matches main header */}
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

            <button
                onClick={openModal}
                className="text-uni-text hover:text-uni-palette transition-colors duration-300 text-lg"
                aria-label="Certificates"
                title="Certificates"
            >
                <FontAwesomeIcon icon={faCertificate} />
            </button>

            <NavlinkForLayout />
        </header>
    )
}
