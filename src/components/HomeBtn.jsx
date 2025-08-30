"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
const NavLink = motion(Link);
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-[var(--color-foreground)] rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50"
      aria-label={"home"}
      name={"home"}
      prefetch={false}
    >
      <span className="relative w-14 h-14 p-4 hover:text-[var(--color-accent)]">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-[var(--color-background)] text-[var(--color-foreground)] text-sm rounder-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;
