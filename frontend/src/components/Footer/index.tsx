import React from "react";

export const Footer = () => {
  return (
    <footer className="h-20 border-t-2 border-brand-1 border-opacity-70 mt-4 flex justify-between items-center bg-grey-7  bottom-0 right-0 left-0 w-full">
      <section className=" w-3/6 h-4/5 px-2 flex flex-col justify-center items-center gap-3 text-heading8 text-brand-2 font-extralight rounded-full">
        <a
          rel="noopener nonreferrer"
          className="hover:font-semibold"
          target="blank"
          href="https://github.com/CToH10"
        >
          GitHub
        </a>
        <a
          className="hover:font-semibold"
          target="blank"
          href="https://www.linkedin.com/in/luisnunesdev/"
        >
          Linkedin
        </a>
      </section>
      <hr className="border-brand-2 border-opacity-55 border w-[1px] h-4/5"></hr>
      <section className=" w-3/6 h-4/5 px-2 flex flex-col justify-center items-center gap-3 text-heading8 text-brand-2 font-extralight">
        <a
          rel="noopener nonreferrer"
          className="hover:font-semibold"
          target="blank"
          href="https://github.com/CToH10/delliv-fullstack"
        >
          Repositório
        </a>
        <a className="hover:font-semibold" target="blank" href="dockerimage">
          Docker
        </a>
      </section>
    </footer>
  );
};
