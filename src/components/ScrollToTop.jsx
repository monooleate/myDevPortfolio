import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTop() {  

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
        setIsVisible(true)
        } else {
        setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
        window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="fixed bottom-2 right-2">
        <button
            type="button"
            id="scrolltotop"
            aria-label="scroll"
            onClick={scrollToTop}
            className={classNames(
            isVisible ? 'opacity-100' : 'opacity-0',
            'lg:hidden bg-uni-palette hover:bg-uni-palette/70 focus:ring-uni-palette inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
            )}
        >
            <FontAwesomeIcon className="h-5 w-5" aria-hidden="true" icon={faArrowUp} />
        </button>
        </div>
    )
}