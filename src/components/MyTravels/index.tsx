import Globe from "@components/Globe";
import Link from "next/link";

const MyTravels = () => {
  return (
    <section className="-mt-9 lg:-mt-20 my-8 py-8 flex flex-col items-center justify-center relative  rounded-lg w-[90%] mx-auto">
      <div className="relative flex h-full w-full items-center shadow-lg justify-center overflow-hidden rounded-lg bg-white dark:bg-black sm:px-32 lg:px-40 pb-32 sm:pb-40 pt-8 md:shadow-xl">
        <div className="absolute right-0 top-0 h-16 w-16">
          <div className="hidden md:block absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
            BETA
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black dark:from-white to-gray-500/80 bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent ">
            My Travels
          </span>
          <p className="text-slate-600 dark:text-white text-center">
            Personal map app designed to track and visualize all the places I've
            traveled to
          </p>

          <Link href="https://travels.nicolasmarqui.com/">
            <button className="z-[2] mt-6 hover:scale-110 transform transition-all py-3 px-4 rounded-xl hover:bg-red-400 bg-red-500 text-xs md:text-sm font-bold inline-flex items-center gap-2 md:gap-5 text-white">
              Check it out
            </button>
          </Link>
        </div>
        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </section>
  );
};

export default MyTravels;
