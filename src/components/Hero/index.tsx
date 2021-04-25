import Container from "@components/Container";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

const Hero: React.FC = ({}) => {
    const SCROLL__ANIMATION = require("../../../public/animations/scroll.json");

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: SCROLL__ANIMATION,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="py-48 md:py-0 md:h-screen flex justify-center items-center relative">
            <Container>
                <h3 className="font-zilla text-3xl md:text-7xl">
                    Hello my name is
                </h3>
                <h2 className="text-5xl sm:text-6xl md:text-9xl font-zilla font-bold md:-mt-2">
                    Nicolas Marqui
                </h2>

                <p className="mt-4 text-xl md:text-2xl md:w-2/3">
                    I’m a full stack developer focused on frontend who also
                    loves to have a little backend adventure
                </p>

                <motion.div
                    className="mt-9 bg-primaryRed inline-block py-3 px-7 rounded-lg cursor-pointer hover:bg-primaryRedHover"
                    whileHover={{ scale: 1.1005 }}
                    whileTap={{ scale: 0.9 }}
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
