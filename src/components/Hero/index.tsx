import { TCanvas } from "@components/Canvas";
import Lines from "@components/Lines";
import { useRef } from "react";
import useSmoothScroll from "react-smooth-scroll-hook";
import Image from "next/image";

const Hero: React.FC = ({}) => {
  const ref = useRef(process.browser ? document.documentElement : undefined);
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
      <div className="absolute z-20">
        <h2 className="text-6xl md:text-8xl font-bold text-white text-center">
          Nicolas Marqui
        </h2>
        <h3 className="text-center text-2xl mt-2 text-white">
          Front-end Developer
        </h3>
      </div>

      <div className="absolute right-10 bottom-10 rotate-90 transform flex items-center scrollAnimation">
        <Image src="/icons/scroll-down.svg" height={120} width={120} />
      </div>

      <div
        className="absolute bottom-10 z-30 cursor-pointer"
        onClick={() => scrollTo("#projects")}
      >
        <p className="text-sm font-bold hover:underline text-white">
          {" "}
          See my projects
        </p>
      </div>
    </div>
  );
};
export default Hero;
