import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    netflix,
    anime,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    c,
    csharp,
    java,
    python,
    mysql,
    diet,
    website,
    game,
    movie,
    radical,
    yorku,
    payload,
    film,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend"
    },
    {
        imageUrl: csharp,
        name: "C Sharp",
        type: "Backend"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Sofware Engineering Intern",
        company_name: "Radical AI",
        icon: radical,
        iconBg: "#b7e4c7",
        date: "Jan 2024 - Apr 2024",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JS and other related technologies.",
            "Collaborating with others to create high-quality products which are useful and usable.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Computer Science Student",
        company_name: "York University",
        icon: yorku,
        iconBg: "#b7e4c7",
        date: "Sep 2019 - Dec 2023",
        points: [
            "Data Structures and Algorithms: Covered fundamental algorithms, data structures, and their applications.",
            "Operating Systems: Studied OS principles, process management, memory management, and system calls.",
            "Software Design: Focused on software development methodologies, project management, and collaborative coding practices.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/tenzinkunchok25',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tenzinkunchok',
    }
];

export const projects = [
    {
        iconUrl: film,
        theme: 'btn-back-blue',
        name: 'Film Horizon',
        description: 'Designed and developed Film Horizon, a movie streaming platform, utilizing HTML, CSS, and JavaScript. Integrated Rest APIs from TMDB and VisSrc to enhance user experience with seamless video streaming capabilities.',
        link: 'https://github.com/tenzinkunchok25/film-horizon',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'Developed a web application with a visual design similar to Netflix. Users can enjoy the familiar visual layout and design elements of Netflix.',
        link: 'https://github.com/tenzinkunchok25/netflix',
    },
    {
        iconUrl: payload,
        theme: 'btn-back-pink',
        name: 'Payload E-commerce',
        description: 'Developed a dynamic e-commerce website using Payload CMS, featuring user authentication, Stripe payment integration, product listings, a responsive shopping cart, and an admin page for content management. Implemented dark and light mode options for enhanced user experience, all within a scalable and maintainable architecture.',
        link: 'https://github.com/tenzinkunchok25/ecommerce'
    },
    {
        iconUrl: movie,
        theme: 'btn-back-red',
        name: 'Movie Land',
        description: 'Developed a react web application to search movies, using an API to fetch data and information about the searched movies. ',
        link: 'https://github.com/tenzinkunchok25/movie-land',
    },
];