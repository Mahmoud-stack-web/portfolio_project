import Link from "next/link";
import React from "react";
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <Link
      href={demoLink}
      target={"_blank"}
      className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 border border-[var(--color-accent-with-opacity)] bg-[var(--background-with-opacity)] border-solid backdrop-blur-[6px] shadow-[var(--shadow-glass-inset)] hover:shadow-[var(--shadow-glass-sm)]"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-[var(--color-foreground)]">{name}</h2>
        <p className="text-[var(--color-muted)]">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-[var(--color-muted)]" />

      <p className="text-[var(--color-foreground)]">
        {new Date(date).toDateString()}
      </p>
    </Link>
  );
};

export default ProjectLayout;
