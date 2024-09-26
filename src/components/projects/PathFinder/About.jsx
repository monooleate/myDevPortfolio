import { useState, useContext } from 'preact/hooks';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Context } from "../../../components/LanguageWrapper.jsx";

export default function About(){
    //OpenModal
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const context = useContext(Context);
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
                
                {context.locale.includes('en') ?                
                <div className="mx-12 ">
                  <h1>BFS and DFS Algorithms</h1>
                  <br />
                  <h2>Breadth-First Search (BFS)</h2>
                  <br />
                  <p><strong>BFS</strong> is an algorithm used to traverse or search through graph or tree data structures. It explores all the nodes at the present depth level before moving on to nodes at the next depth level. It uses a <strong>queue</strong> to keep track of the nodes to visit, ensuring that the algorithm visits the closest nodes first.</p>
                  <ul>
                      <li><strong>Characteristics:</strong>
                          <ul>
                              <li>Visits nodes level by level.</li>
                              <li>Uses a queue for storing nodes.</li>
                              <li>Guarantees finding the shortest path in an unweighted graph.</li>
                          </ul>
                      </li>
                      <li><strong>Use Cases:</strong>
                          <ul>
                              <li>Finding the shortest path in unweighted graphs.</li>
                              <li>Traversing graphs or trees where each node should be visited systematically.</li>
                          </ul>
                      </li>
                  </ul>
                  <br />
                  <h2>Depth-First Search (DFS)</h2>
                  <br />
                  <p><strong>DFS</strong> is an algorithm that explores as far as possible along each branch before backtracking, diving deep into one path before exploring others. It uses a <strong>stack</strong> (or recursion) to keep track of the nodes to visit, ensuring that it explores the depth of the graph before breadth.</p>
                  <ul>
                      <li><strong>Characteristics:</strong>
                          <ul>
                              <li>Goes deep into the graph/tree first.</li>
                              <li>Uses a stack (or recursion) for traversal.</li>
                              <li>May not find the shortest path.</li>
                          </ul>
                      </li>
                      <li><strong>Use Cases:</strong>
                          <ul>
                              <li>Solving problems that require exhaustive search (e.g., puzzles, mazes).</li>
                              <li>Traversing large trees or graphs where depth exploration is prioritized.</li>
                          </ul>
                      </li>
                  </ul>
                </div>
                :
                <div className="mx-12 ">
                  <h1>BFS és DFS algoritmusok</h1>
                  <br />
                  <h2>Szélességi keresés (BFS)</h2>
                  <br />
                  <p><strong>BFS</strong> egy algoritmus, amelyet gráfok vagy fák bejárására vagy keresésére használnak. A jelenlegi mélységi szint összes csomópontját vizsgálja meg, mielőtt továbblépne a következő szintre. Ehhez <strong>sor</strong>-t használ a meglátogatandó csomópontok követésére, így biztosítva, hogy a legközelebbi csomópontokat vizsgálja meg először.</p>
                  <ul>
                      <li><strong>Jellemzők:</strong>
                          <ul>
                              <li>A csomópontokat szintről szintre járja be.</li>
                              <li>Sort használ a csomópontok tárolására.</li>
                              <li>Garantáltan megtalálja a legrövidebb utat egy súlyozatlan gráfban.</li>
                          </ul>
                      </li>
                      <li><strong>Felhasználási esetek:</strong>
                          <ul>
                              <li>Legrövidebb út megtalálása súlyozatlan gráfokban.</li>
                              <li>Gráfok vagy fák bejárása, ahol az összes csomópontot rendszerezve kell meglátogatni.</li>
                          </ul>
                      </li>
                  </ul>
                  <br />
                  <h2>Mélységi keresés (DFS)</h2>
                  <br />
                  <p><strong>DFS</strong> egy algoritmus, amely minden ágon a lehető legmélyebbre megy, mielőtt visszalépne, egy utat teljesen bejárva, mielőtt más ágakat vizsgálna meg. A csomópontok nyomon követésére <strong>verem</strong>-et (vagy rekurziót) használ, így először a gráf mélységét járja be.</p>
                  <ul>
                      <li><strong>Jellemzők:</strong>
                          <ul>
                              <li>Először a gráf vagy fa mélységét járja be.</li>
                              <li>Verem (vagy rekurzió) használatával halad.</li>
                              <li>Nem garantált, hogy a legrövidebb utat találja meg.</li>
                          </ul>
                      </li>
                      <li><strong>Felhasználási esetek:</strong>
                          <ul>
                              <li>Olyan problémák megoldása, amelyek teljes keresést igényelnek (pl. rejtvények, labirintusok).</li>
                              <li>Nagy méretű fák vagy gráfok bejárása, ahol a mélységi felfedezés elsődleges.</li>
                          </ul>
                      </li>
                  </ul>
                </div>}

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