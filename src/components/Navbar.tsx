import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-background bg-opacity-70 backdrop-blur-lg backdrop-filter">
      <div className="flex items-center justify-between p-4">
        <div>
          <Link className="text-xl font-extrabold text-primary" href="/">
            ItzNesbro
          </Link>
        </div>
        <div className="font-medium underline">
          <Link className="mr-2" href="/works">
            works
          </Link>
          <Link
            className="mr-2"
            href="https://itznesbro.hashnode.dev"
            target="_blank"
          >
            blogs
          </Link>
          <a href="mailto:itznesbro@proton.me">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
