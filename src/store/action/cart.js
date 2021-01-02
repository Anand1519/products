import { Increase_Cart_Item,Decrease_Cart_Item, Add_To_Cart, Remove_To_Cart, Increase_Cart_Item_By_Pro, Decrease_Cart_Item_By_Pro, Remove_To_Cart_By_Pro } from "store/actionType";

export function IncreaseCartItem(proItem) {
    return {
        type: Increase_Cart_Item,
        payload: proItem
    };
}

export function DecreaseCartItem(proItem) {
    return {
        type: Decrease_Cart_Item,
        payload: proItem
    };
}

export function AddToCart(proItem) {
    return {
        type: Add_To_Cart,
        payload: proItem
    };
}

export function RemoveToCart(proItem) {
    return {
        type: Remove_To_Cart,
        payload: proItem
    };
}

export function IncreaseCartItemByPro(proItem) {
    return {
        type: Increase_Cart_Item_By_Pro,
        payload: proItem
    };
}

export function DecreaseCartItemByPro(proItem) {
    return {
        type: Decrease_Cart_Item_By_Pro,
        payload: proItem
    };
}

export function RemoveToCartByPro(proItem) {
    return {
        type: Remove_To_Cart_By_Pro,
        payload: proItem
    };
}