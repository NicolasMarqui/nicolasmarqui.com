import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { menuVariants } from "@utils/variants";
import { useRouter } from "next/router";
import { useLazyEffect } from "@utils/useLazyEffect";
import useSmoothScroll from "react-smooth-scroll-hook";
import Link from "next/link";

interface FullMenuProps {
  handleClose: () => any;
}

const FullMenu: React.FC<FullMenuProps> = ({ handleClose }) => {
  const router = useRouter();
  const [currOpen, setCurrOpen] = useState(true);
  const [heightDone, setHeightDone] = useState(false);

  const ref = useRef(process.browser ? document.documentElement : undefined);
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 50,
    direction: "y",
  });

  const removeOverflow = () =>
    document.querySelector("body").classList.remove("overflow-hidden");

  const handleClick = (element: string) => {
    if (router.pathname !== "/") {
      router.push(`/${element}`);
    } else {
      scrollTo(`${element}`);
    }
    handleClose();
  };

  useEffect(() => {
    document.querySelector("body").classList.add("overflow-hidden");

    return () => {
      removeOverflow();
    };
  });

  useLazyEffect(() => {
    removeOverflow();
    handleClose();
  }, [router.pathname]);

  return (
    <>
      <motion.div
        className="bg-primaryRed z-40 fixed top-0 bottom-0 fullMenu"
        variants={menuVariants}
        initial={{ right: -500 }}
        animate={currOpen ? "openNoDelay" : "closeDelay"}
      ></motion.div>

      <motion.div
        className="fixed z-50 top-0 bottom-0 bg-bg "
        variants={menuVariants}
        initial={{ right: -500 }}
        animate={currOpen ? "open" : "close"}
        onAnimationComplete={!currOpen ? handleClose : null}
      >
        <motion.div
          className="absolute top-10 right-5 md:right-10 cursor-pointer hover:bg-red-200 rounded-full p-2 z-30 bg-black"
          variants={menuVariants}
          initial={{ right: "-100px" }}
          animate={currOpen ? "showMenu" : "closeMenu"}
          onClick={() => setCurrOpen(false)}
        >
          <FaTimes size={40} color="#fff" />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row h-full"
          animate={!currOpen ? "parent" : "closePanels"}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            initial={{ height: 0 }}
            variants={menuVariants}
            animate={currOpen ? "panel1" : "closePanels"}
            onAnimationComplete={() => setHeightDone(true)}
            className="flex-2 flex justify-center items-center bg-white dark:bg-reallyBlack overflow-y-auto"
          >
            <ul className="flex flex-col">
              <motion.li
                className="my-5 relative"
                variants={menuVariants}
                animate="showLinks"
                initial={{ y: -900 }}
                whileHover={{ scale: 1.17 }}
              >
                <div className="menu__number">
                  <p className="text-lg text-black dark:text-white">(1)</p>
                </div>
                <Link href="/">
                  <a className="text-3xl md:text-8xl text-black dark:text-white font-bold custom__hover">
                    Home
                  </a>
                </Link>
              </motion.li>

              <motion.li
                className="my-5 relative"
                variants={menuVariants}
                animate="showLinks"
                initial={{ y: -900 }}
                whileHover={{ scale: 1.17 }}
                onClick={() => handleClick("#projects")}
              >
                <div className="menu__number">
                  <p className="text-lg text-black dark:text-white">(2)</p>
                </div>
                <a className="text-3xl md:text-8xl text-black dark:text-white font-bold custom__hover">
                  Projects
                </a>
              </motion.li>

              <motion.li
                className="my-5 relative"
                variants={menuVariants}
                animate="showLinks"
                initial={{ y: -900 }}
                whileHover={{ scale: 1.17 }}
                onClick={() => handleClick("#about")}
              >
                <div className="menu__number">
                  <p className="text-lg text-black dark:text-white">(3)</p>
                </div>
                <a className="text-3xl md:text-8xl text-black dark:text-white font-bold custom__hover">
                  About
                </a>
              </motion.li>

              <motion.li
                className="my-5 relative"
                variants={menuVariants}
                animate="showLinks"
                initial={{ y: -900 }}
                whileHover={{ scale: 1.17 }}
                onClick={() => handleClick("#contact")}
              >
                <div className="menu__number">
                  <p className="text-lg text-black dark:text-white">(4)</p>
                </div>
                <a className="text-3xl md:text-8xl text-black dark:text-white font-bold custom__hover">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default FullMenu;
