
import { FormattedMessage } from 'react-intl';

function Footer(){
    return(
        <footer id="footer" className="bg-gray-600 py-3 w-full text-base">
            <div className="">
                
                <p className=" text-uni-textIntro text-center">
                    {new Date().getFullYear() }  
                    &nbsp;
                    <a href="/">
                        <FormattedMessage
                            id = "myName"
                            defaultMessage="János Mészáros"
                        />
                    </a>.
                </p>
                
            </div>
        </footer>
    )
}
export default Footer