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
        <div
            className="flex justify-center items-center relative h-screen"
            id="home"
        >
            <Lines />
            <Container classes="flex flex-col justify-center relative">
                <Socials />
                <motion.h3
                    variants={heroVariants}
                    initial="hidden"
                    animate="scrollDown"
                    className="text-2xl md:text-3xl z-30"
                >
                    Nicolas Marqui
                </motion.h3>
                <motion.h2
                    variants={heroVariants}
                    initial="hidden"
                    animate="scrollDown"
                    transition={{ delay: 1 }}
                    className="text-5xl md:text-8xl 2xl:text-9xl  md:-mt-2 z-30"
                >
                    Front-end
                </motion.h2>
                <motion.h2
                    variants={heroVariants}
                    initial="hidden"
                    animate="scrollDown"
                    transition={{ delay: 4 }}
                    className="text-5xl md:text-8xl 2xl:text-9xl  md:-mt-1 md:ml-20 z-30"
                >
                    React Developer
                </motion.h2>
            </Container>
        </div>
    );
};
export default Hero;
