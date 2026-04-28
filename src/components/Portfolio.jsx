import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowUpRightFromSquare,
    faCloudSun,
    faCode,
    faPalette,
    faCalculator,
    faClock,
    faFlask,
    faTree,
    faShoppingCart,
    faGlobe,
    faStar,
    faFileExport,
    faRepeat,
    faHouse,
    faSnowflake,
    faScissors,
    faCalendarCheck,
    faTableCellsLarge,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';

const CATEGORIES = [
    { id: 'all',     labelKey: 'projCatAll',     icon: faLayerGroup },
    { id: 'saas',    labelKey: 'projCatSaas',    icon: faTableCellsLarge },
    { id: 'webapp',  labelKey: 'projCatWebApp',  icon: faCode },
    { id: 'website', labelKey: 'projCatWebsite', icon: faGlobe },
    { id: 'lab',     labelKey: 'projCatLab',     icon: faFlask },
];

const projects = [
    /* ---------- SaaS ---------- */
    {
        id: 'cutoptim',
        category: 'saas',
        titleKey: 'projCutoptimTitle',
        descKey: 'projCutoptimDesc',
        href: 'https://cutoptim.com',
        domain: 'cutoptim.com',
        techStack: ['React', 'Optimization', 'SaaS'],
        icon: faScissors,
        color: 'from-violet-500 to-fuchsia-500',
        featured: true,
    },
    {
        id: 'grabit',
        category: 'saas',
        titleKey: 'projGrabitTitle',
        descKey: 'projGrabitDesc',
        href: 'https://grabit.hu',
        domain: 'grabit.hu',
        techStack: ['Booking', 'Calendar', 'SaaS'],
        icon: faCalendarCheck,
        color: 'from-cyan-500 to-blue-500',
        featured: true,
    },
    {
        id: 'wondersheets',
        category: 'saas',
        titleKey: 'projWondersheetsTitle',
        descKey: 'projWondersheetsDesc',
        href: 'https://wondersheets.eu',
        domain: 'wondersheets.eu',
        techStack: ['Sheets', 'Automation', 'SaaS'],
        icon: faTableCellsLarge,
        color: 'from-emerald-500 to-teal-500',
        featured: true,
    },

    /* ---------- Web Apps ---------- */
    {
        id: 'seotudas',
        category: 'webapp',
        titleKey: 'business1Title',
        descKey: 'business1Desc',
        href: 'https://seotudas.hu',
        domain: 'seotudas.hu',
        techStack: ['SEO', 'Content', '16 Tools'],
        icon: faGlobe,
        color: 'from-emerald-500 to-green-600',
        featured: true,
    },
    {
        id: 'matekmegoldasok',
        category: 'webapp',
        titleKey: 'business6Title',
        descKey: 'business6Desc',
        href: 'https://matekmegoldasok.hu',
        domain: 'matekmegoldasok.hu',
        techStack: ['Education', 'Math'],
        icon: faCalculator,
        color: 'from-cyan-500 to-blue-600',
        featured: true,
    },
    {
        id: 'konvertalo',
        category: 'webapp',
        titleKey: 'business7Title',
        descKey: 'business7Desc',
        href: 'https://konvertalo.hu',
        techStack: ['Converter', 'Browser-only'],
        icon: faFileExport,
        color: 'from-teal-500 to-emerald-600',
    },
    {
        id: 'instrumenteonline',
        category: 'webapp',
        titleKey: 'business8Title',
        descKey: 'business8Desc',
        href: 'https://instrumenteonline.ro',
        techStack: ['Converter', 'RO'],
        icon: faRepeat,
        color: 'from-orange-500 to-red-600',
    },

    /* ---------- Websites ---------- */
    {
        id: 'hazepitesikalauz',
        category: 'website',
        titleKey: 'business9Title',
        descKey: 'business9Desc',
        href: 'https://hazepitesikalauz.hu',
        techStack: ['Guide', 'Calculators'],
        icon: faHouse,
        color: 'from-yellow-500 to-amber-600',
    },
    {
        id: 'klimamfc',
        category: 'website',
        titleKey: 'projKlimamfcTitle',
        descKey: 'projKlimamfcDesc',
        href: 'https://klimamfc.hu',
        techStack: ['HVAC', 'Service'],
        icon: faSnowflake,
        color: 'from-sky-500 to-cyan-600',
    },
    {
        id: 'elviratuzep',
        category: 'website',
        titleKey: 'business2Title',
        descKey: 'business2Desc',
        href: 'https://elviratuzep.hu',
        techStack: ['E-commerce', 'Lumber'],
        icon: faTree,
        color: 'from-amber-500 to-orange-600',
    },
    {
        id: 'gigawood',
        category: 'website',
        titleKey: 'business3Title',
        descKey: 'business3Desc',
        href: 'https://gigawood.hu',
        techStack: ['E-commerce', 'Garden'],
        icon: faShoppingCart,
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'lemnimpregnat',
        category: 'website',
        titleKey: 'business4Title',
        descKey: 'business4Desc',
        href: 'https://lemnimpregnat.ro',
        techStack: ['E-commerce', 'RO'],
        icon: faGlobe,
        color: 'from-purple-500 to-violet-600',
    },
    {
        id: 'kamy',
        category: 'website',
        titleKey: 'business5Title',
        descKey: 'business5Desc',
        href: 'https://kamy.cc',
        techStack: ['Brand', 'Creative'],
        icon: faStar,
        color: 'from-rose-500 to-pink-600',
    },

    /* ---------- Lab / Hobby ---------- */
    {
        id: 'lab-mydev',
        category: 'lab',
        titleKey: 'portfolio1',
        descKey: 'portfolio1Intro',
        actionKey: 'portfolio1Action',
        href: 'https://github.com/monooleate/myDevPortfolio',
        techStack: ['React', 'Tailwind', 'Vite'],
        icon: faCode,
        color: 'from-blue-500 to-cyan-500',
        isGithub: true,
    },
    {
        id: 'lab-pathfinder',
        category: 'lab',
        titleKey: 'portfolio2',
        descKey: 'portfolio2Intro',
        actionKey: 'portfolio2Action',
        route: '/projects/pathfinder',
        techStack: ['React', 'BFS', 'DFS'],
        icon: faCode,
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 'lab-weather',
        category: 'lab',
        titleKey: 'portfolio3',
        descKey: 'portfolio3Intro',
        actionKey: 'portfolio3Action',
        route: '/projects/weather',
        techStack: ['React', 'OpenWeatherMap'],
        icon: faCloudSun,
        color: 'from-sky-500 to-blue-500',
    },
    {
        id: 'lab-markdown',
        category: 'lab',
        titleKey: 'portfolio4',
        descKey: 'portfolio4Intro',
        actionKey: 'portfolio4Action',
        route: '/projects/markdown',
        techStack: ['React', 'Markdown'],
        icon: faCode,
        color: 'from-emerald-500 to-teal-500',
    },
    {
        id: 'lab-colors',
        category: 'lab',
        titleKey: 'portfolio5',
        descKey: 'portfolio5Intro',
        actionKey: 'portfolio5Action',
        route: '/projects/colors',
        techStack: ['React', 'HSL'],
        icon: faPalette,
        color: 'from-orange-500 to-red-500',
    },
    {
        id: 'lab-calculator',
        category: 'lab',
        titleKey: 'portfolio6',
        descKey: 'portfolio6Intro',
        actionKey: 'portfolio6Action',
        route: '/projects/calculator',
        techStack: ['React', 'JavaScript'],
        icon: faCalculator,
        color: 'from-indigo-500 to-purple-500',
    },
    {
        id: 'lab-pomodoro',
        category: 'lab',
        titleKey: 'portfolio7',
        descKey: 'portfolio7Intro',
        actionKey: 'portfolio7Action',
        route: '/projects/pomodoro',
        techStack: ['React', 'SVG'],
        icon: faClock,
        color: 'from-rose-500 to-pink-500',
    },
    {
        id: 'lab-molecular',
        category: 'lab',
        titleKey: 'portfolio8',
        descKey: 'portfolio8Intro',
        actionKey: 'portfolio8Action',
        route: '/projects/molecular',
        techStack: ['React', 'Chemistry'],
        icon: faFlask,
        color: 'from-teal-500 to-emerald-500',
    },
];

