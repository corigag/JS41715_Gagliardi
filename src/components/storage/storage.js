//guarda el carrito dentro del local storage

const setCartLocalStorage  = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

//obtiene el carrito dentro del local storage
const getCartLocalStorage = () => {

    const cartStorage = JSON.parse(localStorage.getItem('cart'))

    return cartStorage
    
}

export { setCartLocalStorage , getCartLocalStorage };