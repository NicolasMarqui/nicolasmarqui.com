import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "@components/Tile";
import { ProjectsType } from "@utils/types";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type WorkType = {
  projects: ProjectsType[] | null;
};

const Work = ({ projects }: WorkType) => {
  return (
    <>
      <div
        className="bg-white dark:bg-black flex flex-col justify-center items-center py-10 md:py-20"
        id="projects"
      >
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-center px-10 !leading-[3.5rem]">
            Selected projects
          </h3>
        </div>
      </div>
      <TileWrapper numOfPages={projects.length}>
        <TileBackground>
          <WorkBackground />
        </TileBackground>
        <TileContent>
          {projects.map((project, idx) => (
            <Tile
              key={project.id}
              page={idx}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div className="text-black dark:text-white">
                      I {project.typeOfWork}
                    </div>
                    <h3 className="flex items-center text-4xl md:text-5xl font-semibold tracking-tight text-black dark:text-white">
                      {project.liveSite ? (
                        <WorkLink href={project.liveSite}>
                          {project.title}
                        </WorkLink>
                      ) : project.repoLink ? (
                        <WorkLink href={project.repoLink}>
                          {project.title}
                        </WorkLink>
                      ) : (
                        project.title
                      )}

                      {project.liveSite || project.repoLink ? (
                        <FiExternalLink size={20} className="ml-2" />
                      ) : null}
                    </h3>

                    <div className="absolute bottom-8 lg:bottom-20 left-0 right-0 flex items-center justify-center">
                      {project.liveSite || project.repoLink ? (
                        <Link href={project.repoLink}>
                          <a target="_blank" rel="noopener">
                            <FaGithub className="text-black dark:text-white hover:scale-110 transform cursor-pointer" />
                          </a>
                        </Link>
                      ) : null}
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <img
                      src={project.cover?.url}
                      className="object-cover w-full h-full"
                    />
                  </WorkRight>
                </WorkContainer>
              )}
            ></Tile>
          ))}
        </TileContent>
      </TileWrapper>
    </>
  );
};

export default Work;
