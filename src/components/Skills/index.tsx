import SkillList from "@components/SkillList";
import SkillSocials from "@components/SkillSocials";
import { backEndSkills, frontEndSkills } from "@utils/data";
import useWindowSize from "@utils/useWindowSize";
import Image from "next/image";

const Skills: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 992;

  return (
    <section
      className={`flex flex-col bg-lightPrimary dark:bg-reallyBlack py-20 md:py-28`}
    >
      <div className="flex items-center justify-center flex-col -mt-48">
        <Image
          src="/images/myself.jpeg"
          height={200}
          width={200}
          objectFit="cover"
          className="rounded-full"
        />
        <SkillSocials />
      </div>
      <div className="container px-11">
        <h3 className="text-3xl lg:text-4xl tracking-tight font-bold text-center !leading-[3.5rem] mt-10">
          More about me
        </h3>

        <div className="flex md:items-start flex-col md:flex-row gap-10">
          <div className="flex-grow order-2 md:order-1 md:mt-4">
            <div>
              <p className="text-lg mt-4 leading-8 ">
                I'm an Italian-Brazilian 🇮🇹🇧🇷 with a passion for traveling. In
                2022, I left Brazil and embraced the digital nomad lifestyle. I
                moved to Italy, obtained my citizenship, and continued traveling
                while creating beautiful applications for companies in New York,
                Brazil, and London.
              </p>

              <p className="text-lg mt-4 leading-8 ">
                So far, I’ve been to 35 countries and can’t wait to explore
                more. I enjoy making beautiful and reliable apps, and I hope to
                keep doing so for a long time.
              </p>
            </div>

            <h4 className="my-10 underline underline-offset-8 text-xl">
              👨🏽‍💻 Here are a few technologies I've been working with recently:
            </h4>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillList data={frontEndSkills} title="Front-end" />
              <SkillList data={backEndSkills} title="Back-end / Others" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
