import React from 'react'
import MenuBar from '../../public/icons/menu-bar.png'

const SmallNavbar = () => {
    return (
        <div className='bg-gray-700 h-[7vh] flex items-center text-white justify-center mx-0 px-0'>
            <div className='flex justify-center items-center mr-64'>
                <img className='mx-4 h-10 bg-white cursor-pointer' src={MenuBar} />
                <div className='mx-4 cursor-pointer'>Today Deals</div>
                <div className='mx-4 cursor-pointer'>Customer Service</div>
                <div className='mx-4 cursor-pointer'>Registry</div>
                <div className='mx-4 cursor-pointer'>Gift Cards</div>
                <div className='mx-4 cursor-pointer'>Sell</div>
            </div>
            <div className='mx-4 cursor-pointer ml-48'>Shop deals in electronic</div>
        </div>  
    )
}

export default SmallNavbar
