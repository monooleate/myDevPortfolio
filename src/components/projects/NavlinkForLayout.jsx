
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser, faPaperPlane, faX, faBars } from '@fortawesome/free-solid-svg-icons';
  
  const navigation = [
/*    { name: 'Home', href: '/', current: false, icon: faUser},
    { name: 'Resume', href: '#resume', current: false, icon: faListAlt},
    { name: 'Projects', href: '#portfolio', current: false, icon: faHandsHoldingCircle}, */
    { name: 'Contact', href: '/hu/#contact', current: false, icon: faPaperPlane},
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Navlink_Project() {
    return (
      <>
          <Disclosure as="nav" >
          {({ open }) => (
              <> 
                  <div className="absolute top-[30%] flex items-center md:hidden">
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
  
          <div className="hidden md:flex md:items-center md:ml-[-56px]">
              <div className="flex space-x-4 items-center">
                  {navigation.map((item) => (
                  <a
                      key={item.name}
                      aria-label={item.name}
                      href={item.href}
                      className='bg-uni-fill text-uni-text hover:text-uni-palette block rounded-md p-1 px-2 text-lg'
                  >
                      {item.name}
                  </a>
                  ))}
              </div>
          </div>
      </>
    )
  }
  
 
  
