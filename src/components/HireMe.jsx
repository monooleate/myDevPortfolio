import { FormattedMessage } from 'react-intl';

export default function HireMe(){
    return(
        <section className="py-10 w-full table relative bg-[url('../../assets/coding.json')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-uni-even/70">
            </div>
            <div className="container relative mx-auto">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">
                        <FormattedMessage
                            id = "hireMeMain"
                            defaultMessage="I Am Available For Freelancer Projects."
                        />
                    </h3>

                    <p className="text-uni-textIntro max-w-xl mx-auto text-[15px]">
                        <FormattedMessage
                            id = "hireMeText"
                            defaultMessage="With a robust engineering background, I bring a unique perspective to solving problems. Let's work together to bring your projects to life with precision and creativity."
                        />
                    </p>
                
                    <div className="relative mt-8">
                        <a href="#contact" className="px-2 py-1 bg-uni-palette hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-xl text-uni-text rounded-md">
                            <FormattedMessage
                                id = "hireMe"
                                defaultMessage="Hire Me"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}