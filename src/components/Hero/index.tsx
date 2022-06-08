import { TCanvas } from "@components/Canvas";
import Lines from "@components/Lines";
import { useRef } from "react";
import useSmoothScroll from "react-smooth-scroll-hook";
import Image from "next/image";
import { BsCodeSlash, BsDownload } from "react-icons/bs";

const Hero: React.FC = ({}) => {
  const ref = useRef(
    typeof window !== "undefined" ? document.documentElement : undefined
  );
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 50,
    direction: "y",
  });

  return (
    <div className="flex justify-center overflow-x-hidden items-center relative h-screen bg-darkPrimary">
      <div className="absolute inset-0 bg-heroDetail z-30 opacity-20 bg-no-repeat bg-center bg-cover"></div>
      <TCanvas />
      <Lines />
      <div className="absolute left-0 right-0 z-[30]">
        <div className="container flex flex-col items-center justify-center">
          <p className="text-white text-center">Welcome, I'm</p>
          <h2 className="text-6xl mt-5 text-center md:text-8xl font-bold text-white">
            Nicolas Marqui.
          </h2>
          <h2 className="text-3xl md:text-6xl font-extrabold text-center text-white mt-4 md:mt-1">
            I build web and mobile apps.
          </h2>

          <div className="flex items-center flex-col md:flex-row gap-3 md:gap-6 mt-10">
            <button
              className="hover:scale-110 transform transition-all py-3 px-4 rounded-xl hover:bg-red-400 bg-red-500 text-xs md:text-sm font-bold inline-flex items-center gap-2 md:gap-5 text-white"
              onClick={() => scrollTo("#projects")}
            >
              <BsCodeSlash />
              See my projects
            </button>

            <p className="text-white">or</p>

            <a
              href="/assets/docs/cv.pdf"
              target="_blank"
              className="hover:scale-110 underline underline-offset-4 transform transition-all py-3 rounded-xl bg-transparent text-white inline-flex items-center gap-2 "
            >
              <BsDownload />
              <p className="text-xs md:text-sm font-bold">Download my CV</p>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 rotate-90 transform flex items-center scrollAnimation">
        <Image src="/icons/scroll-down.svg" height={120} width={120} />
      </div>
    </div>
  );
};
export default Hero;
