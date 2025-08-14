import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "border border-[var(--color-accent-with-opacity)] bg-[var(--background-with-opacity)] border-solid backdrop-blur-[6px] shadow-[var(--shadow-glass-inset)] hover:shadow-[var(--shadow-glass-sm)] p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 w-full">
        <ItemLayout className={"col-span-full row-span-2 flex-col items-start"}>
          <h2 className="text-xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full text-[var(--color-accent)]"}>
          <p className="font-semibold w-full text-left text-2xl ">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mahmoud-stack-web&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-8 !p-0"}>
          <img
            className="w-full h-full"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=Mahmoud-stack-web&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Mahmoud-Stack-Web"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://go-skill-icons.vercel.app/api/icons?i=html,css,javascript,bootstrap,expressjs,git,github,java,jest,mongodb,mysql,nextjs,nodejs,npm,react,sass,tailwindcss,threejs,typescript,vscode,vercel,vite,php,postgresql,python,clerk,reactnative,figma&theme=dark&perline=14`}
            alt="Mahmoud-stack-web"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
