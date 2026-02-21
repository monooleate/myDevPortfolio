import { Helmet } from 'react-helmet'
import { useLocation, useParams } from 'react-router-dom';

export default function SEO({ title, description, type = 'website', keywords = [], lang }) {
    const location = useLocation();
    const { lang: paramLang } = useParams();
    const currentLang = lang || paramLang || 'en';
    const altLang = currentLang === 'en' ? 'hu' : 'en';
    const baseUrl = 'https://jmeszaros.dev';
    const currentUrl = `${baseUrl}${location.pathname}`;
    const altUrl = currentUrl.replace(`/${currentLang}`, `/${altLang}`);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": baseUrl,
                "name": "János Mészáros Portfolio",
                "description": "Full-stack developer portfolio",
                "inLanguage": ["en", "hu"]
            },
            {
                "@type": "Person",
                "name": "János Mészáros",
                "url": baseUrl,
                "jobTitle": "Software Engineer",
                "knowsAbout": ["JavaScript", "React", "Web Development", "Tailwind CSS", "Full-Stack Development"],
                "sameAs": [
                    "https://github.com/monooleate",
                    "https://www.linkedin.com/in/janosmeszaros1/"
                ]
            }
        ]
    };

    return (
        <Helmet>
            <html lang={currentLang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(',')} />}
            <link rel="canonical" href={currentUrl} />

            {/* Hreflang */}
            <link rel="alternate" href={currentUrl} hreflang={currentLang} />
            <link rel="alternate" href={altUrl} hreflang={altLang} />
            <link rel="alternate" href={`${baseUrl}/`} hreflang="x-default" />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="János Mészáros Portfolio" />
            <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : 'hu_HU'} />
            <meta property="og:locale:alternate" content={currentLang === 'en' ? 'hu_HU' : 'en_US'} />
            <meta property="og:image" content={`${baseUrl}/profile.webp`} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@janosmeszaros" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${baseUrl}/profile.webp`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    )
}
