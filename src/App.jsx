import { useState } from "react";
import "./App.css";

import logo from "./assets/logo-removebg-preview.png";
import profilePic from "./assets/profile pic- no bg.png";

import pythonLogo from "./assets/Python_Programming_Logo_PNG___TopPNG-removebg-preview.png";
import htmlLogo from "./assets/606226799884939683-removebg-preview.png";
import cssLogo from "./assets/132011832823729359-removebg-preview.png";
import cLogo from "./assets/595178907049096721-removebg-preview.png";
import jsLogo from "./assets/The_First_Step_to_Mastering_JavaScript__JS_-removebg-preview.png";

import weatherImage from "./assets/weather api.jpg";


function App() {

  // LIGHT MODE BY DEFAULT
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  const currentYear = new Date().getFullYear();

  return (

    <div className={lightTheme ? "light-theme" : "dark-theme"}>

      {/* HEADER */}

      <header className="site-header">

        <nav className="navbar">

          <img
            src={logo}
            width="70"
            alt="Sinchana logo"
          />

          <ul className="nav-links">

            <li>
              <a href="#about" className="btn">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="btn">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="btn">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="btn">
                Contact
              </a>
            </li>

          </ul>


          {/* THEME BUTTON */}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {lightTheme ? "🌞" : "🌙"}
          </button>

        </nav>

      </header>


      <main>


        {/* HERO SECTION */}

        <section className="hero-section">

          <h1 className="hero-content">
            Hello, Sinchana here!
          </h1>

          <p className="tagline">
            I'm an aspiring scientist, with a passion for technology and discovery.
          </p>

          <div className="hero-buttons">

            <a href="#" className="btn btn-primary">
              View my resume
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact me
            </a>

          </div>

        </section>



        {/* ABOUT SECTION */}

        <section
          className="about-section"
          id="about"
        >

          <h2>About Me</h2>

          <div className="about-content">

            <figure className="profile-figure">

              <img
                src={profilePic}
                alt="Sinchana Narayan"
              />

              <figcaption>
                Sinchana Narayan, aspiring scientist.
              </figcaption>

            </figure>


            <div className="about-text">

              <p>
                "Research has always been a subject that has had me keen to learn,
                and keep learning regardless of what my qualification says I'm
                specialised in. As a B.Tech in Mathematics and Computing graduate,
                with xyz years of experience and xyz published research papers, all
                I wish to do is to use my learning not only to build new things,
                but to connect it with the universe's principles and learn along.
                Welcome to this part of the internet, that tells about me and my
                work — without telling too much. Hope to connect with you soon!"
              </p>

            </div>

          </div>

        </section>



        <section
    className="skills-section"
    id="skills"
>

    <h2>My Skills</h2>

    <div className="skills-grid">

        <div className="skill-button">
            <img
                src={pythonLogo}
                alt="Python"
            />
            <span>Python</span>
        </div>

        <div className="skill-button">
            <img
                src={htmlLogo}
                alt="HTML"
            />
            <span>HTML</span>
        </div>

        <div className="skill-button">
            <img
                src={cssLogo}
                alt="CSS"
            />
            <span>CSS</span>
        </div>

        <div className="skill-button">
            <img
                src={cLogo}
                alt="C"
            />
            <span>C</span>
        </div>

        <div className="skill-button">
            <img
                src={jsLogo}
                alt="JavaScript"
            />
            <span>JavaScript</span>
        </div>

    </div>

</section>


        {/* PROJECT SECTION */}

        <section
          className="project-section"
          id="projects"
        >

          <h2>My Projects</h2>

          <div className="project-grid">

            <article className="project-card">

              <img
                src={weatherImage}
                alt="Weather App"
              />

              <h3>The Weather App</h3>

              <p>
                An app that indicates weather changes with closely 90% accuracy,
                and helps schedule plans with a built-in calendar.
              </p>


              <div className="project-tags">

                <span className="tag">
                  React
                </span>

                <span className="tag">
                  API
                </span>

              </div>


              <div className="project-links">

                <a href="#" className="button">
                  Live Demo
                </a>

                <a href="https://github.com/sinchana-narayan" className="button">
                  GitHub
                </a>

              </div>

            </article>

          </div>

        </section>



        {/* CONTACT SECTION */}

        <section
          className="contact-section"
          id="contact"
        >

          <h2>Contact Me</h2>

          <form>

            <div className="form-group">

              <label htmlFor="name">
                Name:
              </label>

              <input
                type="text"
                id="name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email:
              </label>

              <input
                type="email"
                id="email"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message:
              </label>

              <textarea
                id="message"
                rows="5"
                required
              />

            </div>


            <button
              className="submit"
              type="submit"
            >
              Send Message
            </button>

          </form>

        </section>

      </main>



      {/* FOOTER */}

      <footer>

        <p>
          &copy; {currentYear} Sinchana Narayan
        </p>


        <nav>

          <a
            href="https://github.com/sinchana-narayan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/sinchana-narayan-b0132a412/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </nav>

      </footer>

    </div>

  );
}

export default App;