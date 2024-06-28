export default function FooterForLayout(){
    return(
        <footer id="footer" className="bg-gray-600 py-3 w-full text-base">
            <div className="">
                
                <p className=" text-uni-textIntro text-center">
                    {new Date().getFullYear()} <a href="/">Janos Meszaros</a>.
                </p>
                
            </div>
        </footer>
    )
}