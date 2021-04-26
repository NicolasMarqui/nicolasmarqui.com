import { TechProps, WorkProps } from "@utils/types";
import { motion } from "framer-motion";
import Tooltip from "react-tooltip";

interface WorkCardProps {
    work: WorkProps;
    isOtherSide?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, isOtherSide = false }) => {
    const { type, title, description, cover, repo, live, tech } = work;

    return (
        <div className="w-full bg-black rounded-lg flex flex-col md:flex-row my-7 mx-auto md:w-9/12 lg:w-8/12">
            <div
                className={`flex-1 order-2 border-primaryRed ${
                    isOtherSide
                        ? "md:order-2 md:border-l-8 p-6 md:py-6 md:pl-6 md:pr-0"
                        : "md:order-1 md:border-r-8 p-6 md:py-6 md:pr-0 md:pl-6"
                }`}
            >
                <h4 className="font-bold text-primaryRed text-sm">{type}</h4>
                <h3 className="text-white font-bold text-3xl sm:text-4xl">
                    {title}
                </h3>

                <p className="font-light mt-4">{description}</p>

                <h5 className="mt-7 font-bold text-xs">Technologies</h5>

                <div className="flex flex-wrap">
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
                    <div className="bg-react mr-2">
                        <motion.a
                            whileHover={{ scale: 1.14 }}
                            whileTap={{ scale: 0.9 }}
                            href={live}
                            target="_blank"
                            className="block font-bold py-3 px-5 w-full h-full"
                        >
                            Live site
                        </motion.a>
                    </div>

                    <div className="bg-nextJS">
                        <motion.a
                            whileHover={{ scale: 1.14 }}
                            whileTap={{ scale: 0.9 }}
                            href={repo}
                            target="_blank"
                            className="block font-bold py-3 px-5 w-full h-full"
                        >
                            Code
                        </motion.a>
                    </div>
                </div>
            </div>
            <div
                className={`flex-1 order-1  ${
                    isOtherSide ? "md:order-1" : "md:order-2"
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
