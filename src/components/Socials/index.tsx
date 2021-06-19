import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Socials: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className="absolute inset-0 z-10">
            <motion.a
                className={`circle absolute circle__1 flex justify-center items-center cursor-pointer ${
                    theme === "dark" ? "circle__dark" : "circle__light"
                }`}
                href="https://www.linkedin.com/in/nicolas-marqui/"
                target="_blank"
            >
                <span className="w-20 h-20 flex justify-center items-center circle__child bg-circleBlue rounded-full">
                    <AiFillLinkedin size={30} color="#4361EE" />
                </span>
            </motion.a>

            <motion.a
                className={`circle absolute circle__2 flex justify-center items-center cursor-pointer ${
                    theme === "dark" ? "circle__dark" : "circle__light"
                }`}
                href="mailto:nicolas.marqui@fatec.sp.gov.br"
                target="_blank"
            >
                <span className="w-20 h-20 flex justify-center items-center circle__child bg-circleRed rounded-full">
                    <SiGmail size={30} color="#F44437" />
                </span>
            </motion.a>

            <motion.a
                className={`circle absolute circle__3 flex justify-center items-center cursor-pointer ${
                    theme === "dark" ? "circle__dark" : "circle__light"
                }`}
                href="https://github.com/NicolasMarqui"
                target="_blank"
            >
                <span className="w-20 h-20 flex justify-center items-center circle__child bg-gray-200 rounded-full">
                    <AiFillGithub size={30} color="#222" />
                </span>
            </motion.a>
        </div>
    );
};
export default Socials;
