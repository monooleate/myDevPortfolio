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
            {/* Decorative gradient halo on hover */}
            <div
                aria-hidden="true"
                className={`
                    absolute -inset-px rounded-2xl bg-gradient-to-br ${book.color}
                    opacity-0 group-hover:opacity-30 blur-md
                    transition-opacity duration-500 pointer-events-none
                `}
            />

            {/* Slim gradient accent strip on the left edge */}
            <div
                aria-hidden="true"
                className={`
                    absolute left-0 top-0 bottom-0 w-1
                    bg-gradient-to-b ${book.spine}
                    transition-all duration-500
                    group-hover:w-1.5
                `}
            />

            {/* Watermark year — large, faded, top-right */}
            <div
                aria-hidden="true"
                className={`
                    pointer-events-none absolute -top-2 -right-1
                    text-7xl md:text-8xl font-black leading-none
                    bg-gradient-to-br ${book.color}
                    bg-clip-text text-transparent
                    opacity-[0.07] dark:opacity-[0.10]
                    select-none
                    transition-opacity duration-500
                    group-hover:opacity-[0.14]
                `}
            >
                {book.year}
            </div>

            <div className="relative p-6 md:p-8">
                {/* Top row: book emblem + tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`
                        flex items-center justify-center
                        w-10 h-10 rounded-xl
                        bg-gradient-to-br ${book.color}
                        shadow-md
                        transition-transform duration-500
                        group-hover:scale-105 group-hover:-rotate-6
                    `}>
                        <FontAwesomeIcon icon={faBookOpen} className="text-white text-sm" />
                    </div>

                    <span className="
                        inline-flex items-center
                        text-[10px] font-semibold tracking-widest uppercase
                        px-2.5 py-1 rounded-full
                        bg-uni-palette/10 text-uni-palette
                        ring-1 ring-uni-palette/20
                    ">
                        {tag}
                    </span>
                </div>

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
                <blockquote className={`
                    relative mt-5 pl-5
                    text-sm text-uni-text/90 italic leading-relaxed
                    before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1
                    before:w-[2px] before:rounded-full
                    before:bg-gradient-to-b ${book.spine}
                `}>
                    <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="absolute -left-1 -top-2 text-uni-palette/30 text-xs bg-uni-card px-1"
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
