import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";
import InitialAnimation from "@components/initialAnimation";
import { GetStaticProps } from "next";
import { client, GET_SELECTED_WORK } from "src/lib/graphcms";
import { ProjectsType } from "@utils/types";

const Home = ({ projects }: { projects: ProjectsType[] | null }) => {
    return (
        <div>
            <InitialAnimation />
            <Hero />
            <About />
            <Work projects={projects} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data: { projects: ProjectsType[] | null } = await client.request(
        GET_SELECTED_WORK
    );

    return {
        props: {
            projects: data.projects,
        },
    };
};

export default Home;
