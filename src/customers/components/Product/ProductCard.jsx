import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src={product.ImageUrl} alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>{product.brand}</p>
                <p>{product.title}</p>
            </div>    
            <div className='flex items-center space-x-2'>
                <p className='text-red-500 font-semibold'>${product.discountPrice}</p>
                <p className='text-gray-400 line-through opacity-60'>{product.price}</p>
                <p className='text-green-500'>{product.discount}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard