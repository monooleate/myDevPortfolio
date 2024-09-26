import { Helmet } from 'react-helmet'

export default function SEO({title, description, type, keywords, metaTitle}) {
    return (
        <Helmet>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <title>{title}</title>
            <meta name="title" content={`${metaTitle}`}></meta>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords}/>
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:url" content={`https://jmeszaros.dev${location.pathname}`}></meta>
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content='Janos Meszaros' />
            <meta property="twitter:url" content={`https://jmeszaros.dev${location.pathname}`}></meta>
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */ }
            <link rel="canonical" href={`https://jmeszaros.dev${location.pathname}`}></link>
        </Helmet>
    )
}