import { useState, useEffect, useContext } from 'preact/hooks';
import { useParams } from 'react-router-dom';
import { appliedConfig } from "./config/dataConfig.js";
import { Context } from "./components/LanguageWrapper.jsx";

import './MyDevPortfolio.css'
import AboutMe from './components/AboutMe.jsx'
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

  //isDark Adjustment
  const [appliedDark, setAppliedDark] = useState(appliedConfig.isDarkTheme);
  const adjustAppliedDark = () => setAppliedDark(!appliedDark)
  
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    if (prefersDark.matches) {
      setAppliedDark(true);
    }
  
    //if the perferred color scheme changes without a reload
    prefersDark.addEventListener("change", (event) => setAppliedDark(event.matches));
  }, []);
  
  useEffect(() => {
    if(appliedDark){
      document.getElementById("root").classList.add('dark')
    }else{
      document.getElementById("root").classList.remove('dark')
    }
  }, [appliedDark])

  //Language selector
  const context = useContext(Context);
  const { lang } = useParams()
  useEffect(() => {
      if (lang === ("en")) {
          context.setLocale('en')
          context.setMessages(English)
      }
      else {
          context.setLocale("hu")
          context.setMessages(Magyar)
      }
  }, [lang])

  //OpenModal
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <SEO
        title='Developer Portfolio'
        description='Software Developer Portfolio site designed to effectively display my projects and expertise.'
        type='website'
        keywords={['portfolio', 'developer', 'software']}
      />
      <div id='void' className='bg-gradient-to-tl from-uni-bg to-uni-palette/90'> 
        {/* <div id='frame' className='fixed h-full w-full border-gray-200 border-solid border-[15px] border-t-0 md:border-t-[15px] z-0'/> */}
        <div id='main-wrapper' className=' m-auto max-w-[700px] md:flex md:gap-2 md:max-w-[1250px] md:min-w-[500px] xl:h-[100vh] xl:m-auto xl:min-h-[600px]' >
          <Header appliedDark={appliedDark} adjustAppliedDark={adjustAppliedDark} />
          <main id='main' className='mt-16 md:mt-0 md:pt-5 xl:my-auto xl:flex xl:pt-0'>
            <Intro openModal={openModal}/>
            <section id='content' className='bg-uni-fill text-uni-text 
            xl:relative xl:inline-block xl:float-left xl:rounded xl:min-w-[400px] xl:top-[10px] xl:left-[-5px] xl:max-w-[1200px] xl:min-h-[250px] xl:h-[75vh] xl:max-h-[580px]  xl:overflow-y-auto xl: overflow-x-hidden'>
              <AboutMe />
              <Resume />
              <HireMe />
              <Portfolio />
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
