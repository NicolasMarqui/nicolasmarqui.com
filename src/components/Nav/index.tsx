import Container from "@components/Container";
import Menu from "@components/Menu";

const Nav: React.FC = ({}) => {
    return (
        <header className="absolute top-10 left-0 right-0 z-20">
            <Container>
                <div className="w-full flex items-center justify-between">
                    <div className="flex-none">
                        <h1 className="font-zilla text-4xl text-white font-bold hasDetail relative">
                            NM
                        </h1>
                    </div>
                    <div className="flex-none">
                        <Menu />
                    </div>
                </div>
            </Container>
        </header>
    );
};
export default Nav;
