import { NavLink } from "react-router-dom";
import AppLinks from "./AppLinks";
import '../../Styles/login.css'
import { ReactComponent as InstaLogo } from '../../svg/instgram-logo.svg'
import Footer from "../Footer";
 function Login (){
        return(
            <div className="login-container">

        
           <div className="login-main-container">

                <div className="login-box">
                    <div className="loginCon">

                       <div className="heading">
                       <InstaLogo className="login-logo"  />
                       </div>
                        
                        <form action="" className="login-formCon">
                            <input type="text" name="" id="" className="textFiled" placeholder="Phone number, username, or email" />
                            <input type="password" name="" id="" className="passwordFiled" placeholder="password" />
                            <button type="submit" className="login-submit">Log in</button>
                        </form>
                        <div className="login-divider">
                            <hr />
                            <span className="login-orTag">OR</span>
                            <hr />
                        </div>

                        <div className="oauthCon">
                            <div className="login-fbCon">
                                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221u3pa464hjsfq1b3nw5o15crvxk1d2rtnp1cm54nc1e1z9m91zchk7%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3eb1cd7a-5572-4a63-a177-e7e36258c8db%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221u3pa464hjsfq1b3nw5o15crvxk1d2rtnp1cm54nc1e1z9m91zchk7%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0">


                                <img className="login-fbImage" src="./images/fb-logo.png" alt="" />
                                <p className="login-fbText">Login with Facebook</p>
                                </a>
                            </div>
                        </div>
                            <div className="forgotPass">

                        <NavLink to={'/recover'} >Forgot Password?</NavLink>
                            </div>


                    </div>
                    <div className="signupCon">
                        <p>Don't have an account?</p>
                        <NavLink to={'/signup'} >Sign up</NavLink>
                    </div>
                    <AppLinks />
                </div>
               
           </div>
           <Footer />
           </div>
        )
};


export default Login;