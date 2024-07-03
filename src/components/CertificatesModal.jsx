import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { certificates } from '../config/personalConfig';

export default function MyModal({ isOpen, closeModal, openModal }) {

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
                    Certificates
                  </Dialog.Title>

                  <div className="flex flex-col gap-5 mx-5 ">
                    {certificates.length > 0 &&
                      certificates.map((certificate, index) => (
                        <div key={index} className="flex flex-col">
                          <p className="font-semibold text-uni-text text-start mb-2 text-base">
                            Course: {certificate.training}
                          </p>
                          <p className="float-left text-uni-text">Date: {certificate.completion}</p>

                          <div className="w-full h-full bg-gray-200 rounded-full dark:bg-gray-700">
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
                      Close
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
