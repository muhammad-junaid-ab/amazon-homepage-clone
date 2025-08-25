import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[13vh] bg-black flex items-center justify-center'>

            <img className='h-18 pr-4 cursor-pointer' src="/public/images/amazon_logo.png" />
            <img className='bg-white h-9 py-1' src="/public/icons/gps.png" />
            <div className='text-white mx-1.5 cursor-pointer'>
                <span className=''>Deliver to</span><br />
                <span className='font-bold'>PAK</span>
            </div>
            <img className='bg-yellow-500 h-11 ml-3' src='/public/icons/search.png'/>
            <input className='h-11 w-130 px-2 mr-4 bg-white cursor-pointer hover:border-3 hover:border-yellow-500' placeholder='Search Amazon' type="text" />
            <div className='text-white px-3 cursor-pointer hover:border-3 hover:border-yellow-500'>
                <span>Hello, sign in</span><br />
                <span className='font-bold text-xl'>Accounts & Lists</span>
            </div>
            <div className='text-white px-4 cursor-pointer hover:border-3 hover:border-yellow-500'>
                <span>Return &</span><br />
                <span className='font-bold text-xl'>order</span>
            </div>
            <img className='h-10 bg-white ml-3 pt-1 pr-1 pl-0.5' src="/public/icons/shopping-cart.png" alt="" />
            <span className='text-white text-2xl font-bold px-2 cursor-pointer'>Cart</span>

        </div>
    )
}

export default Navbar
