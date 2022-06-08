import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const SkillSocials = () => {
  return (
    <div className="mt-12 flex items-center">
      <Link href="https://www.linkedin.com/in/nicolas-marqui/">
        <a target="_blank" rel="noopener">
          <FaLinkedin
            size={30}
            color="#0e76a8"
            className="transform cursor-pointer hover:scale-110"
          />
        </a>
      </Link>

      <Link href="https://www.instagram.com/nick_marqui/">
        <a target="_blank" rel="noopener">
          <FaInstagram
            size={30}
            color="#E1306C"
            className="transform cursor-pointer hover:scale-110 ml-2"
          />
        </a>
      </Link>

      <Link href="https://www.upwork.com/freelancers/~01de27feb27785f69d">
        <a target="_blank" rel="noopener">
          <SiUpwork
            size={30}
            color="#6fda44"
            className="transform cursor-pointer hover:scale-110 ml-2"
          />
        </a>
      </Link>
    </div>
  );
};

export default SkillSocials;
