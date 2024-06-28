import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { skills } from '../../../config/personalConfig';

export default function About(){
    //OpenModal
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return(
        <>
      <div className="flex items-center justify-center my-5">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-uni-text hover:bg-uni-palette focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Description
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

                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="mb-5 text-lg font-medium leading-6 text-uni-text"
                  >
                    Path-Finding Algorithms
                  </Dialog.Title>

                  <div className="mx-12 ">
                    <p className='font-bold'>Queues and Stacks</p>
                    <p>Many algorithms and programs utilize data structures that allow for the algorithm to run more efficiently.
                    DFS and BFS use two of the most commonly used data structures – queues and stacks. Both are structured
                    containers for objects and each have two operations available for the insertion and removal of objects of
                    the data structure [2].
                    i)</p> Queues
                    Queues function according to the first-in-first-out (FIFO) principle. To put it into perspective, one can imagine
                    a queue in line for the opening of a new shopping mall. Whoever enters the queue first gets to enter the
                    mall first – the line operates on a first-come-first-serve principle. Similarly, it is helpful to think of the queue
                    as a narrow tunnel wide enough for only one object where the objects line up within, such as the diagram
                    shown in Figure 5. 
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-12 ">
                  a queue in line for the opening of a new shopping mall. Whoever enters the queue first gets to enter the
                    mall first – the line operates on a first-come-first-serve principle. Similarly, it is helpful to think of the queue
                    as a narrow tunnel wide enough for only one object where the objects line up within, such as the diagram
                    shown in Figure 5. 
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