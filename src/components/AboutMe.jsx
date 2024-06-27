import Lottie from "lottie-react";
import animation from "../../src/assets/coding.json";

const AboutMe = () => {

    return (
        <section id="aboutme" className="text-uni-text text-xl bg-uni-odd pb-5">
            <div className="text-center text-4xl py-5">
                About Me
            </div>
            <div className="flex flex-wrap p-2 gap-5">
                <div className="mx-5 md:w-3/5">
                Hello! I’m Janos Meszaros,
                    <Lottie className="mx-auto h-40 w-40" animationData={animation} />
                    a chemical engineer turned full-stack developer with a passion for solving complex problems through innovative coding solutions. 
                    {/* With a solid foundation in engineering principles and a keen analytical mind, I bring a unique perspective to the field of software development. */}
                </div>
                <div className="my-5 mx-auto sm:my-auto md:w-1/4">
                    
                    <dl className="text-base text-uni-text divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Age</dt>
                            <dd className=" font-semibold">36</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Residence</dt>
                            <dd className="font-semibold">Hungarian</dd>
                        </div>
                        <div className="flex flex-col pt-3">
                            <dt className="mb-1 text-gray-500 dark:text-gray-400">Phone number</dt>
                            <dd className=" font-semibold">+00 123 456 789</dd>
                        </div>
                    </dl>

                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe