import React from 'react'
import { UseMyContext } from '../Context/Shoppingcontext'
import { Items } from '../Items'
import { FormatCurr } from '../Utils/CurrencyFormat'
import CartBtn from './CartBtn'
import CartItem from './CartItem'

const CartList = () => {
    const {is_Open,CloseCart,CartItems, quantity} = UseMyContext()

    if(CartItems.length == 0){
        CloseCart()
    }

  return (
    <div className={` ${!is_Open  && "hidden"} fixed left-0 top-0 right-0 bottom-0 bg-black   opacity-90 z-40 `}>
        <div className='flex flex-col space-y-3 overflow-auto w-8/12 sm:w-7/12 md:w-6/12  lg:w-5/12   bg-white fixed top-0 right-0 bottom-0 transform duration-500 inset-x'>
            <div onClick={()=>CloseCart()} className='flex justify-end p-3'>
            <CartBtn/>
            </div>
        <div className='p-2 flex flex-col space-y-3 '>
          {
            CartItems.map((item)=>(
            <CartItem key={item.id} item={item}/>
             ))
          }
       </div>

           <div className='w-full py-8'>

           <h1 className='flex justify-end text-xl font-bold text-red-500 px-3'>
            Total: {FormatCurr(CartItems.reduce((t, cartitem)=>{
            const Item = Items.find(i => i.id === cartitem.id)
            return t + (Item?.price || 0 ) * cartitem.quantity
            }, 0))}</h1>
        </div> 
    </div>
    </div>
  )
}

export default CartList