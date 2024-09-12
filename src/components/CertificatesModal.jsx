import { useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { certificates } from '../config/personalConfig';
import { twMerge } from 'tailwind-merge'
import { FormattedMessage } from 'react-intl';

export default function MyModal({ isOpen, closeModal, openModal }) {

  const [certToggles, setCertToggles] = useState(
    ((a)=> {
      for(let i = 0; i < certificates.length; i++) a[i] = false
      return a
    })([])
  )

  const adjustCertToggles = (num) => {
      setCertToggles(prev => prev.map((toggle, key) => {
          return (key===num) ? !toggle : toggle
    }))
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="hidden rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-uni-text hover:bg-uni-palette focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Certificates
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed top-16 inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              > 

                <Dialog.Panel className="w-full max-w-[85%] lg:max-w-[70%] transform overflow-hidden rounded-2xl bg-gray-200 p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-uni-text pb-5"
                  >
                    <FormattedMessage
                      id = "modalCertCert"
                      defaultMessage="Certificates"
                    />
                  </Dialog.Title>

                  <div className="flex flex-col gap-5 mx-5 ">
                    {certificates.length > 0 &&
                      certificates.map((certificate, index) => (
                        <div key={index} className="flex flex-col">
                          <p className="font-semibold text-uni-text text-start mb-2 text-base">
                            {certificate.training}
                          </p>
                          <p className="float-left text-uni-text pr-16">
                            <FormattedMessage
                              id = "modalDate"
                              defaultMessage="{ts, date, ::yyyyMMdd}"
                              values={{ts: Date.parse(certificate.completion)}}
                            />
                          </p>
                          <div>
                            <p className="float-left text-uni-text pr-16">{certificate.school}</p>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" className="sr-only peer" checked={certToggles[index]} onChange={() => adjustCertToggles(index)}/>
                              <div className="relative w-11 h-6 bg-blue-200 ring-2 ring-blue-500 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">                                
                                <FormattedMessage
                                  id = "modalShow"
                                  defaultMessage="Show certificate"
                                />
                              </span>
                            </label>
                          </div>
                          <div className={twMerge("w-full h-full bg-gray-200 rounded-full dark:bg-gray-700", !certToggles[index] && 'hidden')}>
                            <img 
                              className="mx-auto rounded-lg shadow-xl dark:shadow-gray-800" 
                              src={certificate.location}
                              alt={certificate.training}
                            />  
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex ml-[40%] rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >                      
                      <FormattedMessage
                        id = "modalClose"
                        defaultMessage="Close"
                      />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
