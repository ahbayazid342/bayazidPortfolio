import React from "react";
import { motion } from "framer-motion";
// import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

import react from "../../assets/react.png";
import springboot from "../../assets/springboot.png";
import cpp from "../../assets/cpp.png";
import git from "../../assets/git.png";
import python from "../../assets/python.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import llama from "../../assets/llama.png";
import GenerativeAI from "../../assets/reduxdd.png";
import java from "../../assets/java.png";
import mongo from "../../assets/mongo.png";
import sql from "../../assets/sql.png";
import next from "../../assets/next.png";
import android from "../../assets/android.png";
import gradio from "../../assets/gradio.png";
import dsa from "../../assets/dsa.png";
import c from "../../assets/c.png";
import css from "../../assets/css.png";
import patent from "../../assets/patent.png";
import docker from "../../assets/docker.png";
import websocket from "../../assets/websocket.png";
import rabbit from "../../assets/rabbit.png";
import postgresql from "../../assets/postgresql.png";
import angular from "../../assets/angular.png";

const experiences = [
  {
    year: "1 Nov 2023 - Present",
    works: [
      {
        name: "Associate Software Engineer",
        company: "Kaz Software",
        desc: `<br>
          <ul>
            <li>Responsible for working on an internal web-based project designed.</li>
            <li>Analyze feature requirements, design and develop features, and fix bugs.</li>
            <li>Incorporate WebSocket for real-time analytics in the Data Integration and Management Studio (DIMS) project.</li>
            <li>Utilized Redux for effective state management, ensuring consistent data flow and reducing the complexity of application state </li>
            <li> Developed RESTful APIs and integrated them with frontend frameworks, facilitating smooth communication between the frontend and backend, and ensuring data integrity and security. </li>
            <li>Worked closely with designers, product managers, and other developers in an Agile environment to deliver projects on time, ensuring all technical and business requirements were met.</li>
          </ul>
        `,
      },
    ],
  },
  {
    year: "Dec 2021 - April 2023",
    works: [
      {
        name: "Teaching Assistant (Competitive Programming Trainer)",
        company: "Department of Computer Science & Engineering, Jahangirnagar University",
        desc: `<br>
          <ul>
            <li>Trained junior students in C, C++, data structures, and algorithms for programming contests.</li>
            <li>Served as Organizer, Problem Setter, and Judge for practice contests.</li>
            <li>Coordinated academic activities and events for my batch.</li>
          </ul>
        `,
      },
    ],
  },
];

const skills = [
  {
    name: "React",
    bgColor: "#61DAFB",
    icon: react,
  },
  {
    name: "Next.js",
    bgColor: "#61DAFB",
    icon: next,
  },
  {
    name: "Angular.js",
    bgColor: "#61DAFB",
    icon: angular,
  },
  {
    name: "MongoDB",
    bgColor: "#61DAFB",
    icon: mongo,
  },
  {
    name: "PostgreSQL",
    bgColor: "#61DAFB",
    icon: postgresql,
  },
  {
    name: "MySQL",
    bgColor: "#61DAFB",
    icon: sql,
  },
  {
    name: "C",
    bgColor: "#61DAFB",
    icon: c,
  },
  {
    name: "C++",
    bgColor: "#61DAFB",
    icon: cpp,
  },
  {
    name: "java",
    bgColor: "#61DAFB",
    icon: java,
  },

  {
    name: "Python",
    bgColor: "#61DAFB",
    icon: python,
  },
  {
    name: "HTML",
    bgColor: "#61DAFB",
    icon: html,
  },
  {
    name: "CSS",
    bgColor: "#61DAFB",
    icon: css,
  },
  {
    name: "Javascript",
    bgColor: "#61DAFB",
    icon: javascript,
  },
  {
    name: "Typescript",
    bgColor: "#61DAFB",
    icon: typescript,
  },
  {
    name: "Git",
    bgColor: "#61DAFB",
    icon: git,
  },
  {
    name: "Redux",
    bgColor: "#61DAFB",
    icon: redux,
  },
  {
    name: "Android",
    bgColor: "#61DAFB",
    icon: android,
  },
  {
    name: "DSA",
    bgColor: "#61DAFB",
    icon: dsa,
  },
];

const Skills = () => {
  return (
    <>
      {/* <h2 className="head-text"> Experiences</h2> */}
      <h2 className="head-text">
        Skills & Job <span>Experiences</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h2 className="bold-text">{work.name}</h2>
                      <h4>{work.company}</h4>
                      <div dangerouslySetInnerHTML={{ __html: work.desc }} className="p-text" />
                    </motion.div>
                    {/* <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
