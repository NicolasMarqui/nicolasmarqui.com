import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
    SiApollographql,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript,
    SiFirebase,
} from "react-icons/si";

export const projects = [
    {
        id: 1,
        title: "Nivelo",
        type: "Full-stack",
        description:
            "I’m a full stack developer focused on frontend who also loves to have a little backend adventure",
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
        ],
        repo: "https://github.com/NicolasMarqui/Nivelo",
        live: "https://nivelo.vercel.app/",
    },
    {
        id: 2,
        title: "Flate",
        type: "Full-stack",
        description:
            "I’m a full stack developer focused on frontend who also loves to have a little backend adventure",
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
        ],
        repo: "https://github.com/NicolasMarqui/Flate",
        live: "https://flate.vercel.app/",
    },
    {
        id: 3,
        title: "Marca Ponto",
        type: "Front-end",
        description:
            "I’m a full stack developer focused on frontend who also loves to have a little backend adventure",
        cover: "/projects/marca_ponto.png",
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
        ],
        repo: "https://github.com/NicolasMarqui/MarcaPonto",
        live: "https://marcaponto.netlify.app/",
    },
    {
        id: 4,
        title: "Focalize",
        type: "Front-end",
        description:
            "I’m a full stack developer focused on frontend who also loves to have a little backend adventure",
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
        ],
        repo: "https://github.com/NicolasMarqui/Focalize",
    },
    {
        id: 5,
        title: "Feasty",
        type: "Front-end",
        description:
            "I’m a full stack developer focused on frontend who also loves to have a little backend adventure",
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
        ],
        repo: "https://github.com/NicolasMarqui/Feasty",
    },
    {
        id: 6,
        title: "Botant",
        type: "Front-end",
        description:
            "I’m a full stack developer focused on frontend who also loves to have a little backend adventure",
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
        ],
        repo: "https://github.com/NicolasMarqui/Botant",
    },
];
