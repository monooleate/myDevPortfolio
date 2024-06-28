
/* import resumeFile from "../documents/resume.pdf"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { educationDetails, experienceDetails, skills } from '../config/personalConfig';

const Resume = () => {

  return (
    <section id="resume" className="pt-5 text-uni-text text-xl">
        <div className="text-center text-4xl tracking-tight font-extrabold pt-10 pb-8">
            Resume
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
          {/* My Education */}
          <div className="mx-5 md:w-1/2">
            <h2 className="text-2xl font-bold mb-8">
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div key={index} className="rounded ml-5 relative border-s border-gray-200">
                  <p className="bg-uni-palette text-base w-24 my-3 ml-6 rounded-md">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-uni-fill dark:bg-blue-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-800" viewBox="0 0 512 512"><title>Book</title>
                        <path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" strokeLinecap="round" strokeLinejoin="round" className="ionicon-fill-none ionicon-strokeWidth">
                        </path>
                      </svg>
                    </span>
                    {value.yearRange}
                  </p>
                  <h3 className="text-uni-text text-md text-left ml-6">
                    {value.title}
                  </h3>
                  <p className="text-uni-palette text-sm pb-2 text-left ml-6">
                    {value.place}
                  </p>
                  <p className="mb-0 text-base text-left ml-6">
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="mx-5 md:w-1/2">
            <h2
              className="text-2xl font-bold mb-8">
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div key={index} className="rounded ml-5 relative border-s border-gray-200">
                  <p className="bg-uni-palette text-base w-24 my-3 ml-6 rounded-md">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-uni-fill dark:bg-blue-900">
                      <svg className="w-3 h-3 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                    </span>
                    {value.yearRange}
                  </p>
                  <h3 className="text-uni-text text-md text-left ml-6">
                    {value.title}
                  </h3>
                  <p className="text-uni-palette text-sm pb-2 text-left ml-6">
                    {value.place}
                  </p>
                  <p className="mb-0 text-base text-left ml-6" >
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-2xl font-bold py-8">
          My Competencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-14">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="">
                <p
                  className="font-bold text-uni-text text-start mb-2 text-base"
                >
                  {skill.name}{" "}
                  <span className="text-uni-text float-end">{skill.percent}%</span>
                </p>

                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-uni-palette h-2.5 rounded-full" style={{ width: skill.percent + "%" }}></div>
                </div>
              </div>
            ))}
        </div>
        <div className="h-32 pt-2">
          <a
            href={'#first'}
            download
            className="flex justify-center items-center gap-2 text-uni-textIntro bg-uni-palette rounded-md mt-8 w-36 text-base h-12 mx-auto"
            >
            Download CV
            <svg className='w-6 h-6 cursor-pointer'>
                <FontAwesomeIcon icon={faFileArrowDown} />
            </svg>
          </a>
        </div>
    </section>
  );
};

export default Resume;
