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
      <div className="container px-11">
        <h3 className="text-3xl lg:text-4xl tracking-tight font-bold text-center md:text-left !leading-[3.5rem]">
          More about me
        </h3>

        <div className="flex md:items-start flex-col md:flex-row gap-10">
          <div className="flex-grow order-2 md:order-1 md:mt-4">
            <div>
              <p className="text-lg mt-4 leading-8">
                I've spent the past year traveling around Europe while creating
                beautiful UI's for companies around the globe including London
                🇬🇧, New York 🇺🇸, and Brazil 🇧🇷. And during this trip, I fell in
                love with Lisbon 🇵🇹, where I currently live.
              </p>
              <p className="text-lg mt-4 leading-8">
                I enjoy creating beautiful and reliable applications for
                internet and phones. My goal is to always build scalable
                products and performant experiences.
              </p>
            </div>

            <h4 className="my-10 underline underline-offset-8 text-xl">
              👨🏽‍💻 Here are a few technologies I've been working with recently:
            </h4>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              <SkillList data={frontEndSkills} title="Front-end" />
              <SkillList data={backEndSkills} title="Back-end / Others" />
            </div>
          </div>

          <div className="md:sticky top-14 order-1 md:order-2 mt-8 md:mt-0 flex items-center justify-center flex-col">
            <Image
              src="/images/myself.jpeg"
              height={isMobile ? 300 : 600}
              width={isMobile ? 300 : 600}
              objectFit="cover"
              className="rounded-full"
            />
            <SkillSocials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
