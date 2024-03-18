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
    movie

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
        title: "Web Developer",
        company_name: "HTML, CSS, Javascript",
        icon: website,
        iconBg: "#b7e4c7",
        date: "Sep 2019 - present",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JS and other related technologies.",
            "Collaborating with others to create high-quality products which are usefula and usable.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: " Java App Developer",
        company_name: "Java, MySQL",
        icon: diet,
        iconBg: "#accbe1",
        date: "September 2023 - December  2023",
        points: [
            "Developed a diet tracking app in collabortion with three other students using git for version control.",
            "The application is able to track the diet of user and excercise and predict the weight loss of the user.",
            "All data for all users including user profiles, diet and exercise logs are stored securely in a MySQL database, ensuring data integrity and privacy for each unique user.",
            "Project was completed in strict manner following the SDD (Software Design Document).",
            "Used several design patterns and followed the SOLID principles to complete the project."

        ],
    },
    {
        title: "Unity Game Developer",
        company_name: "C#",
        icon: game,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Dec 2023",
        points: [
            "Developed engaging 2D games using Unity engine, focusing on gameplay mechanics, user interfaces, and sound effects.",
            "Utilized C# scripting to program game functionality, such as player controls, enemy behavior, and game logic.",
            "Integrated third-party plugins and assets to enhance game features and performance.",
            "Conducted testing and debugging to ensure high-quality, bug-free gameplay experiences.",
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
        link: 'https://www.linkedin.com/in/tenzin-kunchok-24a6282ba',
    }
];

export const projects = [
    {
        iconUrl: anime,
        theme: 'btn-back-blue',
        name: 'Anime Library',
        description: 'Developed a web application for watching anime without ads, using an API to fetch episode data and information about the top airing anime.',
        link: 'https://github.com/tenzinkunchok25/animelibrary',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'Developed a web application with a visual design similar to Netflix. Users can enjoy the familiar visual layout and design elements of Netflix.',
        link: 'https://github.com/tenzinkunchok25/netflix',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-red',
        name: 'Movie Land',
        description: 'Developed a react web application to search movies, using an API to fetch data and information about the searched movies. ',
        link: 'https://github.com/tenzinkunchok25/movie-land',
    },
];