import { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { appliedConfig } from "./config/dataConfig.js";
import { Context } from "./components/LanguageWrapper.jsx";

import './MyDevPortfolio.css'
import AboutMe from './components/AboutMe.jsx'
import Businesses from './components/Businesses.jsx'
import CertificatesModal from './components/CertificatesModal.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HireMe from './components/HireMe.jsx'
import Intro from './components/Intro.jsx'
import Portfolio from './components/Portfolio.jsx'
import Resume from './components/Resume.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SEO from './components/SEO'

import Magyar from './lang/hu.json';
import English from './lang/en.json';

export default function MyDevPortfolio() {
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

  const context = useContext(Context);
  const { lang } = useParams()

  useEffect(() => {
    if (lang === "en") {
      context.setLocale('en')
      context.setMessages(English)
    } else {
      context.setLocale("hu")
      context.setMessages(Magyar)
    }
  }, [lang])

  const contentRef = useRef(null);

  useEffect(() => {
    const el = document.getElementById('content');
    if (!el) return;
    contentRef.current = el;
    const saved = sessionStorage.getItem('scrollPos');
    if (saved) el.scrollTop = parseInt(saved);
    const onScroll = () => sessionStorage.setItem('scrollPos', String(el.scrollTop));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  const seoTitle = lang === 'hu'
    ? 'Mészáros János | Szoftverfejlesztő Portfólió'
    : 'János Mészáros | Software Developer Portfolio';
  const seoDesc = lang === 'hu'
    ? 'Full-stack fejlesztő portfólió. Fedezd fel projektjeimet, készségeimet és szakmai tapasztalatomat.'
    : 'Full-stack developer portfolio. Explore projects, skills, and professional experience in web development.';

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        type='website'
        keywords={['portfolio', 'developer', 'software', 'full-stack', 'react', 'javascript']}
        lang={lang}
      />
      <div id='void' className='min-h-screen bg-uni-bg'>
        <div id='main-wrapper' className='m-auto max-w-[700px] md:flex md:gap-2 md:max-w-[1250px] md:min-w-[500px] xl:h-[100vh] xl:m-auto xl:min-h-[600px]'>
          <Header appliedDark={appliedDark} adjustAppliedDark={adjustAppliedDark} />
          <main id='main' className='mt-16 md:mt-0 md:pt-5 xl:my-auto xl:flex xl:pt-0'>
            <Intro openModal={openModal}/>
            <section id='content' className='bg-uni-fill text-uni-text
            xl:relative xl:inline-block xl:float-left xl:rounded-xl xl:min-w-[400px] xl:top-[10px] xl:left-[-5px] xl:max-w-[1200px] xl:min-h-[250px] xl:h-[75vh] xl:max-h-[580px] xl:overflow-y-auto xl:overflow-x-hidden'>
              <AboutMe />
              <Resume />
              <HireMe />
              <Portfolio />
              <Businesses />
              <ContactMe />
              <Footer />
              <CertificatesModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
              <ScrollToTop />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
