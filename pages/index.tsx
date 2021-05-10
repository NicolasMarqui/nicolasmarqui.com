import Meta from "@components/Meta";
import Nav from "@components/Nav";

import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";
import Socials from "@components/Socials";

const Home: React.FC = () => {
    return (
        <div className="relative">
            <Meta
                title="Front-end Developer"
                description="Hello my name is Nicolas Marqui and i’m a I’m a creative front-end developer who loves React, NextJS, React Native and NodeJS, but
                who also loves to learn new technologies ⚡"
                keywords="coding, full-stack, front-end, back-end, react, developer, portfolio, nextjs, node, react-native"
            />

            <Socials />

            <Nav />
            <Hero />
            <About />
            <Work />
        </div>
    );
};

export default Home;
