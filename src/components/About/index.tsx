import Container from "@components/Container";

const About: React.FC = ({}) => {
    return (
        <div className="py-20 border-b-2 border-t-2 border-lightBlack">
            <Container>
                <pre>
                    <code className="font-zilla font-light text-4xl text-lightWhite">
                        &lt;section&gt;
                    </code>
                </pre>
                <h2 className="my-7 font-bold font-zilla text-4xl md:text-6xl md:w-5/6">
                    I’m a full-stack developer who loves
                    <span className="sm:mx-1 text-react"> React, </span>
                    <span className="sm:mx-1 text-nextJS">Next, </span>
                    <span className="sm:mx-1 text-graphql">Graphql, </span>
                    <span className="sm:mx-1 text-reactNative">
                        React Native,
                    </span>
                    <span className="sm:mx-1 text-nodeJS">NodeJS</span> and many
                    others!
                </h2>
                <pre>
                    <code className="font-zilla font-light text-4xl text-lightWhite">
                        &lt;/section&gt;
                    </code>
                </pre>
            </Container>
        </div>
    );
};
export default About;
