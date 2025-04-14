import AboutMe from "./content-items/AboutMe";
import Skills from "./content-items/Skills";
import Projects from "./content-items/Projects";
import Contact from "./content-items/Contact";
import "../Styles.css";

function Context({ currentPage }) {
  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return <AboutMe />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return <div className="context">{renderContent()}</div>;
}

export default Context;
