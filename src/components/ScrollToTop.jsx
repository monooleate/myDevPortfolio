import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 200)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="fixed bottom-4 right-4 z-40">
            <button
                type="button"
                aria-label="Scroll to top"
                onClick={scrollToTop}
                className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95`}
            >
                <FontAwesomeIcon icon={faArrowUp} className="h-4 w-4" />
            </button>
        </div>
    )
}
