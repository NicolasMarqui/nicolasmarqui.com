import Nav from "@components/Nav";
import Hero from "@components/Hero";
import About from "@components/About";
import Work from "@components/Work";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import InitialAnimation from "@components/initialAnimation";
import ScrollToTop from "@components/ScrollTop";

const Home: React.FC = () => {
    return (
        <div className="relative overflow-x-hidden bg-lightPrimary dark:bg-darkPrimary">
            <ScrollToTop />
            <InitialAnimation />
            <Nav />
            <Hero />
            <Work />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
