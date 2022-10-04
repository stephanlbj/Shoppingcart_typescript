import React,{useState} from 'react'
import { UseMyContext } from '../Context/Shoppingcontext'
import { PropsItems } from '../Items'
import { FormatCurr } from '../Utils/CurrencyFormat'

type Props = {
    data:PropsItems
}
const Item = ({data}:Props) => {

   

   const {DecreaseQTY,IncreaseQTY,RemoveCart,getQuantity} = UseMyContext()
    const qy = getQuantity(data.id)


   
  return (
    <div className='bg-white cursor-pointer flex flex-col mb-6 items-center space-y-3 w-10/12  mx-auto border border-gray-200 rounded-md shadow-md'>
        
<div className='mt-auto border-b boder-gray-300'>

<img
src={data.url}
height="300px"
style={{objectFit:"fill"}}
/>
</div>

<div className='flex px-3 py-2 items-center justify-between w-full'>
<h1 className='text-base'>{data.name}</h1>
<h1>Price: {FormatCurr(data.price)}</h1>
</div>

<div className='w-full py-4'>
   {  qy === 0 ? (
          <div onClick={()=>IncreaseQTY(data.id)} 
          className='w-full bg-yellow-500 flex justify-center w-10/12 mx-auto '>
          <button className='py-1' >
          <h1 className='text-center'>+Add to cart</h1>
          </button>
         </div>
    ):(
        <div className='flex flex-col space-y-5 py-3 items-center justify-center'>
        <div className='flex items-center justify-center space-x-2'>
     
        <button onClick={()=>DecreaseQTY(data.id)} className='bg-yellow-500 px-2'>-</button>
         <h1>{qy} in the cart</h1>
        <button  onClick={()=>IncreaseQTY(data.id)} className='bg-yellow-500 px-2'>+</button>
        </div>

          <button onClick={()=>RemoveCart(data.id)}
          className='bg-red-500 cursor-pointer text-white px-2 rounded-md'>
           remove item
          </button>

        </div>
    )
}
</div>

</div>
  )
}

export default Item