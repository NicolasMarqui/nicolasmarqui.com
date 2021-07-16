import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import useSmoothScroll from "react-smooth-scroll-hook";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuProps {
    isOpenMobile: boolean;
    handleMobile: (value: boolean) => any;
}

const Menu: React.FC<MenuProps> = ({ isOpenMobile, handleMobile }) => {
    const { theme } = useTheme();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);

    const ref = useRef(process.browser ? document.documentElement : undefined);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 50,
        direction: "y",
    });

    const handleNavScroll = (tag: string) => {
        if (router.pathname !== "/") {
            router.push(`/#${tag}`);
        } else {
            scrollTo(`#${tag}`);
        }
    };

    const handleHoverLinkOn = () => {
        const cursor = document.querySelector(".cursor");
        if (cursor) {
            cursor.classList.add("cursor__link");
        }
    };

    const handleHoverLinkOut = () => {
        const cursor = document.querySelector(".cursor");
        if (cursor) {
            cursor.classList.remove("cursor__link");
        }
    };

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <nav className="w-full">
                <ul className="list-none m-0 p-0 flex-row items-center text-right hidden sm:flex nav__menu">
                    <motion.li
                        className="mx-4 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/about">
                            <a className="text-reallyBlack dark:text-white block">
                                About
                            </a>
                        </Link>
                    </motion.li>
                    <motion.li
                        className="mx-4 cursor-pointer"
                        onMouseEnter={handleHoverLinkOn}
                        onMouseLeave={handleHoverLinkOut}
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/projects">
                            <a className="text-reallyBlack dark:text-white">
                                Projects
                            </a>
                        </Link>
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
