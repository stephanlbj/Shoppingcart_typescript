import React from 'react'
import {NavLink, Link} from "react-router-dom"

import { UseMyContext } from '../Context/Shoppingcontext'
import CartBtn from './CartBtn'




const Header = () => {

   const {quantity, is_Open} =  UseMyContext()

  
  return (
    <div className='w-full top-0 sticky z-30 bg-white border-b border-gray-300 shadow-md'>
        {/*main div*/}
        <div className='flex items-center justify-between px-3 py-2'>
  {/*left div*/}
<div className='flex items-center space-x-3'>
 
<Link to="/">Store</Link>
 
</div>


 {/*right div*/}

 {
    quantity > 0 && !is_Open && (
        <CartBtn/>
 
    )
 }


        </div>

    </div>
  )
}

export default Header