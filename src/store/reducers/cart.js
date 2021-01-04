import { Increase_Cart_Item, Decrease_Cart_Item, Add_To_Cart, Remove_To_Cart, Increase_Cart_Item_By_Pro, Decrease_Cart_Item_By_Pro, Remove_To_Cart_By_Pro } from "store/actionType/index"
import { getFromStorage } from "localStore";

const initialData = getFromStorage("cart");

export default function cart(carts = initialData , action) {
    var index,product;
    try{
        switch (action.type) {
            
            case Increase_Cart_Item:
                index = action.payload.index;
                carts[index] = {...carts[index],qty:carts[index].qty + 1}
                return [...carts]
            
            case Increase_Cart_Item_By_Pro:
                product = carts.filter(pro => pro.id !== action.payload.id)
                return [...product,{...action.payload,qty:action.payload.qty + 1}]
            
    
            case Decrease_Cart_Item:
                index = action.payload.index
                if (carts[index].qty > 1 ){
                    carts[index] = {...carts[index],qty:carts[index].qty - 1}
                }
                else{
                    carts.splice(index, 1);
                }
                return [...carts]

            case Decrease_Cart_Item_By_Pro:
                if (action.payload.qty > 1 ){
                    product = carts.filter(pro => pro.id !== action.payload.id)
                    return [...product,{...action.payload,qty:action.payload.qty - 1}]
                }
                else{
                    product = carts.filter(pro => pro.id !== action.payload.id)
                }
                
                return [...product]
    
            case Add_To_Cart:
                const data = carts.filter(pro => pro.id === action.payload.id)
                if (!data.length)
                {   
                    // alert("Product successfully added into cart.")
                    return [...carts,{...action.payload,qty:1}]
                }
                else{
                    alert("This product already in cart.")
                }
                return carts
            
            case Remove_To_Cart:
                index = action.payload.index
                carts.splice(index, 1);
                return [...carts]
                
            case Remove_To_Cart_By_Pro:
                product = carts.filter(pro => pro.id !== action.payload.id)
                return [...product]
            default:
                return carts
        }

    }
    catch(e){
        return carts
    }
    
  }