import Container from "@components/Container";
import Menu from "@components/Menu";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { headerVariant } from "@utils/variants";
import FullMenu from "@components/FullMenu";
import Toggle from "@components/Toggle";
import Link from "next/link";

const Nav: React.FC = ({}) => {
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const fixedNav = () => {
        if (window.pageYOffset > 300) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    const handleEnterLogo = () => {
        document.querySelector(".cursor").classList.add("cursor__logo");
    };
    const handleLeaveLogo = () => {
        document.querySelector(".cursor").classList.remove("cursor__logo");
    };

    useEffect(() => {
        window.addEventListener("scroll", fixedNav);

        return () => {
            window.removeEventListener("scroll", fixedNav);
        };
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: isFixed ? -100 : -100 }}
                variants={headerVariant}
                animate={isFixed ? "furtherDown" : "down"}
                className={`${
                    isFixed
                        ? "fixed bg-white dark:bg-darkPrimary top-0 shadow-md"
                        : "absolute top-0  py-7"
                } left-0 right-0 z-30`}
            >
                <Container>
                    <div className="w-full flex items-center justify-between">
                        <div
                            className="flex-none"
                            onMouseLeave={handleLeaveLogo}
                            onMouseEnter={handleEnterLogo}
                        >
                            <Link href="/">
                                <a>
                                    <motion.h1
                                        className={`text-2xl font-bold relative ${
                                            isFixed
                                                ? "text-black dark:text-white py-3"
                                                : "text-black dark:text-white"
                                        }`}
                                    >
                                        NM
                                    </motion.h1>
                                </a>
                            </Link>
                        </div>
                        <div className="flex-none flex items-center">
                            <Menu
                                isOpenMobile={isOpenMobile}
                                handleMobile={() =>
                                    setIsOpenMobile(!isOpenMobile)
                                }
                            />
                            <div className="ml-2 flex-none flex items-center justify-center">
                                <Toggle />
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.header>

            {isOpenMobile && (
                <FullMenu handleClose={() => setIsOpenMobile(false)} />
            )}
        </>
    );
};
export default Nav;
