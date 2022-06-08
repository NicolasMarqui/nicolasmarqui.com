import { GetStaticProps } from "next";
import { client, GET_SELECTED_WORK } from "src/lib/graphcms";
import { ProjectsType } from "@utils/types";

import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";
import Skills from "@components/Skills";
import AllWork from "@components/AllWork";

const Home = ({ projects }: { projects: ProjectsType[] | null }) => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work projects={projects} />
      <AllWork />
    </>
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
