import { TechProps, WorkProps } from "@utils/types";
import { motion } from "framer-motion";
import Tooltip from "react-tooltip";

interface WorkCardProps {
    work: WorkProps;
    isOtherSide?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, isOtherSide = false }) => {
    const { type, title, description, cover, repo, live, tech, video } = work;

    const handleEnterLive = () => {
        // document.querySelector(".cursor").classList.add("cursor__live");
    };
    const handleLeaveLive = () => {
        // document.querySelector(".cursor").classList.remove("cursor__live");
    };

    // md:w-9/12 lg:w-8/12

    return (
        <div className="w-full bg-black rounded-lg flex flex-col lg:flex-row my-16 mx-auto">
            <div
                className={`flex-1 flex flex-col align-center justify-between order-2 border-primaryRed ${
                    isOtherSide
                        ? "lg:order-2 lg:border-l-8 p-6 lg:py-6 lg:pl-6 lg:pr-0"
                        : "lg:order-1 lg:border-r-8 p-8 lg:py-8 lg:pr-0 lg:pl-8"
                }`}
            >
                <h4 className="font-bold text-primaryRed text-sm">{type}</h4>
                <h3 className="text-white font-bold text-3xl sm:text-4xl">
                    {title}
                </h3>

                <h5 className="mt-7 font-bold text-xs">Description</h5>

                <p className="font-light mt-4">{description}</p>

                <h5 className="mt-7 font-bold text-xs">Technologies</h5>

                <div className="flex  flex-wrap">
                    {tech.map((tec: TechProps, idx: number) => (
                        <div
                            className="p-2"
                            key={tec.id}
                            data-for={`tec#${idx}`}
                            data-tip={tec.name}
                        >
                            {tec.icon}
                            <Tooltip
                                effect="solid"
                                place="top"
                                id={`tec#${idx}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex items-center">
                    {live && (
                        <div className="bg-react mr-2">
                            <motion.a
                                whileHover={{ scale: 1.14 }}
                                whileTap={{ scale: 0.9 }}
                                href={live}
                                target="_blank"
                                rel="noopener"
                                className="block font-bold py-3 px-5 w-full h-full"
                            >
                                Live site
                            </motion.a>
                        </div>
                    )}

                    <div className="bg-nextJS">
                        <motion.a
                            whileHover={{ scale: 1.14 }}
                            whileTap={{ scale: 0.9 }}
                            href={repo}
                            target="_blank"
                            rel="noopener"
                            className="block font-bold py-3 px-5 w-full h-full"
                        >
                            Code
                        </motion.a>
                    </div>

                    {video && (
                        <div className="bg-primaryRed ml-2">
                            <motion.a
                                whileHover={{ scale: 1.14 }}
                                whileTap={{ scale: 0.9 }}
                                href={video}
                                target="_blank"
                                rel="noopener"
                                className="block font-bold py-3 px-5 w-full h-full"
                            >
                                View Video
                            </motion.a>
                        </div>
                    )}
                </div>
            </div>
            <div
                className={`flex-2 order-1  ${
                    isOtherSide ? "lg:order-1" : "lg:order-2"
                }`}
            >
                <img
                    src={cover}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};
export default WorkCard;
