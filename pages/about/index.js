import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web & App Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />
        ]
      },
      {
        title: "",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="photoshop" />
        ]
      }
    ]
  },
  {
    title: "awards",
    info: [
      {
        title: "",
        stage: ""
      },
      {
        title: "",
        stage: ""
      }
    ]
  },
  {
    title: "experience",
    info: [
      {
        title: "",
        stage: ""

      },

      {
        title: "Intern - Nhub Nigeria ",
        stage: "2020 - 2021"
      },
      {
        title: "Web Developer - Bluehouse Technologies",
        stage: "2022 - date"
      },
     
    ]
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Nhub Nigeria, Bluehouse Technology",
        stage: "2021"
      },
      {
        title: "Front-end Developer",
        stage: "2022"
      },
      {
        title: "Certified Front-End Developer - Bluehouse Tecnology",
        stage: "2022"
      }
    ]
  }
];

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [skillsSelected, setSkillsSelected] = useState(false);
  const [awardsSelected, setAwardsSelected] = useState(false);
  const [experienceSelected, setExperienceSelected] = useState(false);
  const [credentialsSelected, setCredentialsSelected] = useState(false);

  const handleSectionClick = (sectionIndex) => {
    setSelectedIndex(sectionIndex);
    // Reset all other selections
    setSkillsSelected(false);
    setAwardsSelected(false);
    setExperienceSelected(false);
    setCredentialsSelected(false);

    // Set the selected section
    switch (sectionIndex) {
      case 0:
        setSkillsSelected(true);
        break;
      case 1:
        setAwardsSelected(true);
        break;
      case 2:
        setExperienceSelected(true);
        break;
      case 3:
        setCredentialsSelected(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      {/* <Circles /> */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[230px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 md:ml-36">
        <div>text</div>
        <div>
          <div className="flex gap-x-4 xl:gap-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`${
                  selectedIndex === sectionIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                onClick={() => handleSectionClick(sectionIndex)}
              >
                {section.title}
              </div>
            ))}
          </div>
          <div className="">
            {skillsSelected &&
              aboutData[0].info.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div>{item.title}</div>
                  {item.stage && <div>{item.stage}</div>}
                </div>
              ))}
            {awardsSelected &&
              aboutData[1].info.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div>{item.title}</div>
                  {item.stage && <div>{item.stage}</div>}
                </div>
              ))}
            {experienceSelected &&
              aboutData[2].info.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div>{item.title}</div>
                  {item.stage && <div>{item.stage}</div>}
                </div>
              ))}
            {credentialsSelected &&
              aboutData[3].info.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div>{item.title}</div>
                  {item.stage && <div>{item.stage}</div>}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
