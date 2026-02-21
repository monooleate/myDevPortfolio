import { useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import emailjs from '@emailjs/browser';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
    const form = useRef();
    const [sendingMail, setSendingMail] = useState(false);
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)

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
          () => {
            document.getElementById("contactMe").reset();
            setSendingMail(false);
            setIsOpen(true)
          },
          () => {
            setSendingMail(false);
          },
        );
    };

    return (
        <section id='contact' className="text-uni-text section-padding">
            <div className="max-w-2xl mx-auto">
                <h2 className="pb-4 text-3xl sm:text-4xl tracking-tight font-bold text-center">
                    <FormattedMessage id="contactMe" defaultMessage="Contact Me" />
                </h2>
                <p className="pb-10 text-center text-uni-muted text-base">
                    <FormattedMessage id="contactMeIntro" defaultMessage="Are you interested in what you see? Let me know." />
                </p>

                <form ref={form} onSubmit={sendEmail} id="contactMe" className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-uni-text">
                            <FormattedMessage id="contactMeEmail" defaultMessage="Your email" />
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full px-4 py-3 rounded-xl bg-uni-card border border-uni-border text-uni-text text-sm focus:ring-2 focus:ring-uni-palette focus:border-uni-palette transition-all duration-300"
                            placeholder="email@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-uni-text">
                            <FormattedMessage id="contactMeSubject" defaultMessage="Subject" />
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-3 rounded-xl bg-uni-card border border-uni-border text-uni-text text-sm focus:ring-2 focus:ring-uni-palette focus:border-uni-palette transition-all duration-300"
                            placeholder="Interested in..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-uni-text">
                            <FormattedMessage id="contactMeMessage" defaultMessage="Your message" />
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            className="w-full px-4 py-3 rounded-xl bg-uni-card border border-uni-border text-uni-text text-sm focus:ring-2 focus:ring-uni-palette focus:border-uni-palette transition-all duration-300 resize-none"
                            placeholder="Let me know your thoughts..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-primary w-full sm:w-auto justify-center"
                        disabled={sendingMail}
                    >
                        {sendingMail ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <FormattedMessage id="contactMeSending" defaultMessage="Sending...." />
                            </>
                        ) : (
                            <>
                                <FormattedMessage id="contactMeSend" defaultMessage="Send Message" />
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Success Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <Dialog.Title as="h3" className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        <FormattedMessage id="contactMeSentTitle" defaultMessage="Message Sent" />
                                    </Dialog.Title>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        <FormattedMessage id="contactMeSent" />
                                    </p>
                                    <button
                                        type="button"
                                        className="btn-primary mt-6"
                                        onClick={closeModal}
                                    >
                                        <FormattedMessage id="contactMeClose" defaultMessage="Close" />
                                    </button>
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
