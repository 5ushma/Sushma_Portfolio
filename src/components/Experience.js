import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Systems Engineer"
              company="TCS"
              companyLink="https://www.tcs.com/"
              time="2021-2022"
              address="Hyderabad, India"
              work="Skilled in creating detailed test cases and plans using manual testing methods, 
              ensuring thorough evaluation of software. Proficient in tools like TestRail,
              HP ALM, and JIRA for efficient test documentation, defect tracking, and collaboration with development teams
              to enhance product reliability."
            />

            <Details
              position="Associate Business Analyst"
              company="Accenture"
              companyLink="http://www.accenture.com/"
              time="2018-2021"
              address="Hyderabad, India."
              work="Collaborated in a team to assess Ads content, 
              using internal tools (SRT) to generate quality reports and maintain high-quality workflow.
              Ensured adherence to client guidelines and policy compliance, contributing to efficient content review with a focus on client satisfaction."
            />

            <Details
              position="Graduate Research Assistant"
              company="SMU"
              companyLink="https://www.smu.edu/"
              time="Spring 2023"
              address="Dallas, Tx."
              work="Created a sophisticated application using HTML, CSS, JavaScript, 
              and Python to intelligently select the best API in workflows, 
              optimizing system performance with statistical analysis of API metrics."
            />

            <Details
              position="Graduate Teaching Assistant"
              company="SMU"
              companyLink="https://www.smu.edu/"
              time="Fall 2023"
              address="Southern Methodist University, Dallas, Tx."
              work="Assisted in teaching Data mining, held office
              hours to help students with assignments, and graded exams and
              assignments."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
