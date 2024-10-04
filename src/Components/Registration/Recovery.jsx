import { ReactComponent as RecoveryLogo } from "../../svg/Password-forgotten.svg";
import { NavLink } from "react-router-dom";
import '../../Styles/passRecovery.css'

const Recovery = () => {
  return (
    <div className="recoveryCon">
        <div className="recovery-main-con">
      <div className="passRecoveryCon">
        <RecoveryLogo className="recovery-logo" />
        <p className="pTag1">Trouble with logging in?</p>
        <p className="pTag2">
          `Enter your email address, phone number or username, and we'll send
          you a link to get back into your account.`
        </p>

        <form className="recovery-form" action="">
          <input
            type="text"
            placeholder="Email address,Phone number or username"
          />
          <button className="recovery-button1"><NavLink to={'/signup'}>Send Login Link</NavLink></button>
        </form>
        <a className="recovery-cant-reset" href="https://www.instagram.com/accounts/account_recovery/?username=&next=%2Fproud.mp%2Ffeed%2F">Can't reset your password</a>

        <div className="recovery-divider">
         <span className="recovery-hr"></span>
          <span className="recovery-orTag">OR</span>
         <span className="recovery-hr"></span>
        </div>

        <NavLink to={'/signup'} className='recovery-create-account'>Create New Account</NavLink>
      </div>
        <button className="recover-button2"><NavLink to={'/'}>Back to Login</NavLink></button>
    </div>
    </div>
  );
};

export default Recovery;
