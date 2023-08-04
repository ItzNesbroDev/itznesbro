import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="container p-2">
      <div className="mb-2">
        <h2 className="text-2xl font-medium">
          Hi, my name is nesbeer,
          <br /> i'm a <span className="text-primary underline">developer</span>
          , video editor, <br /> and youtuber
        </h2>
      </div>
      <div className="font-medium underline">
        <h2 className="text-2xl">
          <a href="mailto:itznesbro@proton.me">contact</a>
        </h2>
        <h3 className="text-xl text-accent">
          <Link href="https://dsc.gg/itznesbro" target="_blank">
            discord
          </Link>
        </h3>
        <h4 className="text-lg text-primary">
          <Link href="https://github.com/ItzNesbroDev" target="_blank">
            github
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Hero;
