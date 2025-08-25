import React from 'react'

const HeroSection = () => {
    return (
        <div className='bg-[url("/public/images/hero_image.jpg")] h-72 bg-cover flex items-end justify-center'>
            <span className='bg-white h-7 my-4 px-16 pt-4 pb-10 font-extralight'>You are in Amazon.com You can shop on Amazon Pakistan for millions products with Fast delivery. 
                <span className='text-blue-500 hover:text-blue-600 hover:underline cursor-pointer'>click here for Amazon App</span>
            </span>
        </div>
    )
}

export default HeroSection
