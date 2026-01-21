import React from "react";

const AnnualReport = () => {
  return (
    <section className="bg-[#E6F21D] w-full">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="md:w-1/2" data-aos='fade-right'>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Annual Report 2024
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 text-black" data-aos='fade-left'>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-8 max-w-xl">
            In 2024, the Year of Sport with events like the Olympic Games and
            Euro 2024, we advanced our brand elevation strategy – the
            foundation for long-term, sustainable growth and outpacing the
            market. Currency-adjusted sales rose 4.4% to €8,817.2 million
            across all regions, divisions, and channels. EBIT was €622
            million, in line with last year. Learn more in our Annual Report
          </p>

          <button className="border bg-black hover:bg-white text-white hover:text-black px-6 py-3 text-medium font-semibold hover:bg-gray-900 transition">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default AnnualReport;
