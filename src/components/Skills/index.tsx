import { skills } from "@utils/data";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-lightPrimary dark:bg-reallyBlack py-32 text-3xl md:text-4xl`}
    >
      <div className="container mx-auto px-11">
        <div className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight">
          <strong>Some of my skills are: </strong> <br />
          {skills.map((skill, idx) => (
            <p
              key={skill.id}
              className="inline-block text-2xl mx-1 tracking-wide"
            >
              {skill.name}
              {""}
              {idx !== skills.length - 1 ? "," : null}
            </p>
          ))}
          <div className="mt-20 flex items-center">
            <Link href="https://www.linkedin.com/in/nicolas-marqui/">
              <a target="_blank" rel="noopener">
                <FaLinkedin
                  color="#0e76a8"
                  className="transform cursor-pointer hover:scale-110"
                />
              </a>
            </Link>

            <Link href="https://www.instagram.com/nick_marqui/">
              <a target="_blank" rel="noopener">
                <FaInstagram
                  color="#E1306C"
                  className="transform cursor-pointer hover:scale-110 ml-2"
                />
              </a>
            </Link>

            <Link href="https://www.upwork.com/freelancers/~01de27feb27785f69d">
              <a target="_blank" rel="noopener">
                <SiUpwork
                  color="#6fda44"
                  className="transform cursor-pointer hover:scale-110 ml-2"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
