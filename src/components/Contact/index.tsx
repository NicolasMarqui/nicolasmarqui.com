import Container from "@components/Container";

const Contact: React.FC = ({}) => {
    return (
        <div
            className="relative bg-lightSecondary dark:bg-reallyBlack"
            id="contact"
        >
            <Container classes="py-20">
                <pre>
                    <code className=" font-light text-4xl text-lightWhite">
                        &lt;section&gt;
                    </code>
                </pre>
                <h2 className="my-7 font-bold  text-4xl md:text-6xl leading-none md:about_title">
                    Want to get in touch with me? Send me an email{" "}
                    <a
                        href="mailto:nicolas.marqui@fatec.sp.gov.br"
                        className="underline emailFooter"
                    >
                        nicolas.marqui@fatec.sp.gov.br
                    </a>
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
export default Contact;
