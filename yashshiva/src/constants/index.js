import yashfoodz from "../assets/yashfoodz.png";
import food from "../assets/food.jpg";
import recipe from "../assets/recipe.jpg";

import ecommerce from "../assets/ecommerce.jpg";



export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "#mail", label: "Mail me" }
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Yash shiva ,a passionate Software developer specializing in the MERN stack, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "View Resume",
  resumeLink: "https://docs.google.com/document/d/1x-FraujE6K-anURAia4r22CDYgkL6v8A7x5JZLvs13M/edit?tab=t.0",
};

export const PROJECTS = [
  {
    name: "YashFoodz",
    description: "A food Ordering app using React js and redux toolkit",
    image: food,
    link: "https://github.com/Yashshiva75/Food-Dilevery-app",
    live:"https://yashfoodz.netlify.app/"
  },
  {
    name: "E-commerce",
    description: "This app is made using React js ,Tailwind ,Headless ui, and Firebase as backend",
    image: ecommerce,
    link: "https://github.com/Yashshiva75/Full-stack-E-commerce",
    
  },
  {
    name: "Meal master",
    description: "This project is made using vanilla javascript that uses mealdb's API to fetch dishes",
    image: recipe,
    link: "https://github.com/Yashshiva75/Recipe-app",
    live: "https://recipeapp-xi-one.vercel.app/"
  },
  
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I hold a B.Tech in Computer Science from Bikaner Technical University, with 1 year of hands-on experience in Prompt Engineering. My technical expertise spans across React.js, TailwindCSS, Bootstrap, Firebase, Material UI, Chakra UI, Node.js, MongoDB, and MySQL. As an aspiring MERN Stack Developer, I am passionate about building scalable, dynamic web applications and continuously improving my skills to stay ahead in the ever-evolving tech landscape. With a blend of creativity and problem-solving abilities, I aim to deliver exceptional digital solutions that drive innovation and enhance user experiences."
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — Present",
    title: "Full stack Developer at Syndell technologies",
    location: "Ahemdabad",
    description: [
      "As a Full Stack Developer at Syndell Technologies, I specialized in designing and building web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. My role involved creating responsive, user-friendly frontends with React.js, developing robust backend APIs using Node.js and Express.js, and managing efficient database operations with MongoDB. I collaborated with cross-functional teams to deliver scalable and high-performance solutions while ensuring seamless integration of third-party services. By following agile practices and maintaining a strong focus on code quality, I successfully delivered projects that met client expectations and business goals.",
    ],
  },
  {
    yearRange: "2023 — 2024",
    title: "Prompt Engineer at Softage.Ai",
    location: "Ahemdabad",
    description: [
      "In my role as a Prompt Engineer, I worked on developing and optimizing AI-driven solutions by crafting, refining, and testing prompts for large language models. My responsibilities included designing effective prompts to generate accurate, context-aware outputs, analyzing model behavior, and iterating prompts to improve performance across various use cases. I collaborated with AI teams to gather and annotate raw data, ensuring that the model responses align with the intended task requirements. Additionally, I leveraged tools like Bash scripting, Git, and GitHub for prompt version control, making significant contributions to enhancing the capabilities of AI-driven models for more reliable and efficient responses.",
    ],
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "Yashshiva59@gmail.com",
  phone: '+91 6378709359',
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/yash7shiva/",
      ariaLabel: "Follow me on Twitter",
      icon: "RiInstagramFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Yashshiva75",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yash-shiva/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
    {
      platform: "Gmail",
      url: "http://www.yashshiva59@gmail.com/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiGoogleFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Yash shiva. All rights reserved.`,
};
