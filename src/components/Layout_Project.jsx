import { Outlet } from "react-router-dom";

import Header_Project from './header/Header_Project'
import Footer from './Footer'

export default function Layout_Project(){
    return (
        <>
            <Header_Project />
            <div className="relative top-16 h-full min-h-[88vh]">
                <Outlet />
            </div> 
            <div className="bottom-0 mt-16 w-full">
                <Footer />
            </div>
  
        </>
    )
}