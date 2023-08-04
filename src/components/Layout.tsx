import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>ItzNesbro - {title}</title>
        <meta name="description" content="Portfolio Website Of ItzNesbro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-screen bg-background">{children}</main>
    </>
  );
};

export default Layout;
