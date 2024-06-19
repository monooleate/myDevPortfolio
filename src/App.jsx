import { useEffect, useState } from 'react';

import './App.css'
import CertificatesModal from './components/CertificatesModal'
import Footer from './components/Footer'
import Header from './components/header/Header'
import Intro from './components/Intro'
import PreLoader from './components/Preloader'
import Resume from './components/Resume'

import { appliedConfig } from "./config/dataConfig";

function App() {

  //isDark Adjustment
  const [appliedDark, setAppliedDark] = useState(appliedConfig.isDarkTheme);
  const adjustAppliedDark = () => setAppliedDark(!appliedDark)
  useEffect(() => {
    if(appliedDark){
      document.getElementById("root").classList.add('theme-dark')
    }else{
      document.getElementById("root").classList.remove('theme-dark')
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
      <div id='void' className='bg-uni-bg'>
        {/* <div id='frame' className='fixed h-full w-full border-gray-200 border-solid border-[15px] border-t-0 md:border-t-[15px] z-0'/> */}
        <div id='main-wrapper' className=' m-auto max-w-[700px] md:flex md:gap-2 md:max-w-[1210px] md:min-w-[500px] xl:gap-4 xl:h-[100vh] xl:m-auto xl:min-h-[600px]' >
          <Header appliedDark={appliedDark} adjustAppliedDark={adjustAppliedDark} />
          <main id='main' className='bg-uni-fill mt-16 md:mt-0 md:pt-5 xl:my-auto xl:flex xl:pt-0'>
            <Intro openModal={openModal}/>
            <section id='content' className='h-[5000px] bg-uni-fill text-uni-text text-9xl left-[-5px]
            xl:relative xl:inline-block xl:float-left xl:min-w-[400px] xl:max-w-[1200px] xl:min-h-[250px] xl:h-[75vh] xl:max-h-[580px] xl:mt-[1%] xl:overflow-y-auto xl: overflow-x-hidden'>
              <Resume />
              <section id='first-element' className='bg-uni-odd border-3'>
                
              <p className=' text-third'>Hello Janos!</p> Hello Janosss! Hello Janos! Hello Janos!
              <CertificatesModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
              </section>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
