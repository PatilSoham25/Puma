import React, { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

    const slides =[
        {
            title: "BE BRAVE",
            description: "We are never afraid to take risks. We stand up for our beliefs and are prepared to make the choices that will push sports forward.",
            image: "https://cdnph.upi.com/collection/fp/upi/10469/092eb9edba01cbf03a2c456a0042e50e/Best-of-Rio-2016-Summer-Olympics-Medal-winners_21_1.jpg"
        },
        {
            title: "BE CONFIDENT",
            description: "Everything we do, we do with conviction. We back our instinct to do the right thing and we are always bold in our actions.",
            image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/528927/45/mod01/fnd/IND/fmt/png/Women's-Jersey-Tee"
        },
        {
            title:"BE DETERMINED",
            description: "Nothing deters us from realising our dreams. We believe success is an endless pursuit to improve ourselves and the way we play.",
            image: "https://images.puma.net/images/524219/51/mod01/fnd/IND/w/800/h/800/"
        },
        {
            title: "BE JOYFUL",
            description: "For us sport is more than winning at all costs. We live to play the game and revel in the pure joy of sporting competition.",
            image: "https://i.pinimg.com/736x/47/f7/78/47f7782ff3ffb65f2ee9340e3de9deb6.jpg"
        },
    ];
const HeroSlider = () => {
        const [current, setCurrent] = useState(0)

        const preSilde = () => {
            setCurrent((current - 1 + slides.length) % slides.length)
        }

        const nextSlide = () => {
            setCurrent((current + 1) % slides.length)
        }

        return (
            <div className='min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-6'>
                <div className='max-w-xl' data-aos="fade-right">
                    <h1 className='text-4xl md:text-7xl font-extrabold mb-6'>{slides[current].title}</h1>
                    <p className='text-base md:text-lg text-gray-300 leading-relaxed'>{slides[current].description}</p>
                </div>

                <div className='relative w-full md:w-[420px] h-[350px] md:h-[520px] overflow-hidden'
                data-aos="fade-left">
                    <img src={slides[current].image} alt="slide"
                    className='w-full min-h-full object-cover'
                    />
                    <div className='absolute top-4 right-4 flex items-center gap-4'>
                        <span className='text-sm text-gray-300'>
                            {current + 1}/{slides.length}
                        </span>
                        <button
                        onClick={preSilde}
                        className='w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black'><ArrowLeft /></button>
                        <button
                        onClick={nextSlide}
                        className='w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black'><ArrowRight /></button>
                    </div>
                </div>
            </div>
        )
}

export default HeroSlider
