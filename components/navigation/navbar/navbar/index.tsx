import Image from "next/image";
import Link from "next/link";

import Theme from "./Theme";

const NavBar = () => {
  return (
    <nav className=" flex-between background-light900_dark200 fixed z-50  w-full p-6 shadow-light-200 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/site-logo.svg"
          alt="DevOverflow logo"
          width={32}
          height={32}
        />
        <p className=" h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <p>Search bar</p>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default NavBar;
