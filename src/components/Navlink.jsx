import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faListAlt, faHandsHoldingCircle, faPaperPlane, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

const navigation = [
    { id: 'navAbout', defaultName: 'About', href: '#aboutme', icon: faUser },
    { id: 'navResume', defaultName: 'Resume', href: '#resume', icon: faListAlt },
    { id: 'navProjects', defaultName: 'Projects', href: '#portfolio', icon: faHandsHoldingCircle },
    { id: 'navContact', defaultName: 'Contact', href: '#contact', icon: faPaperPlane },
];

function Navlink() {
    return (
        <>
            {/* ========== Mobile: Hamburger + Disclosure panel ========== */}
            <Disclosure as="nav" className="md:hidden">
                {({ open }) => (
                    <>
                        <DisclosureButton
                            className="
                                rounded-lg p-2
                                text-uni-text hover:bg-uni-palette/10
                                focus:outline-none focus:ring-2 focus:ring-uni-palette
                                transition-colors duration-300
                            "
                        >
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <FontAwesomeIcon icon={faX} className="block h-5 w-5" aria-hidden="true" />
                            ) : (
                                <FontAwesomeIcon icon={faBars} className="block h-5 w-5" aria-hidden="true" />
                            )}
                        </DisclosureButton>

                        <DisclosurePanel
                            className="
                                fixed top-16 left-0 right-0 z-50
                                bg-uni-fill/95 backdrop-blur-xl
                                border-b border-uni-border
                                text-uni-text
                                space-y-1 py-4 px-4
                            "
                        >
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.id}
                                    as="a"
                                    href={item.href}
                                    className="
                                        flex items-center gap-3
                                        px-4 py-3
                                        hover:bg-uni-palette/10 rounded-xl
                                        text-base font-medium
                                        transition-colors duration-300
                                    "
                                >
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className="w-4 h-4 text-uni-palette"
                                    />
                                    <FormattedMessage
                                        id={item.id}
                                        defaultMessage={item.defaultName}
                                    />
                                </DisclosureButton>
                            ))}
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>

            {/* ========== Tablet: Icon navigation in sidebar ========== */}
            <div className="hidden md:block xl:hidden">
                <div className="flex flex-col space-y-1 items-center mx-auto">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            aria-label={item.defaultName}
                            href={item.href}
                            className="
                                text-uni-text hover:text-uni-palette
                                hover:bg-uni-palette/10
                                block rounded-xl py-3 px-3
                                font-medium text-lg text-center
                                transition-all duration-300
                            "
                            title={item.defaultName}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    ))}
                </div>
            </div>

            {/* ========== Desktop: Icon-only navigation ========== */}
            <div className="hidden xl:block">
                <div className="mb-3 space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            aria-label={item.defaultName}
                            href={item.href}
                            className="
                                text-uni-text hover:text-uni-palette
                                hover:bg-uni-palette/10
                                block rounded-xl py-3
                                font-medium text-lg text-center
                                transition-all duration-300
                            "
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navlink
