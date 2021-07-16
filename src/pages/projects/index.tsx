import Container from "@components/Container";
import { ProjectsType } from "@utils/types";
import { GetStaticProps } from "next";
import { client, GET_ALL_WORK } from "src/lib/graphcms";
import Head from "next/head";
import React from "react";
import WorkCardSmall from "@components/WorkCardSmall";
import FilterList from "@components/FilterList";

const Projects = ({ projects }: { projects: ProjectsType[] | null }) => {
    return (
        <div className="min-h-screen pt-44 md:pt-52 pb-16 md:pb-28 bg-lightSecondary dark:bg-reallyBlack ">
            <Head>
                <title>Nicolas Marqui | projects</title>
            </Head>
            <Container>
                <div className="flex flex-col">
                    <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-center md:text-left">
                        My Projects
                    </h2>

                    {/* <div className="mt-10 flex items-center flex-col md:flex-row">
                        <p className="mb-4 md:mb-0 md:mr-4">Filter by: </p>
                        <FilterList />
                    </div> */}
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {projects.map((proj: ProjectsType) => (
                            <WorkCardSmall key={proj.id} work={proj} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data: { projects: ProjectsType[] | null } = await client.request(
        GET_ALL_WORK
    );

    return {
        props: {
            projects: data.projects,
        },
    };
};

export default Projects;
