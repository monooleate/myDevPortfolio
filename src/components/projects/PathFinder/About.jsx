import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

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
      <div className="flex items-center justify-center py-5">
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
                    <p>Many algorithms and programs utilize data structures that allow for the algorithm to run more efficiently. DFS and BFS use two of the most commonly used data structures &ndash; queues and stacks. Both are structured containers for objects and each have two operations available for the insertion and removal of objects of the data structure.</p>
                    <p><b>Queues</b> Queues function according to the first-in-first-out (FIFO) principle. To put it into perspective, one can imagine a queue in line for the opening of a new shopping mall. Whoever enters the queue first gets to enter the mall first &ndash; the line operates on a first-come-first-serve principle. Similarly, it is helpful to think of the queue as a narrow tunnel wide enough for only one object where the objects line up within, such as the diagram shown</p>
                    <p><b>Queues</b> have two operations: enqueue and dequeue. Enqueuing inserts objects to the back of the queue, while dequeuing removes and returns the object at the front. Another operation commonly used is peeking, where the queue returns the object at the front without removing it from the queue.</p>
                    <p>Stacks Stacks function according to the last-in-first-out (LIFO) principle. A helpful analogy is to think of a stack of books; one can only add or remove books at the very top. Similarly, one can think of a stack as a large pit or tall container wide enough for only one object where the objects stack up within, such as the diagram shown in Figure 6. The last object to be pushed, or the object at the top, is commonly referred to as the &ldquo;top&rdquo;, while the objects underneath are referred to as the &ldquo;stack&rdquo;.</p>
                    <p>Stacks also have two operations: push and pop. Pushing inserts objects to the top of the stack to become the new top, while popping removes and returns the top while the next object becomes the new top. Stacks also have a peeking feature, where it returns the object at the top without removing it from the stack.</p>
                    <p><b>Depth First Search</b> DFS, or Depth First Search, is arguably the simpler of the two algorithms. Although both algorithms are driven by iterative processes, the rules determining each iteration is simpler for DFS. The fundamental mechanism for DFS, although perhaps not explicit, is often a stack that will push and/or pop nodes for each iteration. Any DFS program that doesn&rsquo;t explicitly have a stack in use will still usually run by a similar principle.</p>
                    <p><b>Breadth First Search</b> BFS, or Breadth First Search, works quite differently from DFS. The fundamental mechanisms for BFS are a queue and a dictionary named &ldquo;parents&rdquo;. For the sake of this algorithm, we will define a parent-child relationship between two nodes to be the following: If node A is selected and node B is enqueued into the queue via node A, then node A is the parent node and node B is the child node. In &ldquo;parents&rdquo;, both the keys and values will be singular nodes. The keys will be child nodes, and the values will be the parent node for the corresponding child node. Hence, if one looks up a node in &ldquo;parents&rdquo;, they will receive the parent node.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-12 ">

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