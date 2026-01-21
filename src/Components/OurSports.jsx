import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sports = [
  {
    name: "Yaroslava Mahuchikh",
    tagLine: "I Sometimes Imagine That I Am A Bird.",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTpwvDcz0MK6Z24Tt8L9W9zZJukv26kBgjP-wFCYgIZJb7eVW3DnafO_K3xPyApwSafNI_unE0AmqXAqOE",
  },
  {
    name: "Karsten Warholm",
    tagLine: "Whatever I do, I Do It With Passion.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRik-9K8JaP4KWzHWLp_ymukjaom2m-54jLIohRjnsXMEjzsWyCRu7_vWQDv3dYGYNikZtIilMiz35itQCKQnTK9ZcuZoPY_1g-xmTgSPg&s=10",
  },
  {
    name: 'Armand "Mondo" Duplantis',
    tagLine: "I believed, I just had to wake everybody else up.",
    img: "https://static01.nyt.com/images/2021/08/02/sports/02oly-mondo-1/merlin_192120966_3be677bb-5123-424e-a0fc-a02b532b2e52-articleLarge.jpg",
  },
  {
    name: "Usain Bolt",
    tagLine:
      "My Single Goal is to Become the Greatest. If I Get to Be A Legend, I’ve Achieved my Goal.",
    img: "https://www.sportscasting.com/wp-content/uploads/2021/07/Usain-Bolt.jpg",
  },
];

const OurSports = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + sports.length) % sports.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sports.length);

  return (
    <section className="bg-[#ff3f6b] text-black px-6 md:px-16 py-12 overflow-x-hidden">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center"
      data-aos='fade-down'>
        Our Sports
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="max-w-xl"
        data-aos='fade-right'>
          <p className="text-lg md:text-xl font-medium mb-4">
            {sports[current].name}
          </p>
          <p className="text-2xl md:text-5xl font-bold leading-tight">
            “{sports[current].tagLine}”
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative w-full max-w-md h-[420px] md:h-[520px] rounded-2xl overflow-hidden"
        data-aos='fade-left'>
          <img
            src={sports[current].img}
            alt={sports[current].name}
            className="w-full h-full object-cover"
          />

          {/* Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-3 bg-black/60 px-3 py-2 rounded-full">
            <span className="text-sm text-white">
              {current + 1}/{sports.length}
            </span>

            <button
              onClick={prevSlide}
              className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-base md:text-lg font-semibold max-w-3xl"
        data-aos='fade-right'>
          Share the excitement in Teamsports, innovate with Golf, bring style
          into Running & Training and performance into Motorsports. We bring a
          high level of brand heat to sports and elevate PUMA to the next level.
        </p>

        <button className="bg-black text-white hover:bg-white hover:text-black border border-black px-6 py-3 font-semibold cursor-pointer"
        data-aos='fade-left'>
          Read More
        </button>
      </div>
    </section>
  );
};

export default OurSports;
