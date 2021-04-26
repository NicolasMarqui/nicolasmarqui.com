import Meta from "@components/Meta";
import Nav from "@components/Nav";

import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";

const Home: React.FC = () => {
    return (
        <div className="relative">
            <Meta
                title="Web developer"
                description="Hello my name is Nicolas Marqui and i’m a full-stack developer focused on frontend who also loves to have a little back-end adventure"
                keywords="coding, full-stack, front-end, back-end, react, developer, portfolio"
            />

            <Nav />
            <Hero />
            <About />
            <Work />
        </div>
    );
};

export default Home;
