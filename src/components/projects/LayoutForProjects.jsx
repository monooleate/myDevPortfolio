import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'preact/hooks';
import { appliedConfig } from "../../config/dataConfig";

import Header from './HeaderForLayout'
import Footer from './FooterForLayout'

export default function Layout_Project(){
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

    return (
        <>
            <Header appliedDark={appliedDark} adjustAppliedDark={adjustAppliedDark} />
            <div className="relative top-16 h-full min-h-[88vh] bg-gray-50 dark:bg-slate-800">
                <Outlet />
            </div> 
            <div className="bottom-0 mt-16 w-full">
                <Footer />
            </div>
        </>
    )
}