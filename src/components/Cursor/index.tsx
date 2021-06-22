import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor: React.FC = ({}) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <motion.div
            className="hidden md:flex cursor"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            <img
                src="/images/study.png"
                alt="Case study cursor"
                className="hidden case__children w-full h-full object-cover"
            />

            <h3 className="hidden toggle__children w-full text-center font-bold items-center justify-center dark:text-white text-reallyBlack">
                Change theme color
            </h3>

            <h3 className="hidden top__children w-full text-center font-bold items-center text-xl justify-center dark:text-white text-reallyBlack">
                To the top we go !!!
            </h3>

            <h3 className="hidden email__children w-full text-center font-bold items-center text-2xl justify-center text-white ">
                Send me <br /> an email
            </h3>
        </motion.div>
    );
};
export default Cursor;
