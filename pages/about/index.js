
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
  FaMobileAlt
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiReact,
} from "react-icons/si";
import CountUp from "react-countup";

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
          <SiReact key="react-native" />,
        ],
      },
      {
        title: "Mobile App",
        icons: [
          <FaMobileAlt key="mobile-app" />,
        ],
      },
     
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Best Developer Award",
        stage: "2023",
      },
      {
        title: "Outstanding Contribution",
        stage: "2022",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern - Nhub Nigeria",
        stage: "2020 - 2021",
      },
      {
        title: "Web Developer - Bluehouse Technologies",
        stage: "2022 - Present",
      },
      {
        title: "Mobile Developer - Bluehouse Technologies",
        stage: "2024 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Nhub Nigeria, Bluehouse Technology",
        stage: "2021",
      },
      {
        title: "Front-end Developer",
        stage: "2022",
      },
      {
        title: "Certified Front-End Developer - Bluehouse Technology",
        stage: "2022",
      },
      {
        title: "Certified Mobile App Developer - Bluehouse Technology",
        stage: "2024",
      },
    ],
  },
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
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[220px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          < motion.h2 className="h2 mt-8"
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           animate="show"
           exit="hidden">
            Crafted <span className="text-accent">stories</span>inspire stunning designs.
            </ motion.h2>
          <motion.p 
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            {/* 3 Years ago i began freelance as a developer. since then, I&apos;ve done
              reomte work for a startups and collaborated on digital products for 
              business and consumer use. */}
              Three years ago, I began freelancing as a developer, 
              working remotely on startups and digital products.
          </ motion.p>
          {/* counter */}
          
          <motion.div
           variants={fadeIn("right", 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden" 
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto
          xl:mx-0 mb-8" >
            <div className="flex flex-1 xl:gap-x-6" >
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent bm-2">
                <CountUp start={0} end={4} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Years of experience</div>
              </div>
            
            <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                {/* clients */}
              <div className="text-2xl xl:text-4xl font-extrabold text-accent bm-2">
                <CountUp start={0} end={100} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Satified clients</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent bm-2">
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">finished projects</div>
              </div>
              </div>
          </motion.div>
          </div>
        
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[340px] ">
          <div className="flex gap-x-4 xl:gap-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 ${
                  selectedIndex === sectionIndex
                    ? "text-accent after:w-[100%] after:bg-accent"
                    : "text-white after:bg-white"
                }`}
                onClick={() => handleSectionClick(sectionIndex)}
              >
                {section.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {skillsSelected &&
              aboutData[0].info.map((item, itemIndex) => (
                <div key={itemIndex} className="skill-item">
                  <div className="flex items-center space-x-2">
                    <div className="text-lg ">{item.title}</div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl">
                        {icon}
                      </div>
                    ))}
                  </div>
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
