import React, { useState, useEffect, createContext } from 'react'

export const MyContext = createContext();

const CartContext = ({ children }) => {
    const [addedProducts, setaddedProducts] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        getCartFromLocalStorage();
        getCartQuantityFromLocalStorage();
    }, []);

    const handleAddProdcutToCart = (product) => {
        if (!isInCart(product.id)) {
            addedProducts.push(product);
            setCart(addedProducts, (cartQuantity + product.quantity));
        }
    }

    const handleRemoveProductFromCart = (productId) => {
        const productToRemove = addedProducts.find(product => product.id === productId);
        const remainingProducts = addedProducts.filter(product => product.id !== productId);

        setCart(remainingProducts, (cartQuantity - productToRemove.quantity));
    }

    const isInCart = (id) => {
        const item = addedProducts.find(product => product.id === id);
        return (item !== undefined);
    }

    const addQuantity = (productId) => {
        const products = addedProducts.map(object => {
            if (object.id === productId) {
                return { ...object, quantity: +object.quantity + 1 };
            }
            return object;
        });
        setCart(products, (cartQuantity + 1));
    }

    const removeQuantity = (productId) => {
        const products = addedProducts.map(object => {
            if (object.id === productId) {
                return { ...object, quantity: +object.quantity - 1 };
            }
            return object;
        });
        setCart(products, (cartQuantity - 1));
    }

    const clear = () => {
        setCart([],0);
    }

    const getCartFromLocalStorage = () => {
        if (localStorage.getItem('cart')) {
            setaddedProducts(JSON.parse(localStorage.getItem('cart')));
        }
    }
    const getCartQuantityFromLocalStorage = () => {
        setCartQuantity(+localStorage.getItem('cartQuantity'));
    }

    const setCart = (cart, cartCount) => {
        setaddedProducts(cart);
        setCartQuantity(cartCount);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartQuantity', cartCount);
    }

    return (
        <MyContext.Provider value={{ addedProducts, cartQuantity, onAdd: handleAddProdcutToCart, onRemove: handleRemoveProductFromCart, isInCart, addQuantity, removeQuantity, clear }}>
            {children}
        </MyContext.Provider>
    )
}

export default CartContext