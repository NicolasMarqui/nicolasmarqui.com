import Container from "@components/Container";
import WorkCard from "@components/WorkCard";
import { projects } from "@utils/data";
import { WorkProps } from "@utils/types";

const Work: React.FC = ({}) => {
    return (
        <div className="py-20 border-b-2 border-lightBlack" id="work">
            <Container>
                <h2 className="text-6xl md:text-8xl  font-bold md:-mt-2 text-center">
                    My work
                </h2>

                <div className="mt-10">
                    {projects.map((proj: WorkProps, idx: number) => (
                        <WorkCard
                            key={proj.id}
                            work={proj}
                            isOtherSide={idx % 2 === 0 ? false : true}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};
export default Work;
