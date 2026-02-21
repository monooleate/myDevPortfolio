import { FormattedMessage } from 'react-intl';

export default function HireMe() {
    return (
        <section className="relative py-16 w-full overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

            <div className="relative max-w-2xl mx-auto px-4 text-center">
                <h2 className="mb-4 text-2xl md:text-3xl text-white font-bold">
                    <FormattedMessage id="hireMeMain" defaultMessage="I Am Available For Freelancer Projects." />
                </h2>

                <p className="text-blue-100/80 max-w-xl mx-auto text-base leading-relaxed">
                    <FormattedMessage id="hireMeText" defaultMessage="Let's work together to bring your projects to life." />
                </p>

                <div className="mt-8">
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-slate-900 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/25 hover:scale-105 active:scale-95">
                        <FormattedMessage id="hireMe" defaultMessage="Hire Me" />
                    </a>
                </div>
            </div>
        </section>
    )
}
