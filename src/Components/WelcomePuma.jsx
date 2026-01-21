import React from "react";

const WelcomePuma = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16">
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-wide mb-10"
      data-aos='fade-right'>
        WELCOME TO PUMA
      </h1>

      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-3xl"
      data-aos='zoom-in'>
        <video
          src='/Videos/pumaVideo.mp4'
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default WelcomePuma;
