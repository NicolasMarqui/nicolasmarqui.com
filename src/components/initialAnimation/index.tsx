import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InitialAnimation: React.FC = () => {
    const parentRef = useRef(null);

    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden";
    }, []);

    const handleCloseInitialAnimation = () => {
        document.querySelector("body").style.overflowY = "scroll";
        parentRef.current.remove();
    };

    return (
        <motion.div
            ref={parentRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkPrimary"
        >
            {[...Array(9)].map((_, index) => (
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    onAnimationComplete={handleCloseInitialAnimation}
                    key={index}
                    className={
                        "intro-text text-4xl font-bold md:text-8xl 2xl:text-9xl text-white text-" +
                        (index + 1)
                    }
                >
                    Nicolas Marqui
                </motion.h3>
            ))}
        </motion.div>
    );
};
export default InitialAnimation;
