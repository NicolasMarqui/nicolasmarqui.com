import Container from "@components/Container";
import { motion } from "framer-motion";
import { useRef } from "react";
import Lottie from "react-lottie";
import useSmoothScroll from "react-smooth-scroll-hook";

const SCROLL__ANIMATION = require("../../../public/animations/scroll.json");

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SCROLL__ANIMATION,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Hero: React.FC = ({}) => {
    const ref = useRef(process.browser ? document.documentElement : undefined);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 50,
        direction: "y",
    });

    return (
        <div
            className="flex justify-center items-center relative z-20"
            id="home"
        >
            <Container classes="border-lightBlack border-l-2 h-full flex flex-col justify-center py-48 2xl:py-64">
                <h3 className="font-zilla text-3xl md:text-7xl">
                    Hello my name is
                </h3>
                <h2 className="text-5xl sm:text-6xl md:text-9xl font-zilla font-bold md:-mt-2">
                    Nicolas Marqui
                </h2>

                <p className="mt-4 text-xl md:text-2xl md:w-2/3">
                    I’m a creative front-end developer who loves{" "}
                    <span className="sm:mx-1 text-react"> React, </span>{" "}
                    <span className="sm:mx-1 text-nextJS">Next, </span>,
                    <span className="sm:mx-1 text-reactNative">
                        React Native,
                    </span>{" "}
                    and <span className="sm:mx-1 text-nodeJS">NodeJS</span>, but
                    who also loves to learn new technologies ⚡
                </p>

                <motion.div
                    className="mt-9 bg-primaryRed py-3 px-7 rounded-lg cursor-pointer hover:bg-primaryRedHover w-full md:w-56 flex items-center justify-center"
                    whileHover={{ scale: 1.1005 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollTo("#work")}
                >
                    <p className="font-bold">See my work</p>
                </motion.div>

                <div className="absolute bottom-4 -ml-6">
                    <Lottie
                        options={defaultOptions}
                        height={90}
                        width={90}
                        style={{ cursor: "initial" }}
                    />
                </div>
            </Container>
        </div>
    );
};
export default Hero;
