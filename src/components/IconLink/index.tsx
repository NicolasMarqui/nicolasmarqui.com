import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface ILink {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const IconLink = ({ href, icon, title, ...props }: ILink) => {
  return (
    <Link href={href}>
      <a
        target="_blank"
        className="hover:scale-110 underline underline-offset-4 transform transition-all py-3 rounded-xl bg-transparent text-white inline-flex items-center gap-2"
        {...props}
      >
        {icon}
        <p className="text-xs md:text-sm font-bold text-black dark:text-white">
          {title}
        </p>
        <FiExternalLink className="text-black dark:text-white" size={15} />
      </a>
    </Link>
  );
};

export default IconLink;