const CATEGORY_BADGE_LABEL = {
    saas: 'SaaS',
    webapp: 'Web App',
    website: 'Website',
    lab: 'Lab',
};

function ProjectCard({ project, lang }) {
    const [imgError, setImgError] = useState(false);
    const isInternal = !!project.route;
    const href = isInternal ? `/${lang}${project.route}` : project.href;
    const target = isInternal ? undefined : '_blank';
    const rel = isInternal ? undefined : 'noopener noreferrer';

    const showFavicon = project.featured && project.domain && !imgError;
    const faviconUrl = project.domain
        ? `https://www.google.com/s2/favicons?domain=${project.domain}&sz=128`
        : null;

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className="group relative block rounded-2xl"
        >
            {/* Soft gradient halo on hover */}
            <div
                aria-hidden="true"
                className={`
                    absolute -inset-px rounded-2xl bg-gradient-to-br ${project.color}
                    opacity-0 group-hover:opacity-60 blur-md
                    transition-opacity duration-500
                    pointer-events-none
                `}
            />

            <article
                className="
                    relative h-full flex flex-col
                    glass-card rounded-2xl p-6
                    transition-all duration-300
                    group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-500/10
                    dark:group-hover:shadow-indigo-500/10
                    overflow-hidden
                "
            >
                {/* Animated shimmer */}
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none absolute inset-0
                        bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5
                        -translate-x-full group-hover:translate-x-full
                        transition-transform duration-1000
                    "
                />

                {/* Top row: icon/favicon + category badge */}
                <div className="relative flex items-start justify-between gap-3 mb-4">
                    {showFavicon ? (
                        <div className="
                            w-12 h-12 rounded-xl
                            bg-white dark:bg-slate-900
                            ring-1 ring-uni-border
                            shadow-md
                            flex items-center justify-center
                            overflow-hidden
                            transition-transform duration-300
                            group-hover:scale-110
                        ">
                            <img
                                src={faviconUrl}
                                alt=""
                                loading="lazy"
                                onError={() => setImgError(true)}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                    ) : (
                        <div className={`
                            w-12 h-12 rounded-xl bg-gradient-to-br ${project.color}
                            flex items-center justify-center shadow-lg
                            transition-transform duration-300 group-hover:scale-110
                        `}>
                            <FontAwesomeIcon icon={project.icon || faCode} className="text-white text-lg" />
                        </div>
                    )}

                    <span className="
                        inline-flex items-center
                        text-[11px] font-medium tracking-wide uppercase
                        px-2.5 py-1 rounded-full
                        bg-uni-palette/10 text-uni-palette
                        ring-1 ring-uni-palette/20
                    ">
                        {CATEGORY_BADGE_LABEL[project.category]}
                    </span>
                </div>

                {/* Title */}
                <h3 className="
                    relative text-lg font-semibold
                    text-uni-text group-hover:text-uni-palette
                    transition-colors duration-300
                ">
                    <FormattedMessage id={project.titleKey} />
                </h3>

                {/* Description */}
                <p className="relative text-uni-muted text-sm mt-2 leading-relaxed">
                    <FormattedMessage id={project.descKey} />
                </p>

                {/* Tech stack */}
                {project.techStack && project.techStack.length > 0 && (
                    <div className="relative flex flex-wrap gap-1.5 mt-4">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    text-[11px] font-medium
                                    px-2 py-0.5 rounded-md
                                    bg-uni-bg/60 text-uni-muted
                                    ring-1 ring-uni-border
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Spacer pushes CTA to bottom for uniform card height */}
                <div className="flex-grow" />

                {/* CTA */}
                <div className="
                    relative mt-4 pt-4 border-t border-uni-border/60
                    flex items-center gap-2 text-sm font-medium text-uni-palette
                ">
                    {project.isGithub ? (
                        <>
                            <FontAwesomeIcon icon={faGithub} />
                            <FormattedMessage id={project.actionKey || 'projVisit'} defaultMessage="Visit" />
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                className="ml-auto text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </>
                    ) : isInternal ? (
                        <>
                            <FormattedMessage id={project.actionKey || 'projOpen'} defaultMessage="Open" />
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </>
                    ) : (
                        <>
                            <FormattedMessage id="projVisit" defaultMessage="Visit" />
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                className="ml-auto text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </>
                    )}
                </div>
            </article>
        </a>
    );
}

