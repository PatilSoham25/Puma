import React from "react";

const HistoryInnovation = () => {
  return (
    <section className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT — OUR HISTORY */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" data-aos='fade-right'>
              Our history
            </h3>

            <img
              src="https://images.prodirectsport.com/ProductImages/Main/1025387_Main_1927194.jpg"
              alt="Puma history shoe"
              className="w-full h-[360px] object-contain mb-6"
              data-aos='flip-right'
            />

            <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6"
            data-aos='fade-right'>
              PUMA is relentlessly pushing sports and culture forward by
              creating the fastest products for the world’s fastest athletes.
              Since 1948, PUMA has drawn strength and credibility from its
              heritage in sports.
            </p>

            <button className="border bg-black hover:bg-white text-white hover:text-black px-6 py-3 text-medium font-semibold hover:bg-gray-200 transition cursor-pointer"
            data-aos='fade-right'>
              Go back in time
            </button>
          </div>

          {/* RIGHT — INNOVATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-6"
            data-aos='fade-left'>
              Innovation
            </h3>

            <img
              src="https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/17663260/2022/8/18/202032d6-0d34-43a4-98e8-0714004c99491660818623004-Puma-Men-Black-City-Running-Shoes-4171660818622516-1.jpg"
              alt="Puma innovation shoe"
              className="w-full h-[360px] object-contain mb-6"
              data-aos='flip-left'
            />

            <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6"
            data-aos='fade-left'>
              It all starts with our athletes. We strive to create the most
              innovative technologies and products to give our athletes a
              competitive advantage and enable them to perform at their best.
            </p>

            <button className="border bg-black hover:bg-white text-white hover:text-black px-6 py-3 text-medium font-semibold transition cursor-pointer"
            data-aos='fade-left'>
              Explore PUMA&apos;s innovation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryInnovation;
