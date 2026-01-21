import React from "react";
import { Search } from "lucide-react";

const CareersSection = () => {
  return (
    <section className="bg-black text-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 relative">

        {/* TOP CONTENT */}
        <div className="mb-20" data-aos='fade-right'>
          <h1 className="text-5xl md:text-6xl font-bold mb-12">
            Careers
          </h1>

          <h2 className="text-5xl md:text-6xl font-bold mb-10">
            382 jobs
          </h2>

          {/* SEARCH BAR */}
          <div className="flex items-center border-b border-gray-400 pb-3 max-w-3xl">
            <input
              type="text"
              placeholder="I want to work in …"
              className="bg-transparent w-full text-lg outline-none placeholder-gray-300"
            />
            <Search className="text-white ml-4" />
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT TEXT */}
          <h3 className="text-4xl md:text-5xl font-bold leading-tight"
          data-aos='fade-right'>
            Get of the bench,<br />
            start playing
          </h3>

          {/* RIGHT TEXT */}
          <p className="text-base md:text-lg text-gray-200 max-w-md"
          data-aos='fade-left'>
            Make your move: advance to the next level with PUMA and
            explore our job opportunities.
          </p>
        </div>

        {/* CTA BUTTON */}
        <button className="absolute border bottom-10 right-6 md:right-10 bg-black hover:bg-white text-white hover:text-black px-6 py-3 text-medium font-semibold transition"
        data-aos='fade-left'>
          Join PUMA
        </button>

      </div>
    </section>
  );
};

export default CareersSection;
