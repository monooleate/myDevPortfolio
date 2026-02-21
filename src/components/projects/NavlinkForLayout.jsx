import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPaperPlane, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default function NavlinkForLayout() {
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const navigation = [
    { name: 'Home', href: `/${currentLang}`, icon: faHome },
    { name: 'Contact', href: `/${currentLang}#contact`, icon: faPaperPlane },
  ];

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="absolute top-[30%] right-0 pr-6 flex items-center md:hidden">
              <DisclosureButton className="rounded-lg p-2 text-uni-text hover:bg-uni-palette/10 focus:outline-none focus:ring-2 focus:ring-uni-palette transition-colors duration-300">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <FontAwesomeIcon icon={faX} className="h-5 w-5" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                )}
              </DisclosureButton>
            </div>

            <DisclosurePanel>
              <div className="fixed bg-uni-fill/90 backdrop-blur-xl border-b border-uni-border text-uni-text w-full inset-x-0 top-16 py-4 px-4 z-50">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='flex items-center gap-3 px-4 py-3 hover:bg-uni-palette/10 rounded-xl text-base font-medium transition-colors duration-300'
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-uni-palette" />
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <div className="hidden md:flex md:items-center gap-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className='text-uni-text hover:text-uni-palette rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-300'
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  )
}
