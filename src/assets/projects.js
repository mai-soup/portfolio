import thumbHangmanLg from "./images/hangman.png";
import thumbMaiSoupLg from "./images/mai-soup.png";
import thumbColourPickerLg from "./images/react-colour-picker.png";
import thumbYelpcampLg from "./images/yelpcamp.png";
import thumbAcnhLg from "./images/acnh.png";

const projects = [
  {
    title: "Personal website",
    technologies: ["HTML", "CSS", "SCSS", "Bootstrap", "Jekyll"],
    imgLarge: thumbMaiSoupLg,
    url: "https://mai-soup.github.io",
    github: "https://github.com/mai-soup/mai-soup.github.io",
    link: "/projects/personal-website",
  },
  {
    title: "YelpCamp",
    technologies: [
      "HTML",
      "CSS",
      "Node",
      "Express",
      "EJS",
      "MongoDB",
      "Bootstrap",
    ],
    imgLarge: thumbYelpcampLg,
    url: "https://yelpcamp-aqzy.onrender.com/",
    github: "https://github.com/mai-soup/yelpcamp",
    link: "/projects/yelpcamp",
  },
  {
    title: "Colour Picker",
    technologies: ["HTML", "CSS", "React", "React Router", "Material UI"],
    imgLarge: thumbColourPickerLg,
    url: "https://react-colour-picker.vercel.app/",
    github: "https://github.com/mai-soup/react-colour-picker",
    link: "/projects/colour-picker",
  },
  // {
  //   title: "Hangman",
  //   technologies: ["HTML", "CSS", "React", "Tailwind"],
  //   imgLarge: thumbHangmanLg,
  //   url: "https://hangman-two-psi.vercel.app/",
  //   github: "https://github.com/mai-soup/hangman",
  //   link: "/projects/hangman",
  // },
  {
    title: "ACNH Music Player",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    imgLarge: thumbAcnhLg,
    url: "https://acnh-player.vercel.app/",
    github: "https://github.com/mai-soup/acnh-player",
    link: "/projects/acnh-player",
  },
];

export default projects;
