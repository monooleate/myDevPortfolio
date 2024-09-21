
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faListAlt, faHandsHoldingCircle, faPaperPlane, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'preact/hooks';
import { Context } from "./LanguageWrapper";

const navigationEng = [
  { name: 'About', href: '#aboutme', current: false, icon: faUser},
  { name: 'Resume', href: '#resume', current: false, icon: faListAlt},
  { name: 'Projects', href: '#portfolio', current: false, icon: faHandsHoldingCircle},
  { name: 'Contact', href: '#contact', current: false, icon: faPaperPlane},
]

const navigationHun = [
    { name: 'Rólam', href: '#aboutme', current: false, icon: faUser},
    { name: 'Önéltrajz', href: '#resume', current: false, icon: faListAlt},
    { name: 'Projektek', href: '#portfolio', current: false, icon: faHandsHoldingCircle},
    { name: 'Kapcsolat', href: '#contact', current: false, icon: faPaperPlane},
]

let navigation;


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navlink() {
    const context = useContext(Context)
    context.locale.includes('hu') ? navigation = navigationHun : navigation = navigationEng
     return (
        <>
            <Disclosure as="nav" >
            {({ open }) => (
                <> 
                    <div className="absolute top-[30%] right-0 pr-14 sm:pr-24 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="rounded-md mx-2 lg:mx-8 text-uni-text hover:bg-uni-palette focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <FontAwesomeIcon icon={faX} className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true"/>
                        )}
                        </DisclosureButton>
                    </div>

                    <DisclosurePanel>
                        <div className="fixed bg-uni-fill text-uni-text w-[400px] m-auto inset-x-0 top-16 space-y-1 py-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className='w-20 m-auto hover:bg-uni-palette block rounded-md py-2 text-base font-medium'
                                aria-current={item.current ? 'page' : undefined}
                                >
                                {item.name}
                            </DisclosureButton>
                        ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
            </Disclosure>



            <div className="hidden md:block xl:hidden">
                <div className="flex flex-col space-y-4 items-center mx-auto">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        aria-label={item.name}
                        href={item.href}
                        className='bg-uni-fill text-uni-text hover:text-uni-palette block rounded-md py-2 px-auto w-16 text-lg'
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
            </div>

            <div className="hidden xl:block">
                <div className="mb-3">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        aria-label={item.name}
                        href={item.href}
                        className='bg-uni-fill text-uni-text hover:bg-uni-palette block rounded-md py-3 font-medium text-xl'
                    >
                        <FontAwesomeIcon icon={item.icon} />
                    </a>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default Navlink
