import { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import FullMenu from "@components/FullMenu";
import { motion } from "framer-motion";
import useSmoothScroll from "react-smooth-scroll-hook";
import { useTheme } from "next-themes";

interface MenuProps {
    isFixed: boolean;
    isOpenMobile: boolean;
    handleMobile: (value: boolean) => any;
}

const Menu: React.FC<MenuProps> = ({ isFixed, isOpenMobile, handleMobile }) => {
    const { theme } = useTheme();
    const ref = useRef(process.browser ? document.documentElement : undefined);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 50,
        direction: "y",
    });

    return (
        <>
            <nav className="w-full">
                <ul className="list-none m-0 p-0 flex-row items-center text-right hidden sm:flex nav__menu">
                    <motion.li
                        className="mx-4 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => scrollTo("#projects")}
                    >
                        <p className="text-reallyBlack dark:text-white">
                            Projects
                        </p>
                    </motion.li>
                    <motion.li
                        className="mx-4 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => scrollTo("#about")}
                    >
                        <p className="text-reallyBlack dark:text-white">
                            About
                        </p>
                    </motion.li>
                    <motion.li
                        className="mx-4 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => scrollTo("#contact")}
                    >
                        <p className="text-reallyBlack dark:text-white">
                            Contact
                        </p>
                    </motion.li>
                </ul>

                <div className="flex-none sm:hidden">
                    <Hamburger
                        toggled={isOpenMobile}
                        color={`${theme === "light" ? "#222" : "#fff"}`}
                        toggle={handleMobile}
                    />
                </div>
            </nav>
        </>
    );
};
export default Menu;
