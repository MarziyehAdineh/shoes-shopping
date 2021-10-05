import React from "react"
import { Cart } from "../Component/card"
import { cartstore } from "../Component/product"
export function CartPage () {
    const product=cartstore.getState();

    return (
        
        <div>
            
            <Cart product={product}/>

        </div>
    )
    
    

}
