import React from 'react'

const Product = (props) => {
  return (
    // <div className='flex items-center justify-center flex-wrap'>
      <div className=' bg-white cursor-pointer py-5 px-4 my-5 mx-3 hover:border-2 border-black'>
        <h2 className='font-bold text-xl my-2'>{props.title}</h2>
        <div style={{backgroundImage:`url(${props.image})`}} className='h-80 w-64 bg-cover'></div>
        <span className='text-blue-500 hover:underline'>see more</span>
      </div>
    /* </div> */
  )
}

export default Product
