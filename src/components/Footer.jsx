import "../Styles.css";
import GitHubSym from "../assets/github-logo.png"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      © {currentYear} | Crafted with ❤️ by{" "}
     
      <a
        href="https://github.com/wickramDSK"
        target="_blank"
        rel="noopener noreferrer"
      >
        wickramDSK
      </a>
      <img src={GitHubSym}/>
    </div>
  );
}

export default Footer;
