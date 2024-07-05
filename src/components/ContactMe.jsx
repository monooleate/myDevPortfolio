import { useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import emailjs from '@emailjs/browser';



const ContactMe = () => {
    const form = useRef();
    const [sendingMail, setSendingMail] = useState(false);
    
    //OpenModal
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const sendEmail = (e) => {
      e.preventDefault();
      setSendingMail(true)
  
      emailjs
        .sendForm(
            'service_0gd1e5o', 
            'template_eoxpk69', 
            form.current, {
                publicKey: 'PzcQBDc6c2T1v5ss6',
            })
        .then(
          (result) => {
            document.getElementById("contactMe").reset();
            setSendingMail(false);
            setIsOpen(true)
          },
          (error) => {
            setSendingMail(false);
          },
        );
    };

    return(
        <section id='contact' className="text-uni-text pt-3">
            <div className="py-10 mx-auto w-[70%]">
                <h2 className="pb-4 text-4xl tracking-tight font-extrabold text-center text-uni-text">
                    Contact Me
                </h2>
                <p className="pb-8 lg:pb-16 font-light text-center text-uni-text text-xl">
                    Are you interested in what you see? Let me know.
                </p>
                <form ref={form} onSubmit={sendEmail} id="contactMe" className="space-y-3 text-black">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-uni-text">
                            Your email
                        </label>
                        <input type="email" id="email" name="user_email" className="shadow-sm bg-gray-200 border border-gray-300 text-sm text-left rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="janos@meszaros.com" required>
                        </input>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-uni-text ">
                            Subject
                        </label>
                        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-left bg-gray-2000 rounded-lg border bg-gray-200  border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Interested in..." required>
                        </input>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-uni-text ">
                            Your message
                        </label>
                        <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-200  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Let me know your thoughts...">
                        </textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-uni-text rounded-lg bg-uni-palette sm:w-fit hover:bg-uni-palette focus:ring-4 focus:outline-none focus:ring-primary-300">
                    {sendingMail ? (
                      <div>
                        <span
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending....
                      </div>
                    ) : (
                      <div>
                        Send Message
                      </div>
                    )}
                    </button>
                </form>
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

                    <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="mb-5 text-lg font-medium leading-6 text-uni-text"
                    >
                        Status
                    </Dialog.Title>

                    <div className="flex justify-center flex-col">
                        <p className='font-bold text-xl pb-3 text-center text-green-500'>Message Sent</p>
                        <p className='text-center text-md'>Thank you for your email! I have received your message and will be in touch soon.</p>                         
                    </div>

                    <div className="mt-4 flex justify-center">
                        <button
                        type="button"
                        className=" rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
        </section> 
        
    )
}

export default ContactMe
