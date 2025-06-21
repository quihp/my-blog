import jsIcon from "./../images/icons/javascriptIcon.svg"
import tsIcon from "./../images/icons/typescript-svgrepo-com.svg"
import javaIcon from "./../images/icons/java-svgrepo-com.svg"
import phpIcon from './../images/icons/php-svgrepo-com.svg';
import sqlIcon from "./../images/icons/sql-database-generic-svgrepo-com.svg"
import css3Icon from "./../images/icons/css3-logo-svgrepo-com.svg"
import tailwindIcon from "./../images/icons/tailwind-css-svgrepo-com.svg"
import reactIcon from "./../images/icons/react-svgrepo-com.svg"
import angularIcon from "./../images/icons/angular-icon-svgrepo-com.svg"
import reduxIcon from "./../images/icons/redux-logo-svgrepo-com.svg"
import muiIcon from "./../images/icons/material-ui-svgrepo-com.svg"
import webpackIcon from "./../images/icons/webpack-svgrepo-com.svg"
import springIcon from "./../images/icons/spring-svgrepo-com.svg"
import restIcon from "./../images/icons/rest-api-svgrepo-com.svg"
import postgresqlIcon from "./../images/icons/postgresql-svgrepo-com.svg"

import gitIcon from "./../images/icons/git-svgrepo-com.svg"
import jenkinsIcon from "./../images/icons/jenkins-svgrepo-com.svg"
import postmanIcon from "./../images/icons/postman-icon-svgrepo-com.svg"
import trelloIcon from "./../images/icons/jira-svgrepo-com.svg"
import agileIcon from "./../images/icons/scrum-svgrepo-com.svg"
import uiuxIcon from "./../images/icons/equalizer-interface-ui-ux-svgrepo-com.svg"

import linuxIcon from "./../images/icons/linux-svgrepo-com.svg"
import windowsIcon from "./../images/icons/windows-svgrepo-com.svg"
import networksIcon from "./../images/icons/cld-cloud-network-folder-svgrepo-com.svg"
import webIcon from "./../images/icons/web-svgrepo-com.svg"
import wpIcon from "./../images/icons/wordpress-svgrepo-com.svg"
import adobeIcon from "./../images/icons/adobe-creative-cloud-svgrepo-com.svg"
import capcutIcon from "./../images/icons/capcut-svgrepo-com.svg"
import teamworkIcon from "./../images/icons/teamwork-team-people-business-meeting-group-office-svgrepo-com.svg"
import presentationIcon from "./../images/icons/presentation-svgrepo-com.svg"

// Import project Images
import carerhubImg from "./../images/projects/career.png"
import pgaImg from "./../images/projects/pga.png"
import acaImg from "./../images/projects/aca.webp"
import maaImg from "./../images/projects/maa.png"
import tesselImg from "./../images/projects/tessel.svg"
import crmImg from "./../images/projects/crm.webp"

