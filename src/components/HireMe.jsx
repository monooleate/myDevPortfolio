
export default function HireMe(){
    return(
        <section className="py-10 w-full table relative bg-[url('../../assets/coding.json')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-uni-even/70">
            </div>
            <div className="container relative mx-auto">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">I Am Available For Freelancer Projects.</h3>

                    <p className="text-white/80 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                
                    <div className="relative mt-8">
                        <a href="#contact" className="px-2 py-1 bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-xl text-white rounded-md">Hire Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}