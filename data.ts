import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>MongoDB</b>  & <b>Node API</b> ",
  }
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "ExpressJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "NGINX",
    level: "65",
  }
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "GrahpQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "60",
  }
];

export const projects: IProject[] = [
  { 
    name: "Liquid Shop",
    description:
      "This website is for ordering water bottle",
    image_path: "/images/liquid.JPG",
    deployed_url: "",
    github_url: "https://github.com/murafalizade/Liquid-shop-nextJS",
    category: ["next"],
    key_techs: ["Next", "SCSS", "Express"],
  },
  {
    name: "TODO App",
    image_path: "/images/todo.JPG",
    deployed_url: "",
    github_url: "https://github.com/murafalizade/ReactTodoApp",
    category: ["react"],
    description:
      "You take not with this web app.Absolutly this app save your todo list.",
    key_techs: ["React", "Boostrap"],
  },
  {
    name: "GPA Calculator App",
    image_path: "/images/gpacalc.PNG",
    deployed_url: "https://gpa-calculator.herokuapp.com",
    github_url: "https://github.com/murafalizade/gpa-calculator-reactJS",
    category: ["react"],
    description:
      "This is my first react project. I use only react.js web app calculate your point and save",
    key_techs: ["React", "Express", "Boostrap"],
  },

  {
    name: "W3School Clone",
    image_path: "/images/w3school.JPG",
    deployed_url: "",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["vanilla js"],
    description:
      "First  Project :)",
    key_techs: ["HTML", "SCSS", "Vanilla JS"],
  },

  {
    name: "TicTacToe App",
    image_path: "/images/tictactoe.JPG",
    deployed_url: "tictactoe-game.herokuapp.com",
    github_url: "https://github.com/murafalizade/TictTicToe-pure-javascript",
    category: ["vanilla js"],
    description:
      "Tried ML with JS :) | this app is xox game",
    key_techs: ["HMTL", "CSS", "Vanilla js"],
  },
  {
    name: "English Vocablary App",
    image_path: "/images/englishvocablary.PNG",
    deployed_url: "https://englishvocablaryapp.herokuapp.com",
    github_url: "https://github.com/murafalizade/EnglishVovablaryApp",
    category: ["react"],
    description:
      "In this web site users get a new english word every day.  \n Every day word's count  increase.",
    key_techs: ["React", "TypeScript", "Cheery io", "Express", "SCSS"],
  },
  {
    name: "E-commerce Website (thisf00d)",
    image_path: "/images/thisfood.JPG",
    deployed_url: "https://thisf00d.herokuapp.com",
    github_url: "https://github.com/murafalizade/ShoppingReactAppOriginal",
    category: ["express", "react","mongo"],
    description:
      "E-commerce Website which obtain many  fast food restaurants ",
    key_techs: ["React", "Node", "Express", "MongoDB", "Redux"],
  },
];
