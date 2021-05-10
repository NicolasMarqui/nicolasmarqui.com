import Container from "@components/Container";
import Menu from "@components/Menu";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { headerVariant } from "@utils/variants";
import FullMenu from "@components/FullMenu";

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
                        ? "fixed bg-white top-0 shadow-md"
                        : "absolute top-0 border-lightBlack border-b-2 py-7"
                } left-0 right-0 z-30`}
            >
                <Container>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex-none">
                            <motion.h1
                                className={`font-zilla text-4xl font-bold hasDetail relative ${
                                    isFixed ? "text-black py-3" : "text-white"
                                }`}
                            >
                                NM
                            </motion.h1>
                        </div>
                        <div className="flex-none">
                            <Menu
                                isFixed={isFixed}
                                isOpenMobile={isOpenMobile}
                                handleMobile={() =>
                                    setIsOpenMobile(!isOpenMobile)
                                }
                            />
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
