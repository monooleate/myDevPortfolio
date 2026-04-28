import { Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { useIntl } from 'react-intl';
import { appliedConfig } from "../../config/dataConfig";
import { Context } from "../LanguageWrapper";
import Magyar from '../../lang/hu.json';
import English from '../../lang/en.json';

import Header from './HeaderForLayout'
import Footer from './FooterForLayout'
import CertificatesModal from '../CertificatesModal'
import SEO from '../SEO'

// Maps the project URL slug to existing i18n keys for title + description.
// Adding a new project? Add an entry here so the page gets a unique
// <title> + canonical (otherwise Google will see duplicate metadata).
const PROJECT_SEO = {
  pathfinder: { titleKey: 'mazeTitle',    descKey: 'mazeBfsDesc' },
  weather:    { titleKey: 'weatherTitle', descKey: 'weatherIntro' },
  markdown:   { titleKey: 'mdTitle',      descKey: 'mdSubtitle' },
  colors:     { titleKey: 'colorTitle',   descKey: 'colorSubtitle' },
  calculator: { titleKey: 'calcTitle',    descKey: 'calcSubtitle' },
  pomodoro:   { titleKey: 'pomoTitle',    descKey: 'pomoSubtitle' },
  molecular:  { titleKey: 'molTitle',     descKey: 'molPlaceholder' },
};

function ProjectsSEO({ lang }) {
  const intl = useIntl();
  const location = useLocation();
  // last non-empty segment, e.g. '/en/projects/weather' -> 'weather'
  const slug = location.pathname.split('/').filter(Boolean).pop();
  const cfg = PROJECT_SEO[slug];

  const title = cfg
    ? `${intl.formatMessage({ id: cfg.titleKey })} | ${intl.formatMessage({ id: 'myName' })}`
    : `${intl.formatMessage({ id: 'navProjects', defaultMessage: 'Projects' })} | ${intl.formatMessage({ id: 'myName' })}`;
  const description = cfg
    ? intl.formatMessage({ id: cfg.descKey })
    : intl.formatMessage({ id: 'portfolioIntro' });

  return <SEO title={title} description={description} lang={lang} />;
}

export default function Layout_Project() {
  const context = useContext(Context);
  const { lang } = useParams();

  useEffect(() => {
    if (lang === "en") {
      context.setLocale('en');
      context.setMessages(English);
    } else {
      context.setLocale('hu');
      context.setMessages(Magyar);
    }
  }, [lang]);
  const [appliedDark, setAppliedDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return appliedConfig.isDarkTheme;
  });
  const adjustAppliedDark = () => {
    setAppliedDark(prev => {
      localStorage.setItem('darkMode', String(!prev));
      return !prev;
    });
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') !== null) return;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDark.matches) setAppliedDark(true);
    const handler = (event) => setAppliedDark(event.matches);
    prefersDark.addEventListener("change", handler);
    return () => prefersDark.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (appliedDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [appliedDark])

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <ProjectsSEO lang={lang} />
      <Header appliedDark={appliedDark} adjustAppliedDark={adjustAppliedDark} openModal={openModal} />
      <div className="relative top-16 min-h-[88vh] bg-uni-bg">
        <Outlet />
      </div>
      <div className="mt-16 w-full">
        <Footer />
      </div>
      <CertificatesModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}
