import Container from "@components/Container";
import Link from "next/link";

const FourOFour = () => {
    return (
        <div className="py-44 bg-lightSecondary dark:bg-black">
            <Container>
                <h2 className="text-reallyBlack dark:text-white text-5xl md:text-8xl 2xl:text-9xl ">
                    404
                </h2>
                <h3 className="text-reallyBlack dark:text-white text-3xl md:text-6xl 2xl:text-7xl ">
                    Nothing found...
                </h3>

                <Link href="/">
                    <a className="mt-4 block ">Go back home</a>
                </Link>
            </Container>
        </div>
    );
};
export default FourOFour;
