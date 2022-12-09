import React from "react";
import "../../App.css";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import rc from "../../Images/react-native.png";
import bt from "../../Images/bootstrap.png";
import sql from "../../Images/java.png";
import netli from "../../Images/netlify.png"
import jenkins from "../../Images/jenkins.png"
import docker from "../../Images/docker.png"
import Resume from "../Resume/Resume";
import People from "../People/People";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import bg from "../../Images/banner-guy.png";
import miStore from "../../Images/MiStore.png"
import clock from "../../Images/clock.png"
import blog from "../../Images/blog.png"
import todo from "../../Images/ToDoApp.png"
import resume from "../../Images/Resume.pdf"
import netflix from "../../Images/netflix.png"

const Home = () => {
  return (
    <div className="main">
      <div className="page-top">
        <div className="page-top-content">
          <h1 className="navName">Hi, I am Vishal Gayakawad</h1>
          <h1 className="navProf">A Full-Stack Developer</h1>

          <p className="page-content-p navIdeas">Get ready to turn ideas into reality</p>
          <div className="page-top-btn-flex">
            <div>
              <button className="navBtn">
                Hire Me
              </button>
            </div>
            <div>
              <button className="navBtnGet bttn"><a href={resume} download={resume} style={{textDecoration: 'none', color: "white"}} target="_blank" rel="noopener noreferrer">Get Resume</a></button>
            </div>
          </div>
        </div>
        <div className="page-top-image">
          <img className="pit" src={bg} alt="" />
        </div>

        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 289"><path fill="#09bcab" fill-opacity="0.6" d="M0,64L34.3,90.7C68.6,117,137,171,206,202.7C274.3,235,343,245,411,218.7C480,192,549,128,617,117.3C685.7,107,754,149,823,181.3C891.4,213,960,235,1029,218.7C1097.1,203,1166,149,1234,133.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </div>
      </div>

      <div className="about-me" id="about-me-id">
        <div className="about-me-img"></div>
        <div className="about-me-content abutBrif">
          <h2>About me</h2>
          <hr className="horizontal" />
          <p>
            I'm a web designer and full-stack developer with 0 years of
            professional experience. I'm interested in all kinds of visual
            communication, but my major focus is on creating a more simple,
            functional and interactive web applications. I also have skills in
            other field like branding, icon design.
          </p>

          <p>
            I enjoy turning complex prolems into simple elegant intuitive
            designs. When I'm not pushing pixels, you'll find me reading,
            playing or listening music
          </p>

          <div className="technology">
            <p>Language/Library/Technology</p>
            <hr />
            <div className="tools">
              <div>
                <img className="tools-icon" src={html} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={css} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={js} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={rc} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={bt} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={sql} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={netli} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={jenkins} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={docker} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio" id="portfolio-id">
        <h2>My Portfolio</h2>
        <hr className="portfolio-hr" />
        <div className="portfolio-grid">
          <div>
            <a href="https://vishal181214.github.io/Clock/" target="_blank">
              <img className="portfolio-grid-item" src={clock} alt="" />
            </a>
          </div>
          <div>
            <a href="https://reactblogapprwd.netlify.app/" target="_blank"><img className="portfolio-grid-item" src={blog} alt="" /></a>
          </div>
          <div>
            <a href="https://monumental-scone-61e133.netlify.app/" target="_blank"><img className="portfolio-grid-item" src={miStore} alt="" /></a>

          </div>
          <div>
            <a href="https://gentle-maamoul-d194f7.netlify.app/" target="_blank"><img className="portfolio-grid-item" src={netflix} alt="" /></a>
          </div>
          <div>
            <a href="https://vishal181214.github.io/ToDoAppJs/" target="_blank"><img className="portfolio-grid-item" src={todo} alt="" /></a>

          </div>
        </div>
      </div>

      <Resume />

      <People />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
