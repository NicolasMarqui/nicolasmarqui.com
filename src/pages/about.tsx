import Container from "@components/Container";
import { skills } from "@utils/data";
import Head from "next/head";

const About: React.FC = ({}) => {
    return (
        <div className="min-h-screen bg-lightSecondary dark:bg-reallyBlack">
            <Head>
                <title>Nicolas Marqui | about</title>
            </Head>

            <Container classes="pt-44 md:pt-52 pb-16 md:pb-28">
                <div className="mb-16 md:mb-44">
                    <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl">
                        Nicolas Marqui
                    </h2>

                    <div className="w-full lg:w-3/5">
                        <p className="md:text-3xl mt-8">
                            Front-end developer currently living in{" "}
                            <span className="underline">??????</span>. I am a
                            self taught developer who loves to code beautiful
                            interfaces and explore new technologies and
                            areas...I'm talking to you back-end and devOps
                            (☞ﾟヮﾟ)☞
                        </p>

                        <p className="my-8 md:text-xl">
                            Understanding the human experience is essential for
                            creating useful and effective products. I enjoy
                            using my skill set to empower people to accomplish
                            their goals. I create digital experiences that make
                            life easier.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row items-start">
                    <h3 className="text-4xl md:text-7xl flex-1">
                        Tools <span className="md:block md:ml-10">& Techs</span>
                    </h3>

                    <ul className="flex flex-wrap flex-1">
                        {skills.map((skill) => (
                            <li key={skill.id} className="w-2/4 md:w-1/3 mt-12">
                                <p className="text-xl">{skill.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};
export default About;
