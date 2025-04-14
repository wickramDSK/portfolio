import "../Styles.css";

function NavigationBar({ setCurrentPage, currentPage }) {
  return (
    <div className="nav-container">
      <nav className="nav-links">
        <button
          className={`nav-button ${currentPage === "about" ? "active" : ""}`}
          onClick={() => setCurrentPage("about")}
        >
          <span className="button-text-long">About Me</span>
          <span className="button-text-short">About</span>
        </button>
        <button
          className={`nav-button ${currentPage === "skills" ? "active" : ""}`}
          onClick={() => setCurrentPage("skills")}
        >
          <span className="button-text-long">Skills</span>
          <span className="button-text-short">Skills</span>
        </button>
        <button
          className={`nav-button ${currentPage === "projects" ? "active" : ""}`}
          onClick={() => setCurrentPage("projects")}
        >
          <span className="button-text-long">Projects</span>
          <span className="button-text-short">Proj</span>
        </button>
        <button
          className={`nav-button ${currentPage === "contact" ? "active" : ""}`}
          onClick={() => setCurrentPage("contact")}
        >
          <span className="button-text-long">Contact Me</span>
          <span className="button-text-short">Contact</span>
        </button>
      </nav>
    </div>
  );
}

export default NavigationBar;
