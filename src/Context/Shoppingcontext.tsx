import {createContext, useContext, useState} from "react"


type ShoppingContext = {
IncreaseQTY:(id:number)=>void
DecreaseQTY:(id:number)=>void
getQuantity:(id:number)=>number
RemoveCart:(id:number)=>void
quantity:number
CartItems:CartItems[]
OpenCart:()=>void
CloseCart:()=>void
is_Open:boolean
}

type contextType = {
    children:React.ReactNode
}

export type CartItems = {
    id:number
    quantity:number
}
export const Mycontext = createContext({} as ShoppingContext)

export const Contextprovider = ({children}:contextType) =>{

    const [CartItems,setCartItems] = useState<CartItems[]>([])
    const [is_Open, setIs_Open] = useState(false)

const quantity = CartItems.reduce((qty, item)=> item.quantity + qty , 0)

       const OpenCart = ()=>setIs_Open(true)
       const CloseCart = ()=>setIs_Open(false)

 


    const getQuantity = (ID:number) =>{
    return CartItems.find(item=>item.id===ID)?.quantity || 0
    }


    const IncreaseQTY = (id:number)=>{
        setCartItems(
CrrItems => {
    if(CrrItems.find(item=> item.id === id) == null){
        return [...CrrItems, {id, quantity:1}]
    }else{
        return CrrItems.map((item)=>{
            if(item.id === id){
                return  {...item, quantity: item.quantity+1}
            }else{
                return item
            }
        })
    }
}

        )
    }


    const DecreaseQTY = (id:number) =>{
setCartItems(

    CurrItems =>{
        if(CurrItems.find(item=>item.id === id)?.quantity === 1){
            return CurrItems.filter(item=>item.id !== id)
        }
        else {
         return   CurrItems.map(item=>{
if(item.id === id){
    return {...item, quantity:item.quantity - 1}
}else {
    return item
}
            }) 
        }
    }
)
    }


    const RemoveCart = (id:number) =>{
      setCartItems(CurrItems=>{
        return    CurrItems.filter(item=>item.id !== id)
        })
    }


    return (
        <Mycontext.Provider value={{
        is_Open, 
        OpenCart, 
        CloseCart,
        quantity,
        CartItems 
        ,RemoveCart,
        IncreaseQTY, 
        getQuantity,
        DecreaseQTY}}>
        {children}
       </Mycontext.Provider>
    )
}


export const UseMyContext = ()=>useContext(Mycontext)