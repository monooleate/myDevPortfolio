import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { skills } from '../config/personalConfig';

export default function MyModal({ isOpen, closeModal, openModal }) {

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-uni-text hover:bg-uni-palette focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
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
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-gray-200">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              > 

                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-uni-text"
                  >
                    Certificates
                  </Dialog.Title>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-12 ">
                    {skills.length > 0 &&
                      skills.map((skill, index) => (
                        <div key={index} className="">
                          <p
                            className="font-bold text-uni-text text-start mb-2 text-base"
                          >
                            {skill.name}{" "}
                            <span className="text-uni-text float-end">{skill.percent}%</span>
                          </p>

                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-uni-palette h-2.5 rounded-full" style={{ width: skill.percent + "%" }}></div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-12 ">
                    {skills.length > 0 &&
                      skills.map((skill, index) => (
                        <div key={index} className="">
                          <p
                            className="font-bold text-uni-text text-start mb-2 text-base"
                          >
                            {skill.name}{" "}
                            <span className="text-uni-text float-end">{skill.percent}%</span>
                          </p>

                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-uni-palette h-2.5 rounded-full" style={{ width: skill.percent + "%" }}></div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
