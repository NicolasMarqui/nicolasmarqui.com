import Meta from "@components/Meta";
import Nav from "@components/Nav";

import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";
import Socials from "@components/Socials";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

const Home: React.FC = () => {
    return (
        <div className="relative overflow-x-hidden">
            <Socials />

            <Nav />
            <Hero />
            <About />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
