import React, { useState } from 'react'
import { X , Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='font-sans bg-black text-white'>
      <nav className='flex items-center justify-between px-8 py-4 shadow-md'>
        <img className='w-20 h-15' src="https://rabbitlogo.com/wp-content/uploads/2025/09/puma-logo.jpg" alt="" />
        <ul className='hidden md:flex gap-6 text-gray-300 font-medium'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>About</li>
            <li className='hover:text-white cursor-pointer'>Services</li>
            <li className='hover:text-white cursor-pointer'>Contact</li>
        </ul>
         <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className='cursor-pointer' /> : <Menu size={28} className='cursor-pointer' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-6 space-y-4 text-gray-300">
          <p className="hover:text-white text-center cursor-pointer">Home</p>
          <p className="hover:text-white text-center cursor-pointer">About</p>
          <p className="hover:text-white text-center cursor-pointer">Services</p>
          <p className="hover:text-white text-center cursor-pointer">Contact</p>
        </div>
      )}

      <section className='flex flex-col md:flex-row items-center justify-between px-8 py-16'>
        <div className='md:w-1/2'>
          <h1 className='text-8xl font-bold mb-6'>THIS IS PUMA</h1>
          <p className='text-xl mb-6 font-medium'>When the journey starts with yourself, your destination will always be greatness. No matter if your legs are aching, you're gasping for breath, or simply struggling to get out the door. It’s the choice to unleash your true self that allows you to experience the rush of happy chemicals when you feel the runners high. <br />
          Go chase it. Go feel it. Go Wild.</p>
        </div>
      </section>
    </div>
  )
}

export default Navbar
