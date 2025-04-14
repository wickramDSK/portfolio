import linkedinLogo from "../../assets/linkedin-logo.png";
import GitHubLogo from "../../assets/github-logo.png";
import EmailLogo from "../../assets/email-logo.jpg";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Find Me on,</h1>
      <div className="social-links">
        <div className="social-item">
          <img className="social-logo" src={linkedinLogo} alt="LinkedIn" />
          <a href="www.linkedin.com/in/wickramdsk" target="_blank">
            www.linkedin.com/in/wickramdsk
          </a>
        </div>

        <div className="social-item">
          <img className="social-logo" src={GitHubLogo} alt="GitHub" />
          <a
            href="github.com/wickramDSK"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/wickramDSK
          </a>
        </div>

        <div className="social-item">
          <img className="social-logo" src={EmailLogo} alt="Email" />
          <a href="wickdsk.2k@gmail.com" rel="noopener noreferrer">
            wickdsk.2k@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
