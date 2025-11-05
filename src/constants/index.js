import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import projectsynckin from "../assets/projects/projectsynckin.png";
import projectpinpoint from "../assets/projects/projectpinpoint.png";
import projectzerotrust from "../assets/projects/projectzerotrust.png";
import projectseithi360 from "../assets/projects/projectseithi360.png";

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
  {
    year: "Sep. 2025 - Oct. 2025",
    role: "GSMA Open Gateway Hackathon Winner- 1st Price(4,00,000 INR)",
    company: "GSMA | Nokia",

    description: ` Secured 1st Place among 400+ teams PinPoint is an AI-powered local marketing platform designed to help small businesses grow effortlessly. PinPoint enables local shop owners to launch instant, automated marketing campaigns by leveraging real-time location intelligence. Using geofencing technology, it detects when users enter specific areas and instantly promotes nearby offers through push notifications or SMS - connecting businesses with customers at the perfect moment.`,
    technologies: ["Flutter", "Flask", "Python"],
  },
  {
    year: "Sep. 2025 - Sep. 2025",
    role: "Global MCP Hackathon Winner- 2nd Price (3000 USD)",
    company: "Descope | HackerEarth",
    description: `Secured 2nd place among global participants (students, solo devs, startup founders, enterprise engineers). Built Z3r0Trust, an autonomous multi-agent security framework powered by Descope for secure agent-to-agent communication.`,
    technologies: [
      "Splunk",
      "React.js",
      "Python",
      "FASTAPI",
      "Descope",
      "Flask",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Synckin.ai",
    image: projectsynckin,
    description:
      "Our platform merges task organization, finance tracking, family collaboration, and personalized AI services into one modern, sleek interface.",
    technologies: ["React", "Express", "Node", "MongoDB", "Llama", "A.I."],
    link: "https://github.com/RithikRaja28/synckin.ai",
  },
  {
    title: "PinPoint – Hyperlocal Marketing and Discovery Platform",
    image: projectpinpoint,
    description:
      "Developed PinPoint an AI-powered hyper-local marketing platform designed to help small businesses grow effortlessly using geofencing and network APIs.",
    technologies: ["Flutter", "Flask", "Python", "Firebase"],
    link: "https://github.com/RithikRaja28/PinPoint-Hyperlocal-Marketing-and-Discovery-Platform",
  },
  {
    title: "Z3r0 Trust - Middleware Application",
    image: projectzerotrust,
    description:
      "Developed Z3r0Trust, an autonomous multi-agent security framework powered by Descope to safeguard enterprise systems from modern cyber threats.",
    technologies: ["React", "Express", "MySQL", "Splunk", "Descope", "FastAPI"],
    link: "https://github.com/rohitvijayan1111/Z3r0Trust",
  },
  {
    title: "Seithi360",
    image: projectseithi360,
    description:
      "Developed Seithi360, a feature-rich news aggregator delivering 100% verified news. Built custom APIs and scrapers for seamless content aggregation from trusted sources.",
    technologies: ["React", "Express", "MySQL", "WebScraping", "RSS Feeds"],
    link: "https://github.com/rohitvijayan1111/Seithi-360",
  },
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
