import { useState, useEffect } from "react";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import Animation from "./components/Animation";

import me from "./images/me.jpg";
import battleship from "./images/battleship.png";
import calculator from "./images/calculator.png";
import cs50w from "./images/cs50w.png";
import cs50x from "./images/cs50x.png";
import inventory from "./images/inventory.png";

import odin from "./images/odin.png";
import odinbook from "./images/odinbook.png";

import todolist from "./images/todolist.png";
import top from "./images/top.png";
import ecom from "./images/ecom.png";
import chat from "./images/chat.png";

function App() {
  const [isImageVisible, setImageVisible] = useState(false);

  const toggleImageVisibility = () => {
    setImageVisible(!isImageVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 500; // Adjusted for navbar height
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          navLinks.forEach((link) => link.classList.remove("section-view"));
          navLinks[index].classList.add("section-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="animation">
        <Animation />
      </div>
      <CustomNavbar />
      {/* About section  */}
      <section id="about">
        <h2>About me</h2>
        <img className="avatar" src={me} alt="avatar placeholder" />

        <br />
        <ul>
          <hr />
          <p>
            Hey there! I'm a web developer with experience in a variety of
            technologies, including React, JavaScript, HTML, CSS, MongoDb Atlas,
            Mongoose, Node, Express, JSX. I've also got some experience using
            Ubuntu, so I'm comfortable working with different operating systems.
            I've completed both Harvard's CS50x and CS50w courses, which have
            given me a solid foundation in computer science concepts and web
            development. I have also finished The Odin Project, a comprehensive
            web development curriculum that's been great for expanding my
            full-stack skills. I'm always excited to take on new projects and
            challenges, and I think my skills and experience make me a great
            asset to any team.
          </p>
        </ul>
      </section>
      {/* Skills section  */}
      <section id="skills">
        <h2>Skills</h2>

        <ul>
          <hr />
          <div className="tools--icons">
            <div>
              <i className="devicon-javascript-plain colored"></i>
              <p style={{ marginLeft: "4px" }}> JavaScript</p>
            </div>
            <div>
              <i className="devicon-react-plain colored"></i>
              <p style={{ marginLeft: "25px" }}>React</p>
            </div>

            <div>
              <i className="devicon-reactrouter-plain-wordmark colored"></i>

              <p>React Router</p>
            </div>

            <div>
              <i className="devicon-visualstudio-plain colored"></i>
              <p>Visual Studio</p>
            </div>
            <div>
              <i className="devicon-npm-original-wordmark colored"></i>
              <p style={{ marginLeft: "30px" }}>NPM</p>
            </div>
            <div>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <p style={{ marginLeft: "25px" }}>Html5</p>
            </div>
            <div>
              <i className="devicon-nodejs-plain colored"></i>
              <p style={{ marginLeft: "17px" }}>NodeJS</p>
            </div>
            <div>
              <i className="devicon-express-original-wordmark colored"></i>
              <p style={{ marginLeft: "18px" }}>Express</p>
            </div>
            <div>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <p style={{ marginLeft: "8px" }}>mongoDB</p>
            </div>

            <div>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <p style={{ marginLeft: "28px" }}>CSS3</p>
            </div>

            <div>
              <i className="devicon-tailwindcss-original colored"></i>

              <p>TailwindCSS</p>
            </div>

            <div>
              <i className="devicon-postman-plain colored"></i>
              <p style={{ marginLeft: "12px" }}>Postman</p>
            </div>

            <div>
              <i className="devicon-vite-original colored"></i>

              <p style={{ marginLeft: "12px" }}>Vite</p>
            </div>

            <div>
              <i className="devicon-vitest-plain colored"></i>

              <p style={{ marginLeft: "25px" }}>Vitest</p>
            </div>

            <div>
              <i className="devicon-bootstrap-plain colored"></i>
              <p style={{ marginLeft: "10px" }}>Bootstrap</p>
            </div>

            <div>
              <i class="devicon-reactbootstrap-original colored"></i>

              <p style={{ marginLeft: "10px" }}>Reactbootstrap</p>
            </div>

            <div>
              <i className="devicon-github-plain colored"></i>
              <p style={{ marginLeft: "23px" }}>Github</p>
            </div>
            <div>
              <i className="devicon-firebase-plain colored"></i>
              <p style={{ marginLeft: "18px" }}>Firebase</p>
            </div>

            <div>
              <i className="devicon-linux-plain colored"></i>
              <p style={{ marginLeft: "27px" }}>Linux</p>
            </div>
            <div>
              <i className="devicon-webpack-plain colored"></i>
              <p style={{ marginLeft: "10px" }}>Webpack</p>
            </div>

            <div>
              <i className="devicon-json-plain colored"></i>

              <p style={{ marginLeft: "26px" }}>JSON</p>
            </div>

            <div>
              <i className="devicon-mongoose-original-wordmark colored"></i>

              <p style={{ marginLeft: "6px" }}>Mongoose</p>
            </div>

            <div>
              <i class="devicon-railway-original-wordmark"></i>

              <p style={{ marginLeft: "20px" }}>Railway</p>
            </div>
          </div>
        </ul>
      </section>

      {/* Certification section */}
      <section id="certification">
        <h2>Certifications</h2>
        <br />

        <ul>
          <hr />
          <div className="certification--container">
            <a href="https://certificates.cs50.io/e434c454-d200-4ccd-a308-ce32fb560d22.png?size=letter">
              <img className="cert-img" src={cs50x} alt="cs50 logo" />
              <h3>CS50's Introduction to Computer Science</h3>
            </a>
            <br /> <br />
            <a href="https://certificates.cs50.io/0608492f-e1b9-4169-8e36-c37a61101a3d.png?size=letter">
              <img className="cert-img" src={cs50w} alt="cs50w logo" />
              <h3>CS50's Web Programming with Python and JavaScript</h3>
            </a>
            <br /> <br />
            <div className="theodinproject" onClick={toggleImageVisibility}>
              <img className="top-img" src={top} alt="the odin project logo" />
              <h3 style={{ marginLeft: "140px" }}>Click me!</h3>
            </div>
          </div>
          {isImageVisible && (
            <img
              className="odinproject-img"
              src={odin}
              alt="the odin project"
            />
          )}
        </ul>
      </section>

      {/* Projects section  */}
      <section id="projects">
        <h2>Projects</h2>

        <div>
          <hr />
          <ul>
            <li>
              <h3>Odinbook</h3>

              <img className="project-img" src={odinbook} alt="" />
              <br />
              <p>
                Odin Book is a social media platform where users can connect
                with friends, share posts, and interact with each other. This
                app is built using React for the frontend and a custom RESTful
                API for the backend.
              </p>

              <div className="project-buttons">
                <a
                  className="demo-btn"
                  href="https://stefanpython.github.io/odin-book-react/#/login"
                >
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/odin-book-react"
                >
                  Code
                </a>
              </div>
            </li>

            <li>
              <h3>Ecomm Express</h3>
              <img className="project-img" src={ecom} alt="homepage" />
              <br />
              <p>
                Ecommerce full stack (MERN) website made with React on the
                frontend and using Node.js, Express and MongoDB for the backend.
                Features: Add items to cart, correctly update number of items in
                cart, add/substract items from cart, correctly update the total
                price, placing orders, search items and more...
              </p>
              <div className="project-buttons">
                <a
                  className="demo-btn"
                  href="https://stefanpython.github.io/ecom-express-frontend/"
                >
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/ecom-express-frontend"
                >
                  Code
                </a>
              </div>
            </li>

            <li>
              <h3>Chat Now</h3>
              <img className="project-img" src={chat} alt="" />
              <br />
              <p>
                Chat Now is a chat web application that allows users to join a
                room where they can send and recieve messages in real-time.
                Enter your name, the name of the chatroom you wish to join and
                start chatting. React was used for the frontend and firebase for
                the backend.
              </p>

              <div className="project-buttons">
                <a className="demo-btn" href="https://chatnow-668cb.web.app/">
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/chat-now"
                >
                  Code
                </a>
              </div>
            </li>

            <li>
              <h3>Game Inventory</h3>
              <img className="project-img" src={inventory} alt="" />
              <br />
              <p>
                Website where you can add, remove, update, delete (CRUD) games.
                Or any items for that matter. This app is built using NodeJS,
                Express, MongoDB Atlas and EJS.
              </p>

              <div className="project-buttons">
                <a
                  className="demo-btn"
                  href="https://game-inventory.up.railway.app/catalog"
                >
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/game-inventory-app"
                >
                  Code
                </a>
              </div>
            </li>

            <li>
              <h3>DOMore To-Do List</h3>
              <img className="project-img" src={todolist} alt="" />
              <br />
              <p>
                To-Do list made with Vanilla Javascript. Features: Add projects,
                add tasks to specific project, mark tasks as important, add
                due-date to each task, delete projets/tasks, display
                finished/important/today/all tasks.
              </p>

              <div className="project-buttons">
                <a
                  className="demo-btn"
                  href="https://stefanpython.github.io/ToDoList-Project/"
                >
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/ToDoList-Project"
                >
                  Code
                </a>
              </div>
            </li>

            <li>
              <h3>Battleship</h3>
              <img className="project-img" src={battleship} alt="" />
              <br />

              <p>
                Battleship project made with Vanilla Javascript.Ships are placed
                in random order on each board. Click on the enemy board and try
                to sink their ships first.
              </p>

              <div className="project-buttons">
                <a
                  className="demo-btn"
                  href="https://stefanpython.github.io/Battleship/"
                >
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/Battleship"
                >
                  Code
                </a>
              </div>
            </li>
            <li className="calculator-container">
              <h3>Elemental Calculator </h3>
              <img className="project-img" src={calculator} alt="" />
              <br />
              <p>
                Calculator application made with Vanilla Javascript. Features:
                Add, Substract, Multiply, Divide numbers.
              </p>

              <div className="project-buttons">
                <a
                  className="demo-btn"
                  href="https://stefanpython.github.io/Calculator-Project/"
                >
                  Demo
                </a>
                <a
                  className="code-btn"
                  href="https://github.com/stefanpython/Calculator-Project"
                >
                  Code
                </a>
              </div>
            </li>
          </ul>
        </div>

        <br />
        <h4>See more</h4>
        <a
          className="here"
          href="https://github.com/stefanpython?tab=repositories"
        >
          &#x290D; Here &#x290C;
        </a>
        <br />
      </section>
      {/* Contact */}
      <div className="contact-container">
        <section id="contact">
          <h2>Contact</h2>

          <div className="contact-links">
            <a href="mailto:stefanhtml@yahoo.com">stefanhtml@yahoo.com</a>

            <a href="https://github.com/stefanpython">github</a>

            <a href="https://flowcv.com/resume/g0gns4d4cc">resume</a>

            <a href="https://linkedin.com/in/stefan-andrei-29648486">
              linkedin
            </a>
          </div>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 - Stefan Andrei</p>
        <a href="https://github.com/stefanpython">
          <img
            className="git-logo"
            alt="git logo"
            src="https://c.tenor.com/A15H8E1VUh8AAAAM/github-cat.gif"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
