import { useState, useEffect } from "react";
import EduIcon from "../../assets/education-icon.png";

const interests = [
  "Full-Stack Development",
  "Software Development",
  "Frontend Development",
  "Android Development",
];

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = interests[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % interests.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="interest-item">
      {"\n"}
      {displayText}
      <span className="blinking-cursor">|</span>
    </div>
  );
};

function AboutMe() {
  return (
    <div className="about-container">
      <p className="welcome-text">Hello!, I'm</p>
      <p className="name-text">Supun Wickramasinghe👋</p>
      <br />
      <div className="profile-section">
        <table>
          <tr>
            <td>
              <p className="description">
                Hey there! I'm a BSc undergraduate in Physical Science, majoring
                in Mathematics and Computer Science. I'm passionated about{" "}
                <b>software/web/Android development, and frontend design</b>.
                <br />
                Through my studies, I' ve gained knowledge in{" "}
                <b>
                  object-oriented and visual programming, web development,
                  relational databases, software engineering principles, Android
                  application development, and cybersecurity.
                </b>
                <br />
                <br />I love learning new things, solving problems through code,
                and working with others to bring ideas to life.{" "}
                <b>
                  Whether it' s building sleek interfaces or writing clean
                  backend logic, I'm always excited to grow as a developer.😊
                </b>
              </p>
            </td>
            <td>
              <div className="profile-image-wrapper">
                <img
                  src="./src/assets/profile.png"
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <section>
        <h2>I'm interested in,🧑🏻‍💻</h2>
        {/* Added typing effect in here */}
        <b>
          <TypingEffect />
        </b>
      </section>
      <br />
      <br />
      <br />
      <div className="info-section">
        <section>
          <h2>
            <img className="icon" src={EduIcon} /> Education
          </h2>
          <br />
          <ul>
            <li>
              <b>Bachelor of Science (UG)</b>
            </li>
            <p className="sub-context">
              Physical Science (Computer Science & Mathematics)
              <br />
              University of Kelaniya (2022-2025)
            </p>
          </ul>
        </section>

        <section>
          <h2>
            <img className="icon" src={EduIcon} /> Certificates
          </h2>
          <br />
          <ul>
            <li>
              <b>Information & Communication Technology Technician (NVQ 4)</b>
            </li>
            <p className="sub-context">Technical College, Matale</p>
            <br />

            <li>
              <b>Python for Beginners</b>
            </li>
            <p className="sub-context">CODL - University of Moratuwa</p>
            <br />

            <li>
              <b>Introduction to Web 3.0 Certificate</b>
            </li>
            <p className="sub-context">
              Commonwealth AI Academy Training Programme
            </p>
            <br />

            <li>
              <b>Introduction to AI for Youth Certificate</b>
            </li>
            <p className="sub-context">
              Commonwealth AI Academy Training Programme
            </p>
            <br />

            <li>
              <b>Demystifying Intel® Dev Cloud Certificate</b>
            </li>
            <p className="sub-context">
              Commonwealth AI Academy Training Programme
            </p>
            <br />

            <li>
              <b>Introduction to Generative AI Certificate</b>
            </li>
            <p className="sub-context">
              Commonwealth AI Academy Training Programme
            </p>
            <br />
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
