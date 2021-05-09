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
                description="Hello my name is Nicolas Marqui and i’m a full-stack developer focused on frontend who also loves to have a little back-end adventure"
                keywords="coding, full-stack, front-end, back-end, react, developer, portfolio"
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
