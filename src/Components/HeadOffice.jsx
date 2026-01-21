import React from 'react'

const HeadOffice = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-20">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4"
      data-aos="fade-right">
        PUMA Headquarters
        </h2>
        <p className="text-xl text-gray-300 mb-10"
        data-aos="fade-right">
        Herzogenaurach, Germany
        </p>

        {/* Image */}
        <div className="w-full mb-16" data-aos="zoom-in">
        <img
        src="https://www.puma-catchup.com/wp-content/uploads/2018/08/H2-Growing-Business.jpg"
        alt="PUMA Headquarters"
        className="w-full h-[220px] md:h-[420px] object-cover"
        />
        </div>


        {/* Content */}
        <div className="max-w-4xl" data-aos="fade-right">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">
            Strengthening the Core
            </h3>
            <p className="text-lg md:text-lg text-gray-300 leading-relaxed">
            To show presence on a global scale, PUMA has defined five corporate
            offices as central hubs. While we call Herzogenaurach in Germany our
            home - it's where we started after all - we're truly at home in the
            world.
            </p>
        </div>
    </div>
  )
}

export default HeadOffice
