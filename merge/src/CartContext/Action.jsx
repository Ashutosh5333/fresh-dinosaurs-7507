export const addTocart = () => ({
    type:"ADD_TO_CART",

});

export const REMOVEFROMCART = (id) => ({
    type:"REMOVEFROMCART",
    payload:id,
});

export const Checkout = () => ({
    type:"CHECKOUT",
});