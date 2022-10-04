import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { UseMyContext } from '../Context/Shoppingcontext'

 
const CartBtn = () => {
    const {quantity, OpenCart, is_Open} =  UseMyContext()


    const Clicked = () =>{
        OpenCart()
        console.log(is_Open)
       }


  return (
    <div className='flex items-center space-x-3 z-50'>

    <div 
    onClick={()=>Clicked()}
    className='bg-yellow-500 rounded-full relative cursor-pointer flex items-center justify-center p-2'>
    <AiOutlineShoppingCart className='h-5 w-5 '/>
    <div className='absolute -right-2 -bottom-3 bg-red-500 rounded-full p-2 h-[1.5rem] w-[1.5rem] flex items-center justify-center'>
    <h1 className='text-white text-[12px]'>{quantity}</h1>
    </div>
    </div>


   </div>
  )
}

export default CartBtn