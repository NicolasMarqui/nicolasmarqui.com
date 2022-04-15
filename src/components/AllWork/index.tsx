import Link from "next/link";

const AllWork: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-lightPrimary dark:bg-black py-20 text-3xl md:text-4xl`}
    >
      <div className="container mx-auto px-11">
        <p className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight">
          <strong>There's actually more projects</strong> <br /> You can check
          them by clicking {""}
          <Link href="/projects">
            <a
              rel="norefer"
              className="underline underline-offset-8 decoration-1 "
            >
              here
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AllWork;
