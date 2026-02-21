import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { certificates } from '../config/personalConfig';
import { FormattedMessage } from 'react-intl';

export default function CertificatesModal({ isOpen, closeModal }) {
  const [certToggles, setCertToggles] = useState(
    ((a) => {
      for (let i = 0; i < certificates.length; i++) a[i] = false
      return a
    })([])
  )

  const adjustCertToggles = (num) => {
    setCertToggles(prev => prev.map((toggle, key) => key === num ? !toggle : toggle))
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 dark:bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[85%] lg:max-w-[70%] transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 pb-5">
                  <FormattedMessage id="modalCertCert" defaultMessage="Certificates" />
                </Dialog.Title>

                <div className="flex flex-col gap-5 mx-5">
                  {certificates.map((certificate, index) => (
                    <div key={index} className="flex flex-col">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-start mb-1 text-base">
                        {certificate.training}
                      </p>
                      {certificate.school && (
                        <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">{certificate.school}</p>
                      )}
                      <p className="float-left text-gray-700 dark:text-gray-300 pr-16">
                        <FormattedMessage
                          id="modalDate"
                          defaultMessage="{ts, date, ::yyyyMMdd}"
                          values={{ ts: Date.parse(certificate.completion) }}
                        />
                      </p>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked={certToggles[index]} onChange={() => adjustCertToggles(index)} />
                          <div className="relative w-11 h-6 bg-blue-200 ring-2 ring-blue-500 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                          <span className="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                            <FormattedMessage id="modalShow" defaultMessage="Show certificate" />
                          </span>
                        </label>
                      </div>
                      <div className={`w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg mt-2 ${!certToggles[index] ? 'hidden' : ''}`}>
                        <img
                          className="mx-auto rounded-lg shadow-xl dark:shadow-gray-900"
                          src={certificate.location}
                          alt={certificate.training}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-blue-100 dark:bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <FormattedMessage id="modalClose" defaultMessage="Close" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
