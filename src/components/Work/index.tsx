import Container from "@components/Container";
import WorkCard from "@components/WorkCard";
import { projects } from "@utils/data";
import { ProjectsType, WorkProps } from "@utils/types";

type WorkType = {
    projects: ProjectsType[] | null;
};

const Work = ({ projects }: WorkType) => {
    return (
        <div
            className="py-20 bg-lightSecondary dark:bg-reallyBlack relative overflow-hidden"
            id="projects"
        >
            <Container classes="relative z-20">
                <h2 className="text-6xl md:text-7xl  font-bold md:-mt-2 text-center">
                    Selected Projects
                </h2>
            </Container>
            <div className="mt-20 flex flex-wrap items-center justify-around w-10/12 mx-auto z-20 relative overflow-hidden">
                {projects.map((proj: ProjectsType) => (
                    <WorkCard key={proj.id} work={proj} />
                ))}
            </div>
        </div>
    );
};
export default Work;
