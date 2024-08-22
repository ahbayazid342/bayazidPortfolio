import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

import img1 from "../../assets/education.png";
import img2 from "../../assets/SW.jpg";
import img3 from "../../assets/problemSolving.jpg";
import img4 from "../../assets/hobby.jpg";

const abouts = [
  {
    title: "Education",
    description:
      "I completed my B.Sc. (Hons.) in Computer Science and Engineering from Jahangirnagar University, Dhaka, in 2021, graduating with a CGPA of <strong>3.30 out of 4.0</strong>. During my undergraduate studies, I was awarded <strong>three scholarships</strong>—one for admission and four for academic excellence. I also completed my M.Sc. in Computer Science and Engineering with a CGPA of <strong>3.6 out of 4.0</strong>. My academic journey began with a perfect GPA of <strong>5.0 out of 5.0</strong> in both my Higher Secondary Certificate (HSC) and Secondary School Certificate (SSC) exams.",
    imgUrl: img1,
  },
  {
    title: "Software Engineer",
    description:
      "As a Software Engineer at Kaz Software, Dhaka, Bangladesh, I work on an internal web-based project using <strong> React, Angular, and MongoDB, PostgreSQL</strong>. I am working on <strong> P1ston team  as a Front-End developer</strong> that is modernizes the industrial supply chain by developing software that streamlines information flow and enhances decision-making.",
    imgUrl: img2,
  },
  {
    title: "Problem Solver",
    description:
      "I am a dedicated <strong> problem solver </strong> with extensive experience across various competitive programming platforms, including <strong> Codeforces, AtCoder, CodeChef, and LeetCode </strong>. I have successfully tackled numerous challenges, consistently improving my skills and ranking. My approach to problem-solving is rooted in <strong> analytical thinking, algorithmic efficiency, and a deep understanding of data structures </strong>. I am passionate about learning and growing in the field of competitive programming, always striving to stay ahead of the curve and apply my knowledge to real-world scenarios.",
    imgUrl: img3,
  },
  {
    title: "Hobby",
    description:
      "I am passionate about sports, with a particular interest in <strong> Football and Cricket </strong>. On the football field, I enjoy the fast-paced action and the teamwork required to succeed. In cricket, I take pride in being an <strong> all-rounder </strong>, with strong skills both as a batter and a bowler. Whether it iss hitting runs or taking wickets, I relish the challenge and strategy involved in every game. Playing these sports keeps me physically active and sharpens my ability to think quickly and work as part of a team. Beyond the field, these experiences have also taught me valuable lessons in leadership, resilience, and perseverance.",
    imgUrl: img4,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Strong Research</span> <br />
        means <span>Stronger Innovation</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: about.description }}></p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
