import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";
import InitialAnimation from "@components/initialAnimation";

const Home: React.FC = () => {
    return (
        <div>
            <InitialAnimation />
            <Hero />
            <About />
            <Work />
        </div>
    );
};

export default Home;
