import { yourName  } from "../config/personalConfig";

function Footer(){
    return(
        <footer id="footer" className="bg-gray-600 py-3 w-full text-base">
            <div className="">
                
                <p className=" text-uni-textIntro text-center">
                    {new Date().getFullYear()} <a href="/">{yourName.name}</a>.
                </p>
                
            </div>
        </footer>
    )
}
export default Footer