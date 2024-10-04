
import Recovery from "./Recovery"
import Footer from "../Footer";
import '../../Styles/passwordRecovery.css'
import {ReactComponent as InstaLogo} from '../../svg/instgram-logo.svg'
import { NavLink } from "react-router-dom";
export default function passwordRecovery(){
    return(
        <div className="passRecCon">
            <div className="passRec-instaLogo">
               <div className="con1">
               <NavLink to={'/signup'}><InstaLogo /></NavLink>
               <span></span>
               </div>
            </div>
            <div className="RecoveryComponent">
                <Recovery />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    
    )
}


