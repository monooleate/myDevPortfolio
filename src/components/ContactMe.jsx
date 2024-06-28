const ContactMe = () => {
    return(
        <section id='contact' className="bg-uni-odd text-uni-text pt-5">
            <div className="py-8 mx-auto w-[70%]">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-uni-text">
                    Contact Me
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-xl">
                    Are you interested in what you see? Let me know.
                </p>
                <form name="contact" className="space-y-3" netlify>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-uni-text">
                            Your email
                        </label>
                        <input type="email" id="email" className="shadow-sm bg-gray-200 border border-gray-300 text-uni-text text-sm text-left rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="janos@meszaros.com" required>
                        </input>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-uni-text ">
                            Subject
                        </label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-uni-text text-left bg-gray-2000 rounded-lg border bg-gray-200  border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Interested in..." required>
                        </input>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-uni-text ">
                            Your message
                        </label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-uni-text bg-gray-200  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Let me know your thoughts...">
                        </textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-uni-text rounded-lg bg-uni-fill sm:w-fit hover:bg-uni-palette focus:ring-4 focus:outline-none focus:ring-primary-300">
                        Send message
                    </button>
                </form>
            </div>
        </section> 
    )
}

export default ContactMe