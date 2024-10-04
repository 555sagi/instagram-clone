import AppLinks from "./AppLinks";
import { ReactComponent as InstaLogo } from "../../svg/instgram-logo.svg";
import { ReactComponent as FbLogo } from "../../svg/fb-logo.svg";
import { NavLink } from "react-router-dom";
import "../../Styles/signup.css";
import Footer from "../Footer";

function Signup() {
  return (
    <div className="signup-container">

  
    <div className="signup-main-container">
      <div className="signup-box">
        <div className="signCon">
          <InstaLogo className="logo" />
          <p className="signUp-text-field">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="fb-login-button">
            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221c7fh7kw5tb681988b0a1urflwux2mc5z1mvaex1wdhpvtx99rfk%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D4f979b2c-51f2-4bbd-bbb5-7309a8e20d46%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221c7fh7kw5tb681988b0a1urflwux2mc5z1mvaex1wdhpvtx99rfk%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D#_=">
              <div className="signup-fb-login">
                <FbLogo />
                <span>Log in with Facebook</span>
              </div>
            </a>
          </button>
          <div className="divider">
            <hr />
            <span className="or-tag">OR</span>
            <hr />
          </div>
          <form action="" className="formCon">
            <input
              type="text"
              placeholder="Mobile Number or Email"
              className="signup-text-field"
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-text-field"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="signup-text-field"
            />
            <input
              type="text"
              placeholder="Username"
              className="signup-text-field"
            />
            <div className="notification">
              <div>
                <p className="signup-text-field">
                  People who use our service may have uploaded your contact
                  information to Instagram.
                  <a
                    href="https://www.facebook.com/help/instagram/261704639352628?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </p>
                <p className="signup-text-field">
                  By signing up, you agree to our{" "}
                  <a href="https://help.instagram.com/581066165581870/?locale=en_US&hl=en">
                    Terms
                  </a>
                  ,{" "}
                  <a href="https://www.facebook.com/privacy/policy?hl=en">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://www.instagram.com/legal/cookies/?hl=en">
                    Cookies Policy
                  </a>.
                </p>
              </div>
            </div>
            <button className="signup-button" type="submit">
              Sign up
            </button>
          </form>
        </div>
        <div className="loginCon">
          <p>Have an account? </p>
          <NavLink to={'/'}>Log in</NavLink>
        </div>
        <AppLinks />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
