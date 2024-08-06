import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` A dedicated web developer with a fervent passion for bringing
              digital ideas to life. Armed with expertise in M.E.R.N. Stack, I
              thrive on transforming concepts into interactive realities. With
              an eye for detail and a commitment to staying abreast of industry
              trends, I'm ready to take on new challenges and contribute my
              skills to create engaging web solutions. Let's collaborate and
              turn your digital aspirations into a captivating reality!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun. 2024 - Jul. 2024",
    role: "Product Developer Intern",
    company: "Global Knowledge Technologies",

    description: `Developed a user-friendly interface using React and Bootstrap, significantly improving the platform's accessibility , visual appeal and responsive design. I implemented SEO best practices, including optimizing meta tags and content structure, which led to a substantial increase in organic search visibility and traffic.`,
    technologies: [
      "Javascript",
      "React.js",
      "Bootstrap",
      "SEO",
      "React Helmet",
      "Git",
      "Github",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Retro Brew",
    image: project2,
    description:
      "A web application that allows users to search for their favorite coffee and order coffee online and initiated reward system for the user who have crossed some threshold.",
    technologies: ["React", "Firebase", "Bootstrap", "Git", "Github"],
    link: "https://retrobreww.web.app/",
  },
  {
    title: "Movie Munchies",
    image: project1,
    description:
      "A fully functional food ordering System in Theatre with features like Food items listing, shopping cart, and user authentication.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.Js",
      "Git",
      "Github",
    ],
    link: "https://movie-munchies.vercel.app/",
  },
];

export const CONTACT = {
  address: "Chennai, Tamil Nadu",
  phoneNo: "+91 99522 76785 ",
  email: "rithikraja28.rr@gmail.com",
};
