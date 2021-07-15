import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
    SiApollographql,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript,
    SiFirebase,
    SiStyledComponents,
    SiNextDotJs,
    SiHeroku,
    SiSass,
    SiJavascript,
    SiHtml5,
    SiJquery,
    SiPython,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { DiDjango } from "react-icons/di";

export const projects = [
    {
        id: 1,
        title: "Nivelo",
        type: "Full-stack",
        description:
            "Tutoring application that helps college students to improve their knowledge or difficulties with extra classes. 🎓",
        cover: "/projects/nivelo.jpg",
        tech: [
            {
                id: 1,
                name: "React",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "NodeJS",
                icon: <FaNodeJs size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "GraphQL",
                icon: <GrGraphQl size={27} color="#fff" />,
            },
            {
                id: 4,
                name: "Apollo",
                icon: <SiApollographql size={27} color="#fff" />,
            },
            {
                id: 5,
                name: "Postgresql",
                icon: <SiPostgresql size={27} color="#fff" />,
            },
            {
                id: 6,
                name: "Tailwindcss",
                icon: <SiTailwindcss size={27} color="#fff" />,
            },
            {
                id: 7,
                name: "MongoDb",
                icon: <SiMongodb size={27} color="#fff" />,
            },
            {
                id: 8,
                name: "Typescript",
                icon: <SiTypescript size={27} color="#fff" />,
            },
            {
                id: 9,
                name: "NextJS",
                icon: <SiNextDotJs size={27} color="#fff" />,
            },
            {
                id: 10,
                name: "Heroku",
                icon: <SiHeroku size={27} color="#fff" />,
            },
            {
                id: 11,
                name: "Vercel",
                icon: <IoLogoVercel size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/Nivelo",
        live: "https://nivelo.vercel.app/",
    },
    {
        id: 2,
        title: "Flate",
        type: "Full-stack",
        description:
            "Full stack real estate website built with Next, tailwind and Prisma. 🔑",
        cover: "/projects/flate.jpg",
        tech: [
            {
                id: 1,
                name: "React",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "Postgresql",
                icon: <SiPostgresql size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "Tailwindcss",
                icon: <SiTailwindcss size={27} color="#fff" />,
            },
            {
                id: 4,
                name: "Typescript",
                icon: <SiTypescript size={27} color="#fff" />,
            },
            {
                id: 5,
                name: "NextJS",
                icon: <SiNextDotJs size={27} color="#fff" />,
            },
            {
                id: 6,
                name: "Vercel",
                icon: <IoLogoVercel size={27} color="#fff" />,
            },
            {
                id: 7,
                name: "Prisma",
            },
            {
                id: 8,
                name: "Postgresql",
            },
            {
                id: 9,
                name: "Leaflet",
            },
        ],
        repo: "https://github.com/NicolasMarqui/Flate",
        live: "https://flate.vercel.app/",
    },
    {
        id: 3,
        title: "Marca Ponto",
        type: "Front-end",
        description:
            "Marca Ponto is a web-based time clock solution that allows you to track employee time and attendance online using a standard web browser. ⏰",
        cover: "/projects/marca_ponto.jpg",
        tech: [
            {
                id: 1,
                name: "React",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "NodeJS",
                icon: <FaNodeJs size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "MongoDb",
                icon: <SiMongodb size={27} color="#fff" />,
            },
            {
                id: 4,
                name: "Typescript",
                icon: <SiTypescript size={27} color="#fff" />,
            },
            {
                id: 5,
                name: "SASS",
                icon: <SiSass size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/MarcaPonto",
        live: "https://marcaponto.netlify.app/",
        video: "https://www.youtube.com/watch?v=TSbGiKnT9HY",
    },
    {
        id: 4,
        title: "Focalize",
        type: "Front-end",
        description: "📆 Simple app that helps you to focus",
        cover: "/projects/focalize.jpg",
        tech: [
            {
                id: 1,
                name: "React Native",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "Typescript",
                icon: <SiTypescript size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "Styled Components",
                icon: <SiStyledComponents size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/Focalize",
    },
    {
        id: 5,
        title: "Feasty",
        type: "Front-end",
        description: "🍔 Find restaurants across the globe",
        cover: "/projects/feasty.jpg",
        tech: [
            {
                id: 1,
                name: "React Native",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "Typescript",
                icon: <SiTypescript size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "Firebase",
                icon: <SiFirebase size={27} color="#fff" />,
            },
            {
                id: 4,
                name: "Styled Components",
                icon: <SiStyledComponents size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/Feasty",
    },
    {
        id: 6,
        title: "Botant",
        type: "Front-end",
        description: "🌱 Plant Care Reminder & Water Tracker",
        cover: "/projects/botant.jpg",
        tech: [
            {
                id: 1,
                name: "React Native",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "Typescript",
                icon: <SiTypescript size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "Styled Components",
                icon: <SiStyledComponents size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/Botant",
    },
    {
        id: 7,
        title: "Foodz",
        type: "Full-stack",
        description: "🍕 Delivery System built using Javascript and Django",
        cover: "/projects/foodz.jpg",
        tech: [
            {
                id: 1,
                name: "HTML",
                icon: <SiHtml5 size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "SASS",
                icon: <SiSass size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "Javascript",
                icon: <SiJavascript size={27} color="#fff" />,
            },
            {
                id: 4,
                name: "Jquery",
                icon: <SiJquery size={27} color="#fff" />,
            },
            {
                id: 5,
                name: "Django",
                icon: <DiDjango size={27} color="#fff" />,
            },
            {
                id: 6,
                name: "Pyhton",
                icon: <SiPython size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/Foodz",
    },
    {
        id: 8,
        title: "Marca Ponto App",
        type: "Front-end",
        description:
            "Marca Ponto is a android/IOS time clock solution that allows you to track employee time and attendance online using a standard mobile. ⏰",
        cover: "/projects/marca_pontoApp.jpg",
        tech: [
            {
                id: 1,
                name: "React Native",
                icon: <FaReact size={27} color="#fff" />,
            },
            {
                id: 2,
                name: "Javascript",
                icon: <SiJavascript size={27} color="#fff" />,
            },
            {
                id: 3,
                name: "Styled Components",
                icon: <SiStyledComponents size={27} color="#fff" />,
            },
        ],
        repo: "https://github.com/NicolasMarqui/MarcaPonto-APP",
    },
];

export const skills = [
    {
        id: 1,
        name: "HTML",
    },
    {
        id: 2,
        name: "CSS",
    },
    {
        id: 3,
        name: "SASS & LESS",
    },
    {
        id: 4,
        name: "Javascript",
    },
    {
        id: 5,
        name: "Reactjs",
    },
    {
        id: 6,
        name: "Nextjs",
    },
    {
        id: 7,
        name: "React Native",
    },
    {
        id: 8,
        name: "Node",
    },
    {
        id: 9,
        name: "Mongodb",
    },
    {
        id: 10,
        name: "Express",
    },
    {
        id: 11,
        name: "Graphql",
    },
    {
        id: 12,
        name: "Typescript",
    },
    {
        id: 13,
        name: "Postgresql",
    },
    {
        id: 14,
        name: "Tailwind CSS",
    },
    {
        id: 15,
        name: "Styled Components",
    },
    {
        id: 16,
        name: "Firebase",
    },
];
