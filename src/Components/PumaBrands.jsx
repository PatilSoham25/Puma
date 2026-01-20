import React from 'react'

const brands = [
    {
        name: 'STICHED',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbq22tQEIf8lsfND_jraXkh7SafVd9ev0Uw&s',
        description: 'What you wear contributes to how you perform – this includes what you wear underneath as well. Affiliate company stichd is a member of the PUMA Group. It develops, produces and distributes bodywear and socks for PUMA as well as other well-known brands.',
        cta: 'Discover stichd'
    },
    {
        name: 'COBRA PUMA GOLF',
        logo: 'https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/text-media/m-18-logo-2023.png?itok=mnFQa0cl',
        description: 'COBRA PUMA GOLF believes the game of golf should be fun. Golfers of all skill levels can enjoy the game and everything about it through innovative and performance-oriented shoes, apparel and clubs.',
        cta: 'Take a swing'
    }
]
const PumaBrands = () => {
  return (
    <div className='bg-black text-white px-6 md:px-16 py-20'>
      <h2 className='text-4xl md:text-6xl font-extrabold mb-16'>PUMA BRANDS</h2>
      <div className='flex flex-cols-1 md:flex-cols-2 gap-16'>
        {brands.map((brand, index) => (
            <div key={index}>
                <h3 className="text-2xl font-bold mb-6">{brand.name}</h3>
                <div className="bg-white p-10 flex items-center justify-center mb-8">
                    <img src={brand.logo} alt={brand.name}
                    className='max-h-24 object-contain'
                    />
                </div>
                <p className="text-gray-300 leading-relaxed mb-8">{brand.description}</p>
                <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-yellow-300"> {brand.cta}</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PumaBrands
