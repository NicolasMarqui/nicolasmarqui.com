import Container from "@components/Container";

const Contact: React.FC = () => {
    const handleEnterEmail = () => {
        document.querySelector(".cursor").classList.add("cursor__email");
    };
    const handleLeaveEmail = () => {
        document.querySelector(".cursor").classList.remove("cursor__email");
    };

    return (
        <div
            onMouseEnter={handleEnterEmail}
            onMouseLeave={handleLeaveEmail}
            className="relative bg-lightPrimary dark:bg-darkPrimary"
            id="contact"
        >
            <a
                href="mailto:nicolas.marqui@fatec.sp.gov.br"
                className="block w-full h-full"
            >
                <Container classes="py-20">
                    <pre>
                        <code className=" font-light md:text-2xl text-black dark:text-lightWhite">
                            &lt;section&gt;
                        </code>
                    </pre>
                    <h2 className="my-10 text-3xl md:text-6xl leading-none md:about_title">
                        Want to get in touch with me?
                        <span className="underline emailFooter text-xl md:text-3xl block mt-4">
                            nicolas.marqui@fatec.sp.gov.br
                        </span>
                    </h2>
                    <pre>
                        <code className=" font-light md:text-2xl text-black dark:text-lightWhite">
                            &lt;/section&gt;
                        </code>
                    </pre>
                </Container>
            </a>
        </div>
    );
};
export default Contact;
