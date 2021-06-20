import Container from "@components/Container";
import Lines from "@components/Lines";
import WorkCard from "@components/WorkCard";
import { projects } from "@utils/data";
import { WorkProps } from "@utils/types";

const Work: React.FC = ({}) => {
    return (
        <div
            className="py-20 bg-lightSecondary dark:bg-reallyBlack relative overflow-hidden"
            id="projects"
        >
            {/* <Lines /> */}
            <Container classes="relative z-20">
                <h2 className="text-6xl md:text-7xl  font-bold md:-mt-2 text-center">
                    Projects
                </h2>
            </Container>
            <div className="mt-10 flex flex-wrap items-center justify-around w-10/12 mx-auto z-20 relative">
                {projects.map((proj: WorkProps, idx: number) => (
                    <WorkCard
                        key={proj.id}
                        work={proj}
                        isOtherSide={idx % 2 === 0 ? false : true}
                    />
                ))}
            </div>
        </div>
    );
};
export default Work;
