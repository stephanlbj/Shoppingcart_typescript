import React from 'react'
import Item from '../components/Item'
import { Items } from '../Items'

const Store = () => {
  return (
    <div>
       <h1 className='text-center text-xl my-10'> Store</h1>
       <div className='p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       { Items.map((item)=>(
        <Item key={item.id} data={item}/>
        ))
       }
      </div>

    </div>
  )
}

export default Store