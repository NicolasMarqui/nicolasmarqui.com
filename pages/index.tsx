import Hero from "@components/Hero";
import Meta from "@components/Meta";
import Nav from "@components/Nav";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="relative">
            <Meta
                title="Welcome"
                description="Hello my name is Nicolas Marqui and i’m a full-stack developer focused on frontend who also loves to have a little back-end adventure"
                keywords="coding, full-stack, front-end, back-end, react, developer, portfolio"
            />

            <Nav />
            <Hero />
        </div>
    );
};

export default Home;
