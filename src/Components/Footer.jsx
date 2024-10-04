import '../Styles/footer.css'

function Footer() {
  return (
    <div className="main-footer-container">
      <div className="footerCon1">
        <a href="https://about.meta.com/" className="footer-link">Meta</a>
        <a href="https://about.instagram.com/" className="footer-link">About</a>
        <a href="https://about.instagram.com/blog/" className="footer-link">Blog</a>
        <a href="https://about.instagram.com/about-us/careers" className="footer-link">Jobs</a>
        <a href="https://help.instagram.com/" className="footer-link">Help</a>
        <a href="https://developers.facebook.com/docs/instagram" className="footer-link">Privacy</a>
        <a href="https://www.instagram.com/legal/privacy/" className="footer-link">Privacy</a>
        <a href="https://www.instagram.com/legal/terms/" className="footer-link">Terms</a>
        <a href="https://www.instagram.com/explore/locations/" className="footer-link">Locations</a>
        <a href="https://www.instagram.com/web/lite/" className="footer-link">Instgram Lite</a>
        <a href="https://www.threads.net/" className="footer-link">Threads</a>
        <a href="https://www.facebook.com/help/instagram/261704639352628" className="footer-link">Contact Uploading & Non-Users</a>
        <a href="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer" className="footer-link">Meta Verified</a>
       
      </div>
      <div className="footerCon2">
        <select name="" id="">
            <option value="">English(UK)</option>
            <option value="">Telugu(IN)</option>
            <option value="">Japnese</option>
            <option value="">English(US)</option>
            <option value="">French</option>
        </select>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </div>
  );
}

export default Footer;
