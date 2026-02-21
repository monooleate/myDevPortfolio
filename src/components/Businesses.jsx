import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faSearch, faTree, faShoppingCart, faGlobe, faStar, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

const businesses = [
    {
        id: 1,
        titleKey: 'business1Title',
        descKey: 'business1Desc',
        url: 'https://seotudas.hu',
        icon: faSearch,
        color: 'from-emerald-500 to-green-600',
    },
    {
        id: 2,
        titleKey: 'business2Title',
        descKey: 'business2Desc',
        url: 'https://elviratuzep.hu',
        icon: faTree,
        color: 'from-amber-500 to-orange-600',
    },
    {
        id: 3,
        titleKey: 'business3Title',
        descKey: 'business3Desc',
        url: 'https://gigawood.hu',
        icon: faShoppingCart,
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 4,
        titleKey: 'business4Title',
        descKey: 'business4Desc',
        url: 'https://lemnimpregnat.ro',
        icon: faGlobe,
        color: 'from-purple-500 to-violet-600',
    },
    {
        id: 5,
        titleKey: 'business5Title',
        descKey: 'business5Desc',
        url: 'https://kamy.cc',
        icon: faStar,
        color: 'from-rose-500 to-pink-600',
    },
    {
        id: 6,
        titleKey: 'business6Title',
        descKey: 'business6Desc',
        url: 'https://matekmegoldasok.hu',
        icon: faCalculator,
        color: 'from-cyan-500 to-blue-600',
    },
];

export default function Businesses() {
    return (
        <section id="businesses" className="section-padding">
            <div className="max-w-5xl mx-auto">
                <div className="text-center pb-10">
                    <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-uni-text">
                        <FormattedMessage id="businessesTitle" defaultMessage="Projects & Businesses" />
                    </h2>
                    <p className="text-uni-muted max-w-xl mx-auto mt-3 text-base">
                        <FormattedMessage id="businessesIntro" defaultMessage="Websites and digital products I've built." />
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {businesses.map((biz) => (
                        <a
                            key={biz.id}
                            href={biz.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group glass-card rounded-2xl p-6 card-hover block"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${biz.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                                <FontAwesomeIcon icon={biz.icon} className="text-white text-lg" />
                            </div>

                            <h3 className="text-lg font-semibold text-uni-text group-hover:text-uni-palette transition-colors duration-300">
                                <FormattedMessage id={biz.titleKey} />
                            </h3>

                            <p className="text-uni-muted text-sm mt-2 leading-relaxed">
                                <FormattedMessage id={biz.descKey} />
                            </p>

                            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-uni-palette">
                                <FormattedMessage id="businessVisit" defaultMessage="Visit Site" />
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
