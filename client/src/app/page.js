import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import React from "react";

function Page(props) {
  return (
    <div className="relative isolate overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker/>
      </main>
      <Features/>
    </div>
  );
}

export default Page;
