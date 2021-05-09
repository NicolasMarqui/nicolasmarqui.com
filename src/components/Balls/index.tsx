import { FaNodeJs, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { GrGraphQl } from "react-icons/gr";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Balls: React.FC = ({}) => {
    const constraintsRef = useRef(null);

    return (
        <motion.div
            className="hidden md:block absolute inset-0 z-20 overflow-hidden"
            ref={constraintsRef}
        >
            <motion.div
                drag={true}
                whileHover={{ scale: 1.2 }}
                dragPropagation
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                className="w-28 h-28 bg-react rounded-full flex items-center justify-center absolute top-56 right-56"
            >
                <FaReact size={50} />
            </motion.div>
            <motion.div
                drag={true}
                whileHover={{ scale: 1.2 }}
                dragPropagation
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                className="w-28 h-28 bg-nodeJS rounded-full flex items-center justify-center absolute top-80 right-72"
            >
                <FaNodeJs size={50} />
            </motion.div>
            <motion.div
                drag={true}
                whileHover={{ scale: 1.2 }}
                dragPropagation
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                className="w-28 h-28 bg-graphql rounded-full flex items-center justify-center absolute top-80 right-40"
            >
                <GrGraphQl size={50} />
            </motion.div>
            <motion.div
                drag={true}
                whileHover={{ scale: 1.2 }}
                dragPropagation
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center absolute bottom-56 right-56"
            >
                <SiTypescript size={50} />
            </motion.div>
            <motion.div
                drag={true}
                whileHover={{ scale: 1.2 }}
                dragPropagation
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                className="w-28 h-28 bg-black rounded-full flex items-center justify-center absolute bottom-56 right-28"
            >
                <SiTailwindcss size={50} />
            </motion.div>
        </motion.div>
    );
};
export default Balls;