export default function Portfolio() {
    const { lang } = useParams();
    const currentLang = lang || 'en';
    const [activeCategory, setActiveCategory] = useState('all');

    const counts = useMemo(() => {
        const c = { all: projects.length };
        for (const p of projects) c[p.category] = (c[p.category] || 0) + 1;
        return c;
    }, []);

    const filtered = useMemo(() => {
        if (activeCategory === 'all') return projects;
        return projects.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="portfolio" className="section-padding bg-uni-odd">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center pb-8">
                    <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-uni-text">
                        <FormattedMessage id="portfolio" defaultMessage="Portfolio" />
                    </h2>
                    <p className="text-uni-muted max-w-xl mx-auto mt-3 text-base">
                        <FormattedMessage
                            id="portfolioIntro"
                            defaultMessage="Personal and client projects — from SaaS products to websites and lab experiments."
                        />
                    </p>
                </div>

                {/* Filter pills */}
                <div
                    role="tablist"
                    aria-label="Project categories"
                    className="flex flex-wrap items-center justify-center gap-2 pb-8"
                >
                    {CATEGORIES.map((cat) => {
                        const active = activeCategory === cat.id;
                        const count = counts[cat.id] || 0;
                        if (count === 0) return null;
                        return (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={active}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                                    inline-flex items-center gap-2
                                    px-4 py-2 rounded-full
                                    text-sm font-medium
                                    transition-all duration-300
                                    focus:outline-none focus:ring-2 focus:ring-uni-palette focus:ring-offset-2 focus:ring-offset-uni-odd
                                    ${active
                                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25 scale-[1.03]'
                                        : 'bg-uni-card text-uni-text border border-uni-border hover:border-uni-palette/50 hover:bg-uni-palette/5'}
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={cat.icon}
                                    className={`text-xs ${active ? 'text-white/90' : 'text-uni-palette'}`}
                                />
                                <FormattedMessage id={cat.labelKey} />
                                <span
                                    className={`
                                        text-[11px] tabular-nums px-1.5 rounded-full
                                        ${active
                                            ? 'bg-white/20 text-white'
                                            : 'bg-uni-palette/10 text-uni-palette'}
                                    `}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {filtered.map((p) => (
                        <ProjectCard key={p.id} project={p} lang={currentLang} />
                    ))}
                </div>
            </div>
        </section>
    );
}
