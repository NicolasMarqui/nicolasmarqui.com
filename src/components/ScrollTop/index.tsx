import { useRef } from "react";
import { useEffect, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";
import useSmoothScroll from "react-smooth-scroll-hook";

const ScrollToTop: React.FC = ({}) => {
    const ref = useRef(process.browser ? document.documentElement : undefined);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 100,
        direction: "y",
    });
    const [isVisible, setIsVisible] = useState(false);

    const showButtons = () => {
        if (window.pageYOffset > 120) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", showButtons);

        return () => {
            window.removeEventListener("scroll", showButtons);
        };
    }, []);

    const handleEnterCursorTop = () => {
        document.querySelector(".cursor").classList.add("cursor__toTop");
    };

    const handleLeaveCursorTop = () => {
        document.querySelector(".cursor").classList.remove("cursor__toTop");
    };

    return (
        <motion.div
            onMouseEnter={handleEnterCursorTop}
            onMouseLeave={handleLeaveCursorTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            initial={{ x: 200 }}
            animate={isVisible ? { x: 0 } : { x: 200 }}
            onClick={() => scrollTo("#home")}
            className={`${
                isVisible ? "flex" : "hidden"
            } float__buttons h-16 w-16 bg-gray-100 dark:bg-reallyBlack rounded-full flex items-center justify-center fixed bottom-10 right-7 z-50 cursor-pointer`}
        >
            <MdExpandLess size={40} color="#F94144" />
        </motion.div>
    );
};
export default ScrollToTop;
