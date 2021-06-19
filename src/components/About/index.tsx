import Container from "@components/Container";

const About: React.FC = ({}) => {
    return (
        <div className="border-b-2 border-t-2 border-lightBlack" id="about">
            <Container classes="py-20  border-l-2 border-lightBlack">
                <pre>
                    <code className=" font-light text-4xl text-lightWhite">
                        &lt;section&gt;
                    </code>
                </pre>
                <h2 className="my-7 font-bold  text-4xl md:text-6xl leading-none md:about_title">
                    I have a passion for web and mobile development. I've been
                    coding for 2+ years and every day i'm trying to learn new
                    stuff!
                </h2>
                <pre>
                    <code className=" font-light text-4xl text-lightWhite">
                        &lt;/section&gt;
                    </code>
                </pre>
            </Container>
        </div>
    );
};
export default About;
