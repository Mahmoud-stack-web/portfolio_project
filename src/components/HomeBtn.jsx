import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
const HomeBtn = () => {
  return (
    <Link
      href={"/"}
      target={"_self"}
      className="group text-[var(--color-foreground)]  rounded-full flex items-center justify-center border border-[var(--color-accent-with-opacity)] border-solid backdrop-blur-[6px] shadow-[var(--shadow-glass-inset)] hover:shadow-[var(--shadow-glass-sm)] transition-shadow duration-300 ease-in-out bg-[var(--background-with-opacity)] fixed top-4 left-4 w-fit self-start"
      aria-label={"home"}
      name={"home"}
    >
      <span className="relative w-14 h-14 p-4 hover:text-[var(--color-accent)] peer">
        <Home className="w-full h-auto" strokeWidth={1.5}></Home>
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg:[var(--color-background)] text-[var(--color-foreground)] text-sm rounder-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
    </Link>
  );
};

export default HomeBtn;
