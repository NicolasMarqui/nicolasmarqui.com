import Container from "@components/Container";
import { projects } from "@utils/data";
import { useState } from "react";

const Work: React.FC = ({}) => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="py-20 border-b-2 border-lightBlack">
            <Container>
                <h2 className="text-5xl md:text-8xl font-zilla font-bold md:-mt-2">
                    My work
                </h2>

                <div className="mt-10 card">
                    {projects.map((proj) => (
                        <div
                            key={proj.id}
                            className={`card__item rounded-lg mb-4 md:mb-0 relative item__${proj.id} ${proj.grid}`}
                        >
                            <div className="absolute inset-0 z-10 bg-overlay"></div>
                            <div className="item__content h-full">
                                <img
                                    src={proj.cover}
                                    alt={proj.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />

                                <div className="absolute z-20 top-5 left-5">
                                    <h4 className="text-lg text-primaryRed font-bold">
                                        {proj.type}
                                    </h4>
                                    <h3 className="text-2xl md:text-4xl font-bold">
                                        {proj.title}
                                    </h3>

                                    <p>{proj.description.slice(0, 100)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};
export default Work;
