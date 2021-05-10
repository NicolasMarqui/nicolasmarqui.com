import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";

const Socials: React.FC = ({}) => {
    return (
        <div className="hidden md:block fixed socials right-5 z-50">
            <ul>
                <li className="mt-4">
                    <a
                        href="https://github.com/NicolasMarqui"
                        target="_blank"
                        rel="noopener"
                        className="cursor-pointer block px-3"
                    >
                        <AiFillGithub size={30} />
                    </a>
                </li>

                <li className="mt-4">
                    <a
                        href="https://www.linkedin.com/in/nicolas-marqui/"
                        target="_blank"
                        rel="noopener"
                        className="cursor-pointer block px-3"
                    >
                        <AiFillLinkedin size={30} />
                    </a>
                </li>

                <li className="mt-4">
                    <a
                        href="https://github.com/NicolasMarqui"
                        target="_blank"
                        rel="noopener"
                        className="cursor-pointer block px-3"
                    >
                        <IoIosLink size={30} color="#fff" />
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default Socials;
