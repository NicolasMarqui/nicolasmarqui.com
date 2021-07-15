import Container from "@components/Container";
import Lines from "@components/Lines";
import Socials from "@components/Socials";
import { heroVariants } from "@utils/variants";
import { motion } from "framer-motion";
import { useRef } from "react";
import useSmoothScroll from "react-smooth-scroll-hook";

const Hero: React.FC = ({}) => {
    const ref = useRef(process.browser ? document.documentElement : undefined);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 50,
        direction: "y",
    });

    return (
        <div className="flex justify-center items-center relative h-screen">
            <Lines />
            <Container classes="flex flex-col justify-center relative items-center md:items-start">
                <Socials />
                <motion.h3
                    variants={heroVariants}
                    initial="hidden"
                    animate="scrollDown"
                    className="text-2xl sm:text-3xl z-30"
                >
                    Nicolas Marqui
                </motion.h3>
                <motion.h2
                    variants={heroVariants}
                    initial="hidden"
                    animate="scrollDown"
                    className="text-5xl sm:text-8xl 2xl:text-9xl md:-mt-2 z-30"
                >
                    Front-end
                </motion.h2>
                <motion.h2
                    variants={heroVariants}
                    initial="hidden"
                    animate="scrollDown"
                    className="text-5xl md:text-8xl 2xl:text-9xl md:-mt-1 md:ml-20 z-30 text-center md:text-left"
                >
                    <span className="hidden sm:inline-block">React</span>{" "}
                    Developer
                </motion.h2>
            </Container>

            <div
                className="absolute bottom-20 cursor-pointer hover:underline"
                onClick={() => scrollTo("#projects")}
            >
                <p className="font-light text-xl text-reallyBlack dark:text-white">
                    See my work
                </p>
            </div>
        </div>
    );
};
export default Hero;
