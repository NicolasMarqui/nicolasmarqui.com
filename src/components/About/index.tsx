import Container from "@components/Container";
import { motion } from "framer-motion";
import Link from "next/link";

const About: React.FC = ({}) => {
    return (
        <div className="" id="about">
            <Container classes="pt-24 pb-12">
                <h2 className="my-7 text-center text-3xl md:text-6xl leading-none md:about_title">
                    I'm a creative front-end developer who has a passion for web
                    and mobile development.
                </h2>

                <motion.div
                    className="mt-4 mx-auto rounded-full bg-gray-600 w-32 h-32 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.09 }}
                >
                    <Link href="/about">
                        <a className="font-bold text-white flex items-center justify-center w-full h-full ">
                            About me
                        </a>
                    </Link>
                </motion.div>
            </Container>
        </div>
    );
};
export default About;
