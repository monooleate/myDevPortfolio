import { useState, useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { educationDetailsEng, educationDetailsHun, experienceDetailsEng, experienceDetailsHun, skills } from '../config/personalConfig';
import { FormattedMessage } from 'react-intl';
import { Context } from "./LanguageWrapper";

const skillTooltips = {
  "Web Design": "Pixel-perfect layouts since day one",
  "JavaScript": "My best friend since 2024",
  "React JS": "Component wizardry in progress",
  "Tailwind CSS": "Utility-first and loving it",
  "VBA": "Taming spreadsheets since forever",
  "MS Automate": "Making robots do the boring stuff",
};

const Resume = () => {
  const context = useContext(Context);
  const isHu = context.locale.includes('hu');
  const educationDetails = isHu ? educationDetailsHun : educationDetailsEng;
  const experienceDetails = isHu ? experienceDetailsHun : experienceDetailsEng;

  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="section-padding text-uni-text">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl tracking-tight font-bold pb-10">
          <FormattedMessage id="resumeResume" defaultMessage="Resume" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} className="text-uni-palette" />
              <FormattedMessage id="resumeEducation" defaultMessage="Education" />
            </h3>
            <div className="space-y-4">
              {educationDetails.map((value, index) => (
                <div key={index} className="glass-card rounded-xl p-5 card-hover">
                  <span className="badge mb-2">{value.yearRange}</span>
                  <h4 className="font-semibold text-base mt-2">{value.title}</h4>
                  <p className="text-uni-palette text-sm">{value.place}</p>
                  <p className="text-uni-muted text-sm mt-2">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} className="text-uni-palette" />
              <FormattedMessage id="resumeExperience" defaultMessage="Experience" />
            </h3>
            <div className="space-y-4">
              {experienceDetails.map((value, index) => (
                <div key={index} className="glass-card rounded-xl p-5 card-hover">
                  <span className="badge mb-2">{value.yearRange}</span>
                  <h4 className="font-semibold text-base mt-2">{value.title}</h4>
                  <p className="text-uni-palette text-sm">{value.place}</p>
                  <p className="text-uni-muted text-sm mt-2">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-xl font-bold pt-10 pb-6 flex items-center gap-2">
          <FormattedMessage id="resumeCompetencies" defaultMessage="Competencies" />
        </h3>
        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 group cursor-default transition-transform duration-300 hover:scale-[1.02]"
              title={skillTooltips[skill.name] || ''}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm">{skill.name}</span>
                <span className="text-uni-palette text-sm font-bold">{skill.percent}%</span>
              </div>
              <div className="w-full bg-uni-border/50 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: inView ? skill.percent + "%" : "0%" }}
                />
              </div>
              <p className="text-xs text-uni-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skillTooltips[skill.name] || ''}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8 pb-4">
          <a href="/Janos_Meszaros_Resume_27_09_2024_Software.pdf" download className="btn-primary">
            <FormattedMessage id="resumeDownloadCV" defaultMessage="Download CV" />
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
