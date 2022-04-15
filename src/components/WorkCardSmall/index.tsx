import { ProjectsType } from "@utils/types";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { BsEyeSlashFill } from "react-icons/bs";

interface WorkCardSmallProps {
  work: ProjectsType;
}

const WorkCardSmall: React.FC<WorkCardSmallProps> = ({ work }) => {
  const {
    title,
    description,
    projectType,
    cover: { height, width, url },
    techs,
    liveSite,
    repoLink,
  } = work;

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  // const handleEnterCaseStudy = () => {
  //     document.querySelector(".cursor").classList.add("cursor__CaseStudy");
  // };
  // const handleLeaveCaseStudy = () => {
  //     document.querySelector(".cursor").classList.remove("cursor__CaseStudy");
  // };

  const handleEnterButton = () => {
    document.querySelector(".cursor").classList.add("cursor__cardButton");
  };
  const handleLeaveButton = () => {
    document.querySelector(".cursor").classList.remove("cursor__cardButton");
  };

  return (
    <motion.div
      className="w-full rounded-lg flex flex-col my-12 shadow dark:shadow-2xl overflow-hidden lg:items-center dark:bg-black"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1">
        <img src={url} alt={title} className="w-full h-96 object-cover" />
      </div>
      <div className="flex flex-col justify-start h-full w-full py-8 px-8">
        <div className="flex-1">
          <p className="font-light text-sm">{projectType}</p>
          <h3 className="text-3xl font-bold text-reallyBlack dark:text-white">
            {title}
          </h3>
          <p className="font-light mt-2 mb-8">{description}</p>
        </div>

        <div className="flex flex-wrap">
          {techs.map((tec: string, idx: number) => (
            <div className="py-1 px-4 bg-nextJS m-1 rounded-2xl" key={idx}>
              <p className="text-white text-xs">{tec}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 mt-10 flex items-center justify-self-end">
          {liveSite && (
            <div
              className="bg-react mr-2"
              onMouseEnter={handleEnterButton}
              onMouseLeave={handleLeaveButton}
            >
              <motion.a
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.9 }}
                href={liveSite}
                target="_blank"
                rel="noopener"
                className="font-bold py-3 px-5 w-full h-full text-white flex items-center"
              >
                <FiExternalLink size={17} className="mr-2" />
                Live site
              </motion.a>
            </div>
          )}

          {repoLink ? (
            <div className="bg-darkLines">
              <motion.a
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.9 }}
                href={repoLink}
                target="_blank"
                rel="noopener"
                className="font-bold py-3 px-5 w-full h-full text-white flex items-center"
              >
                <AiFillGithub size={17} className="mr-2" />
                Code
              </motion.a>
            </div>
          ) : (
            <div className="bg-darkLines">
              <motion.a
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.9 }}
                href={repoLink}
                target="_blank"
                rel="noopener"
                className="font-bold py-3 px-5 w-full h-full text-white flex items-center"
              >
                <BsEyeSlashFill size={17} className="mr-2" />
                Private code
              </motion.a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default WorkCardSmall;
