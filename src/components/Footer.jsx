import { yourName } from "../config/personalConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';

function Footer() {
    return (
        <footer id="footer" className="bg-gradient-to-b from-uni-fill to-uni-odd py-8 w-full border-t border-uni-border">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-uni-muted text-sm">
                        &copy; {new Date().getFullYear()} {yourName.name}. <FormattedMessage id="footerRights" defaultMessage="All rights reserved." />
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/monooleate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-uni-muted hover:text-uni-palette transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/janosmeszaros1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-uni-muted hover:text-blue-500 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
