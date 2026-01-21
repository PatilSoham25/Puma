import React from 'react'

const HeroSection = () => {
  return (
    <div className='font-sans bg-black text-white'>
        <section className='flex flex-col md:flex-row items-center justify-between px-8 py-12'>
            <div className='md:w-1/2' data-aos="fade-right">
                <h1 className='text-8xl font-bold mb-6'>THIS IS PUMA</h1>
                <p className='text-xl mb-6 font-medium'>When the journey starts with yourself, your destination will always be greatness. No matter if your legs are aching, you're gasping for breath, or simply struggling to get out the door. It’s the choice to unleash your true self that allows you to experience the rush of happy chemicals when you feel the runners high. <br />
                Go chase it. Go feel it. Go Wild.</p>
            </div>
        </section>
    </div>
  )
}

export default HeroSection
