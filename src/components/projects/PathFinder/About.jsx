import { useState, Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Dialog, Transition } from '@headlessui/react'

export default function About() {
    let [isOpen, setIsOpen] = useState(true)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    return (
        <>
            <div className="flex items-center justify-center py-5">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                    <FormattedMessage id="mazeDescription" defaultMessage="Description" />
                </button>
            </div>

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

                    <div className="fixed inset-0 top-16 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 sm:p-8 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                        <FormattedMessage id="mazeTitle" defaultMessage="Path-Finding Algorithms" />
                                    </Dialog.Title>

                                    <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                        {/* Queues & Stacks */}
                                        <div>
                                            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                <FormattedMessage id="mazeQueuesStacks" defaultMessage="Queues and Stacks" />
                                            </h4>
                                            <p>
                                                <FormattedMessage id="mazeQueuesStacksDesc" defaultMessage="Many algorithms utilize data structures that allow them to run more efficiently. DFS and BFS use two of the most commonly used data structures – queues and stacks. Both are structured containers for objects, each with two operations for insertion and removal." />
                                            </p>
                                        </div>

                                        {/* Queues */}
                                        <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4">
                                            <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-1"><FormattedMessage id="mazeQueueTitle" defaultMessage="Queues (FIFO)" /></h5>
                                            <p>
                                                <FormattedMessage id="mazeQueueDesc" defaultMessage="Queues follow the first-in-first-out principle – like a line at a store where whoever arrives first gets served first. Two operations: enqueue (insert at back) and dequeue (remove from front)." />
                                            </p>
                                        </div>

                                        {/* Stacks */}
                                        <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4">
                                            <h5 className="font-semibold text-amber-700 dark:text-amber-400 mb-1"><FormattedMessage id="mazeStackTitle" defaultMessage="Stacks (LIFO)" /></h5>
                                            <p>
                                                <FormattedMessage id="mazeStackDesc" defaultMessage="Stacks follow the last-in-first-out principle – like a stack of books where you can only add or remove from the top. Two operations: push (insert at top) and pop (remove from top)." />
                                            </p>
                                        </div>

                                        {/* BFS & DFS side by side */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4">
                                                <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-1"><FormattedMessage id="mazeBfsTitle" defaultMessage="Breadth-First Search (BFS)" /></h5>
                                                <p>
                                                    <FormattedMessage id="mazeBfsDesc" defaultMessage="BFS explores all neighbors at the current depth before moving deeper. It uses a queue and a parent dictionary to track relationships. When a node is dequeued, its unvisited neighbors are enqueued. BFS guarantees finding the shortest path in an unweighted graph." />
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4">
                                                <h5 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1"><FormattedMessage id="mazeDfsTitle" defaultMessage="Depth-First Search (DFS)" /></h5>
                                                <p>
                                                    <FormattedMessage id="mazeDfsDesc" defaultMessage="DFS explores as far as possible along each branch before backtracking. It uses a stack to push and pop nodes at each iteration. DFS is simpler but does not guarantee finding the shortest path." />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-center">
                                        <button
                                            type="button"
                                            className="rounded-xl bg-blue-100 dark:bg-blue-900/50 px-6 py-2.5 text-sm font-medium text-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors duration-300"
                                            onClick={closeModal}
                                        >
                                            <FormattedMessage id="mazeClose" defaultMessage="Close" />
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