export const cvData = {
  name: "Huỳnh Phú Quí",
  title: "Software Developer",
  summary: `I have been a software developer for 5 years, specializing in in front-end development with a strong focus on building responsive, user-friendly web applications. 
With a solid understanding of modern JavaScript frameworks and a keen eye for design. I strive to create seamless user experiences that combine performance with aesthetics.`,
  education: [
    {
      period: "8/2015 - 11/2019",
      institution:
        "University Of Information Technology - Vietnam National University, Ho Chi Minh City",
      degree: "Major in INFORMATION SECURITY (Honor Program)",
      level: "Very Good (CPA 8.67/10)",
    },
  ],
  languages: ["English - TOEIC 785"],
  skills: {
    programming_languages: [
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "Java", icon: javaIcon },
      { name: "PHP", icon: phpIcon },
      { name: "SQL", icon: sqlIcon },
    ],
    frontend_development: [
      { name: "HTML/CSS/jQuery", icon: css3Icon },
      { name: "SASS/SCSS/TailwindCSS", icon: tailwindIcon },
      { name: "ReactJS", icon: reactIcon },
      { name: "Angular", icon: angularIcon },
      { name: "Redux/Redux-Saga/Mobx/RxJS", icon: reduxIcon },
      { name: "MUI/AntDesign/Bootstrap", icon: muiIcon },
      { name: "Webpack/Vite", icon: webpackIcon },
    ],
    backend_development: [
      { name: "Java Spring MVC", icon: springIcon },
      { name: "Java Spring Boot", icon: springIcon },
      { name: "RESTful APIs", icon: restIcon },
      { name: "MySQL/PostgreSQL", icon: postgresqlIcon },
    ],
    tools_methodologies: [
      { name: "Git", icon: gitIcon },
      { name: "Jenkins", icon: jenkinsIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "Trello/Jira", icon: trelloIcon },
      { name: "Agile/Scrum", icon: agileIcon },
      { name: "UI/UX Design Principles", icon: uiuxIcon },
    ],
    systems_networking: [
      { name: "Linux", icon: linuxIcon },
      { name: "Windows Server", icon: windowsIcon },
      { name: "SDN Networks", icon: networksIcon },
      { name: "Web Services (Apache, Nginx, IIS)", icon: webIcon },
    ],
    others: [
      { name: "WordPress", icon: wpIcon },
      { name: "Photoshop/Illustrator", icon: adobeIcon },
      { name: "Vegas/Capcut", icon: capcutIcon },
      { name: "Teamwork", icon: teamworkIcon },
      { name: "Presentation", icon: presentationIcon },
    ],
  },
  experience: [
    {
      period: "11/2023 - present",
      company: "Viettel Business Solutions Corporation",
      role: "Software Developer - Full-Time",
      logo: "../../images/logo/logo.png",
      techStack: ["ReactJS", "Redux-Saga", "PostgreSQL", "Java Spring Boot"],
      details:
        "Front-end programming for web applications, including Internal Management Tools and TesselAI",
    },
    {
      period: "9/2023 - 11/2023",
      company: "Information Technology Park - VNUHCM (ITP - VNUHCM)",
      role: "Web Developer - Freelancer",
      logo: "../../images/logo/logo.png",
      techStack: ["WordPress"],
      details:
        "Developed and deployed a custom Content Management System (CMS) website using WordPress.",
    },
    {
      period: "7/2019 - 8/2023",
      company: "Ho Chi Minh City University Of Foreign Languages (HUFLIT)",
      role: "Web Developer - Full-Time",
      logo: "../../images/logo/logo.png",
      techStack: ["ReactJS", "Java Spring MVC/Boot", "MySQL"],
      details:
        "Full-stack developer, IT Business Analyst, Manual Testing for Internal Projects.",
    },
    {
      period: "9/2018 - 11/2018",
      company: "Citynow Technology Solutions - CTS",
      role: "Internship Blockchain",
      logo: "../../images/logo/logo.png",
      techStack: ["Solidity", "Java", "HTML/CSS"],
      details:
        "Learned to build Blockchain projects and DApps for cryptocurrency transactions through MetaMask Wallet.",
    },
  ],
  projects: [
    {
      name: "Internal Management Tools",
      role: "Front-end",
      image: crmImg,
      tech: ["React-Redux", "Java Spring Boot", "PostgreSQL"],
      details: [
        "Developed and implemented user interface components using ReactJS and Redux Saga.",
        "Developed dynamic forms with real-time validation.",
        "Collaborated with team members to troubleshoot, debug, and optimize the frontend.",
        "Assisted the Backend team in building APIs and the Data team in querying data.",
      ],
    },
    {
      name: "Tessel AI",
      role: "Front-end",
      image: tesselImg,
      tech: ["React-Redux"],
      details: [
        "Developed and implemented user interface components using ReactJS and related technologies.",
        "Participated in code reviews for team members.",
        "Refactored the structure of a React project to improve maintainability and performance.",
      ],
    },
    {
      name: "Manage Attendance Affairs - MAA",
      role: "Full-stack",
      image: maaImg,
      tech: ["React-Mobx", "Java Spring Boot", "MySQL"],
      details: [
        "Built responsive and intuitive user interfaces for mobile web to streamline attendance tracking.",
        "Designed solutions for attendance tracking, leave requests, and make-up teaching features.",
      ],
    },
    {
      name: "E-Office (ACA)",
      role: "Full-stack",
      image: acaImg,
      tech: ["React-Mobx", "Java Spring Boot", "MySQL"],
      details: [
        "Implemented digital signature functionality with multi-level approval workflow.",
        "Built responsive user interfaces for agency calendar management.",
      ],
    },
    {
      name: "Post-graduate Affairs - PGA",
      role: "Full-stack",
      image: pgaImg,
      tech: ["HTML/CSS/JQuery", "Java Spring MVC", "MySQL"],
      details: [
        "Created responsive interfaces with Bootstrap and JSP.",
        "Developed modules for curriculum management, student grade tracking, tuition fee calculation, and course registration.",
      ],
    },
    {
      name: "Carerhub",
      role: "Full-stack",
      image: carerhubImg,
      tech: ["Wordpress"],
      details: [
        "Developed a WordPress-based job portal connecting recruiters and candidates.",
        "Configured and installed Apache web server for hosting.",
      ],
    },
  ],
}
