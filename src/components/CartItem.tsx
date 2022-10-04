import React from 'react'
import { CartItems, UseMyContext } from '../Context/Shoppingcontext'
import {Items} from "../Items"
import { FormatCurr } from '../Utils/CurrencyFormat'
import {MdCancel} from "react-icons/md"


type Props = {
    item:CartItems
}


     const CartItem = ({item}:Props) => {

    const {RemoveCart} = UseMyContext()
  

    const Item = Items.find(i => i.id=== item.id)
       if(Item==null)
          return null 



  return (
    <div className='w-full bg-gray-200 p-2 flex flex-col items-center shadow-lg rounded-md'>

    <div className='w-full'>
     <h1 className='flex justify-end text-red-500 '>
    <MdCancel className='h-5 w-5 cursor-pointer' onClick={()=>RemoveCart(item.id)}/>
    </h1>
    </div>

     <div className='flex items-center justify-between w-full'>

     <img
     src={Item.url}
     height="80px"
     width="80px"
     style={{objectFit:"contain"}}
     />

     <h1 className='text-black'>{FormatCurr(Item.price)}</h1>
     </div>

        
<div className='flex items-center justify-between w-full'>

<h1 className='text-black'>{Item.name}</h1>
<h1 className='text-black text-xl'>Tot: {FormatCurr(Item.price * item.quantity)}</h1>
</div>


    </div>
  )
}

export default CartItem