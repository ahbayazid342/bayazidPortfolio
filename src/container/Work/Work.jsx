import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

// Import the static image from the assets folder

import portfolio from "../../assets/portfolioLandingPage.png";
import undercover from "../../assets/undercover.png";
import techNews from "../../assets/tech news.png";

// Hardcoded portfolio data with the same image
const works = [
  {
    title: "Portfolio",
    description:
      "This is a web project using Reactjs, Framer motion, SCSS, and Emailjs. The site is designed fully responsive using media query. It is made to represent my academic and professional details",
    imgUrl: portfolio,
    projectLink: "https://ahbayazid342.github.io/bayazidPortfolio/",
    codeLink: "https://github.com/ahbayazid342/bayazidPortfolio",
    tags: ["Web App"],
  },
  {
    title: "Under Cover Game",
    description:
      "Under Cover Game is a fun social deduction web app where players guess words and uncover the undercover player. Built with TypeScript and React for a smooth, interactive experience.",
    imgUrl: undercover,
    projectLink: "https://ahbayazid342.github.io/UnderCoverGame/",
    codeLink: "https://github.com/ahbayazid342/UnderCoverGame",
    tags: ["Web App"],
  },
  {
    title: "Daily Tech News & Mail Notifications",
    description:
      "A web app that delivers the latest tech news straight to your inbox every morning. Users can subscribe to get daily email notifications curated from top tech sources.",
    imgUrl: techNews,
    projectLink: "https://github.com/ahbayazid342/Daily-Tech-News",
    codeLink: "https://github.com/ahbayazid342/Daily-Tech-News",
    tags: ["Web App"],
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Personal <span>Projects</span>
      </h2>

      <div className="app__work-filter">
        {["IoT", "Machine Learning", "Generative AI", "Web App", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "projects",
  "app__primarybg"
);
