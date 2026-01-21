import React from "react";

const GoWildSection = () => {
  return (
    <section className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold"
          data-aos='fade-right'>
            Go Wild
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2" data-aos='fade-left'>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            The world of sport is only just realizing what we’ve always known:
            that athletes are humans first. And whatever your sporting level,
            being true to who you are is what will lead you to what you can be.
            That’s why we’ve launched Go Wild.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GoWildSection;
