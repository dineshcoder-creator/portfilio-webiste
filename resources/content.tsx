import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dinesh",
  lastName: "M",
  name: "Dinesh M",
  role: "Computer Science Student",
  avatar: "/images/avatar.jpg", // replace with your actual photo path if available
  email: "manogaranpartha68@gmail.com",
  location: "Asia/Kolkata", // IANA time zone for Chennai, India
  languages: ["Tamil", "English", "Telugu"], 
}


const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "linkedin.com/in/dinesh-dinesh-8372b9326",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I am a Full-Stack Developer skilled in HTML, CSS, JavaScript, React.js, Express, MongoDB, SQL, and Python. I build modern, 
       responsive UIs with a strong focus on UI/UX while developing secure and scalable back-end systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Top Tech Developers",
        timeframe: "30 August 2024 – 30 September 2024",
        role: "Internship",
        achievements: [
          <>
            Gained hands-on exposure to Python, organisational workflows, and effective collaboration. Learned how to seek help,
             connect with the right people, and stay motivated in a professional setting.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dr. M.G.R. Research Institute, Madhuravoyal, Chennai",
        description: <>B.Sc. Computer Science (2022 – 2025)</>,
      },
      {
        name: "Little Holy Angels Matriculation Higher Secondary School, Korattur",
        description: <>HSC, 2022</>,
      },
      {
        name: "Little Holy Angels Matriculation Higher Secondary School, Korattur",
        description: <>SSLC, 2020</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Skilled in building responsive UIs with HTML, CSS, JavaScript, and React.js, with a strong focus on UI/UX.</>
        ),
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React.js", icon: "react" },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>Experienced in developing secure and scalable back-end systems with Express.js, SQL, and MongoDB.</>
        ),
        tags: [
          { name: "Express.js", icon: "express" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
      {
        title: "Programming & Scripting",
        description: (
          <>Proficient in Python for problem-solving, scripting, and backend development.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
    ],
  },
  
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
