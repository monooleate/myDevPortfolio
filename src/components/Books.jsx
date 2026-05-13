import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faQuoteLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Context } from './LanguageWrapper';
import booksData from '../assets/books.json';

function BookCard({ book, isHu }) {
    const tag = isHu ? book.tagHu : book.tagEn;
    const quote = isHu ? book.quoteHu : book.quoteEn;
    const why = isHu ? book.whyHu : book.whyEn;
    const takeaways = isHu ? book.takeawaysHu : book.takeawaysEn;

    return (
        <article
            className="
                group relative
                glass-card rounded-2xl
                overflow-hidden
                transition-all duration-500
                hover:shadow-xl hover:shadow-blue-500/10
                dark:hover:shadow-indigo-500/10
                hover:-translate-y-1
            "
        >
            {/* Decorative gradient halo */}
            <div
                aria-hidden="true"
                className={`
                    absolute -inset-px rounded-2xl bg-gradient-to-br ${book.color}
                    opacity-0 group-hover:opacity-30 blur-md
                    transition-opacity duration-500 pointer-events-none
                `}
            />

            <div className="relative flex flex-col sm:flex-row">
                {/* Book spine / cover preview */}
                <div className="relative shrink-0 sm:w-40 md:w-48">
                    <div className={`
                        relative h-44 sm:h-full min-h-[220px]
                        bg-gradient-to-br ${book.spine}
                        flex items-center justify-center
                        overflow-hidden
                    `}>
                        {/* Spine "pages" effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white/30" />
                        <div className="absolute right-1.5 top-0 bottom-0 w-0.5 bg-black/20" />

                        {/* Subtle shimmer */}
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none absolute inset-0
                                bg-gradient-to-br from-white/20 via-transparent to-transparent
                            "
                        />

                        <FontAwesomeIcon
                            icon={faBookOpen}
                            className="
                                relative text-white text-4xl drop-shadow-lg
                                transition-transform duration-500
                                group-hover:scale-110 group-hover:rotate-6
                            "
                        />

                        {/* Year badge */}
                        <span className="
                            absolute bottom-3 left-3
                            text-[10px] font-bold tracking-wider
                            text-white/90 bg-black/30 backdrop-blur-sm
                            px-2 py-0.5 rounded-full
                        ">
                            {book.year}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-7">
                    {/* Tag */}
                    <span className="
                        inline-flex items-center
                        text-[11px] font-medium tracking-wide uppercase
                        px-2.5 py-1 rounded-full mb-3
                        bg-uni-palette/10 text-uni-palette
                        ring-1 ring-uni-palette/20
                    ">
                        {tag}
                    </span>

                    {/* Title */}
                    <h3 className="
                        text-lg md:text-xl font-bold leading-snug
                        text-uni-text group-hover:text-uni-palette
                        transition-colors duration-300
                    ">
                        {book.title}
                    </h3>

                    {/* Author */}
                    <p className="text-sm italic text-uni-muted mt-1">
                        {book.author}
                    </p>

                    {/* Pull quote */}
                    <blockquote className="
                        relative mt-4 pl-5
                        border-l-2 border-uni-palette/40
                        text-sm text-uni-text/90 italic leading-relaxed
                    ">
                        <FontAwesomeIcon
                            icon={faQuoteLeft}
                            className="absolute -left-2 -top-1 text-uni-palette/30 text-xs bg-uni-card px-1"
                        />
                        “{quote}”
                    </blockquote>

                    {/* Why it mattered */}
                    <div className="mt-5">
                        <h4 className="
                            text-xs font-semibold uppercase tracking-wider
                            text-uni-palette mb-2
                        ">
                            <FormattedMessage id="booksWhy" defaultMessage="Why it mattered" />
                        </h4>
                        <p className="text-sm text-uni-muted leading-relaxed">
                            {why}
                        </p>
                    </div>

                    {/* Key takeaways */}
                    {takeaways && takeaways.length > 0 && (
                        <div className="mt-5">
                            <h4 className="
                                text-xs font-semibold uppercase tracking-wider
                                text-uni-palette mb-2
                            ">
                                <FormattedMessage id="booksTakeaways" defaultMessage="Key takeaways" />
                            </h4>
                            <ul className="space-y-1.5">
                                {takeaways.map((t, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-uni-text/90">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-uni-palette text-xs mt-1 shrink-0"
                                        />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Books() {
    const context = useContext(Context);
    const isHu = context.locale.includes('hu');

    return (
        <section id="books" className="section-padding text-uni-text">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center pb-10">
                    <div className="
                        inline-flex items-center gap-2
                        text-xs font-semibold uppercase tracking-widest
                        text-uni-palette
                        px-3 py-1 rounded-full
                        bg-uni-palette/10 ring-1 ring-uni-palette/20
                        mb-4
                    ">
                        <FontAwesomeIcon icon={faBookOpen} className="text-[10px]" />
                        <FormattedMessage id="booksTag" defaultMessage="Reading shelf" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl tracking-tight font-bold">
                        <FormattedMessage id="booksTitle" defaultMessage="Favorite Books" />
                    </h2>
                    <p className="text-uni-muted max-w-xl mx-auto mt-3 text-base">
                        <FormattedMessage
                            id="booksIntro"
                            defaultMessage="Books that genuinely shaped how I build software and think about products."
                        />
                    </p>
                </div>

                {/* Bookshelf */}
                <div className="grid grid-cols-1 gap-6">
                    {booksData.map((book) => (
                        <BookCard key={book.id} book={book} isHu={isHu} />
                    ))}
                </div>
            </div>
        </section>
    );
}
