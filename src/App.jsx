import { useEffect, useState } from 'react';

import './App.css'
import AboutMe from './components/AboutMe'
import CertificatesModal from './components/CertificatesModal'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer'
import Header from './components/header/Header'
import HireMe from './components/HireMe'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import PreLoader from './components/Preloader'
import Resume from './components/Resume'
import ScrollToTop from './components/ScrollToTop'

import { appliedConfig } from "./config/dataConfig";

function App() {

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

  //PreLoader
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

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
      {isLoading && <PreLoader></PreLoader>}
      <div id='void' className='bg-gradient-to-t from-uni-bg to-uni-palette/70'>
        {/* <div id='frame' className='fixed h-full w-full border-gray-200 border-solid border-[15px] border-t-0 md:border-t-[15px] z-0'/> */}
        <div id='main-wrapper' className=' m-auto max-w-[700px] md:flex md:gap-2 md:max-w-[1100px] md:min-w-[500px] xl:h-[100vh] xl:m-auto xl:min-h-[600px]' >
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

export default App
