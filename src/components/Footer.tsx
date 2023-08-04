import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 bg-background bg-opacity-80 p-2 text-center">
      <div>
        <p>&copy; {currentYear} ItzNesbro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
