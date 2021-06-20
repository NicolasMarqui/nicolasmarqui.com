import { TechProps, WorkProps } from "@utils/types";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

interface WorkCardProps {
    work: WorkProps;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    const { type, title, description, cover, repo, live, tech, video } = work;

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const handleEnterCaseStudy = () => {
        document.querySelector(".cursor").classList.add("cursor__CaseStudy");
    };
    const handleLeaveCaseStudy = () => {
        document.querySelector(".cursor").classList.remove("cursor__CaseStudy");
    };

    const handleEnterButton = () => {
        document.querySelector(".cursor").classList.add("cursor__cardButton");
    };
    const handleLeaveButton = () => {
        document
            .querySelector(".cursor")
            .classList.remove("cursor__cardButton");
    };

    return (
        <div
            className="w-full  rounded-lg flex flex-col lg:flex-row my-16 shadow dark:shadow-md overflow-hidden lg:items-center"
            ref={ref}
        >
            <motion.div
                className="flex-1 flex flex-col align-center h-full p-4 order-2 lg:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.5 }}
            >
                <p className="font-light mt-4 lg:text-2xl">{type}</p>
                <h3 className="text-6xl md:text-7xl 2xl:text-9xl font-bold text-reallyBlack dark:text-white">
                    {title}
                </h3>

                <p className="font-light my-9 md:text-2xl 2xl:text-4xl">
                    {description}
                </p>

                <div className="flex  flex-wrap">
                    {tech.map((tec: TechProps) => (
                        <div
                            className="py-2 px-4 bg-nextJS m-1 rounded-2xl"
                            key={tec.id}
                        >
                            <p className="text-white text-sm">{tec.name}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-self-end">
                    {live && (
                        <div
                            className="bg-react mr-2"
                            onMouseEnter={handleEnterButton}
                            onMouseLeave={handleLeaveButton}
                        >
                            <motion.a
                                whileHover={{ scale: 1.14 }}
                                whileTap={{ scale: 0.9 }}
                                href={live}
                                target="_blank"
                                rel="noopener"
                                className="font-bold py-3 px-5 w-full h-full text-white flex items-center"
                            >
                                <FiExternalLink size={17} className="mr-2" />
                                Live site
                            </motion.a>
                        </div>
                    )}

                    <div className="bg-darkLines">
                        <motion.a
                            whileHover={{ scale: 1.14 }}
                            whileTap={{ scale: 0.9 }}
                            href={repo}
                            target="_blank"
                            rel="noopener"
                            className="font-bold py-3 px-5 w-full h-full text-white flex items-center"
                        >
                            <AiFillGithub size={17} className="mr-2" />
                            Code
                        </motion.a>
                    </div>

                    {/* {video && (
                        <div className="bg-primaryRed ml-2">
                            <motion.a
                                whileHover={{ scale: 1.14 }}
                                whileTap={{ scale: 0.9 }}
                                href={video}
                                target="_blank"
                                rel="noopener"
                                className="font-bold py-3 px-5 w-full h-full text-white flex items-center"
                            >
                                <AiFillYoutube size={17} className="mr-2" />
                                View Video
                            </motion.a>
                        </div>
                    )} */}
                </div>
            </motion.div>
            <motion.div
                className="flex-2 order-1 lg:order-2 cursor-pointer"
                onMouseEnter={handleEnterCaseStudy}
                onMouseLeave={handleLeaveCaseStudy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
            >
                <motion.img
                    initial={{ y: -100 }}
                    animate={inView ? { y: 0 } : { y: -100 }}
                    transition={{ duration: 0.8 }}
                    src={cover}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    );
};
export default WorkCard;
