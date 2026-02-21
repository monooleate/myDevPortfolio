import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCloudSun, faCode, faPalette, faCalculator, faClock, faFlask } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';

const projects = [
    {
        id: 1,
        titleKey: 'portfolio1',
        descKey: 'portfolio1Intro',
        actionKey: 'portfolio1Action',
        icon: faCode,
        color: 'from-blue-500 to-cyan-500',
        href: 'https://github.com/monooleate/myDevPortfolio',
        external: true,
        techStack: ['React', 'Tailwind', 'Vite'],
        github: 'https://github.com/monooleate/myDevPortfolio',
    },
    {
        id: 2,
        titleKey: 'portfolio2',
        descKey: 'portfolio2Intro',
        actionKey: 'portfolio2Action',
        icon: faCode,
        color: 'from-purple-500 to-pink-500',
        route: '/projects/pathfinder',
        techStack: ['React', 'BFS', 'DFS'],
    },
    {
        id: 3,
        titleKey: 'portfolio3',
        descKey: 'portfolio3Intro',
        actionKey: 'portfolio3Action',
        icon: faCloudSun,
        color: 'from-sky-500 to-blue-500',
        route: '/projects/weather',
        techStack: ['React', 'OpenWeatherMap API'],
    },
    {
        id: 4,
        titleKey: 'portfolio4',
        descKey: 'portfolio4Intro',
        actionKey: 'portfolio4Action',
        icon: faCode,
        color: 'from-emerald-500 to-teal-500',
        route: '/projects/markdown',
        techStack: ['React', 'Markdown'],
    },
    {
        id: 5,
        titleKey: 'portfolio5',
        descKey: 'portfolio5Intro',
        actionKey: 'portfolio5Action',
        icon: faPalette,
        color: 'from-orange-500 to-red-500',
        route: '/projects/colors',
        techStack: ['React', 'HSL Colors'],
    },
    {
        id: 6,
        titleKey: 'portfolio6',
        descKey: 'portfolio6Intro',
        actionKey: 'portfolio6Action',
        icon: faCalculator,
        color: 'from-indigo-500 to-purple-500',
        route: '/projects/calculator',
        techStack: ['React', 'JavaScript'],
    },
    {
        id: 7,
        titleKey: 'portfolio7',
        descKey: 'portfolio7Intro',
        actionKey: 'portfolio7Action',
        icon: faClock,
        color: 'from-rose-500 to-pink-500',
        route: '/projects/pomodoro',
        techStack: ['React', 'SVG Animation'],
    },
    {
        id: 8,
        titleKey: 'portfolio8',
        descKey: 'portfolio8Intro',
        actionKey: 'portfolio8Action',
        icon: faFlask,
        color: 'from-teal-500 to-emerald-500',
        route: '/projects/molecular',
        techStack: ['React', 'Chemistry', 'SVG'],
    },
];

function ProjectCard({ project, lang }) {
    const href = project.external ? project.href : `/${lang}${project.route}`;
    const target = project.external ? '_blank' : undefined;
    const rel = project.external ? 'noopener noreferrer' : undefined;

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className="group glass-card rounded-2xl p-6 card-hover block"
        >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                <FontAwesomeIcon icon={project.icon} className="text-white text-lg" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-uni-text group-hover:text-uni-palette transition-colors duration-300">
                <FormattedMessage id={project.titleKey} />
            </h3>

            {/* Description */}
            <p className="text-uni-muted text-sm mt-2 leading-relaxed">
                <FormattedMessage id={project.descKey} />
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-md bg-uni-palette/10 text-uni-palette font-medium">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Action */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-uni-palette">
                {project.github && (
                    <FontAwesomeIcon icon={faGithub} className="mr-1" />
                )}
                <FormattedMessage id={project.actionKey} />
                <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </a>
    );
}

export default function Portfolio() {
    const { lang } = useParams();
    const currentLang = lang || 'en';

    return (
        <section id="portfolio" className="section-padding bg-uni-odd">
            <div className="max-w-5xl mx-auto">
                <div className="text-center pb-10">
                    <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-uni-text">
                        <FormattedMessage id="portfolio" defaultMessage="Hobby Portfolio" />
                    </h2>
                    <p className="text-uni-muted max-w-xl mx-auto mt-3 text-base">
                        <FormattedMessage id="portfolioIntro" defaultMessage="Learning through projects." />
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} lang={currentLang} />
                    ))}
                </div>
            </div>
        </section>
    )
}
