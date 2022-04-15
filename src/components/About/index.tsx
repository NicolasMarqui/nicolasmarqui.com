import { ScrollContext } from "@utils/scroll-observer";
import { useContext, useRef } from "react";
import s from "@styles/about.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { skills } from "@utils/data";
import { WorkLink } from "@components/Tile";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const About: React.FC = ({}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      className="bg-white dark:bg-black text-reallyBlack dark:text-white overflow-x-hidden"
      id="about"
      ref={refContainer}
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-20 text-4xl sm:text-5xl  font-semibold tracking-tight md:py-24 md:text-6xl lg:px-20 lg:py-36 lg:text-7xl">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            I&apos;m a{" "}
            <WorkLink href="https://www.upwork.com/freelancers/~01de27feb27785f69d">
              freelancer
            </WorkLink>{" "}
            front-end developer from Italy 🇮🇹
          </div>
          <span
            className={`${s.skillText} inline-block after:content-["_"]`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Who has a passion for web and mobile development.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I have over 3 years of experience working with front-end
            technologies.
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
