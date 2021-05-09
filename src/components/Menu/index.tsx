import { useState } from "react";
import Hamburger from "hamburger-react";
import FullMenu from "@components/FullMenu";
import { motion } from "framer-motion";

interface MenuProps {
    isFixed: boolean;
}

const Menu: React.FC<MenuProps> = ({ isFixed }) => {
    const [isOpenMobile, setIsOpenMobile] = useState(false);

    return (
        <>
            <nav className="w-full">
                <ul className="list-none m-0 p-0 flex-row items-center text-right hidden sm:flex nav__menu">
                    <motion.li
                        className="mx-3 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <p
                            className={`${
                                isFixed
                                    ? "text-reallyBlack font-bold"
                                    : "text-white"
                            }`}
                        >
                            Home
                        </p>
                    </motion.li>
                    <motion.li
                        className="mx-3 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <p
                            className={`${
                                isFixed
                                    ? "text-reallyBlack font-bold"
                                    : "text-white"
                            }`}
                        >
                            About
                        </p>
                    </motion.li>
                    <motion.li
                        className="mx-3 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <p
                            className={`${
                                isFixed
                                    ? "text-reallyBlack font-bold"
                                    : "text-white"
                            }`}
                        >
                            My work
                        </p>
                    </motion.li>
                    <motion.li
                        className="mx-3 cursor-pointer"
                        whileHover={{ scale: 1.16 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <p
                            className={`${
                                isFixed
                                    ? "text-reallyBlack font-bold"
                                    : "text-white"
                            }`}
                        >
                            Contact
                        </p>
                    </motion.li>
                </ul>

                <div className="flex-none sm:hidden">
                    <Hamburger
                        toggled={isOpenMobile}
                        color={`${isFixed ? "#222" : "#fff"}`}
                        toggle={() => setIsOpenMobile(!isOpenMobile)}
                    />
                </div>
            </nav>

            {isOpenMobile && <FullMenu />}
        </>
    );
};
export default Menu;
