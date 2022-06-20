import React, { useState, createContext } from 'react'

export const MyContext = createContext();

const CartContext = ({ children }) => {
    const [addedProducts, setaddedProducts] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const handleAddProdcutToCart = (product) => {
        if (!isInCart(product.id)) {
            addedProducts.push(product);
            setaddedProducts(addedProducts);
            setCartQuantity(cartQuantity + product.quantity);
        }
    }

    const handleRemoveProductFromCart = (productId) => {
        const productToRemove = addedProducts.find(product => product.id === productId);
        setCartQuantity(cartQuantity - productToRemove.quantity);

        const remainingProducts = addedProducts.filter(product => product.id !== productId);
        setaddedProducts(remainingProducts);
    }

    const isInCart = (id) => {
        const product = addedProducts.find(product => product.id === id);
        return (product !== undefined);
    }

    const addQuantity = (productId) => {
        const products = addedProducts.map(object => {
            if (+object.id === +productId) {
                return {...object, quantity: +object.quantity + 1 };
            }
            return object;
        });
        setCartQuantity(cartQuantity + 1);
        setaddedProducts(products);
    }

    const removeQuantity = (productId) => {
        const products = addedProducts.map(object => {
            if (+object.id === +productId) {
              return {...object, quantity: +object.quantity - 1};
            }
            return object;
          });
        setCartQuantity(cartQuantity - 1);
        setaddedProducts(products);
    }

    const clear = () => {
        setaddedProducts([]);
        setCartQuantity(0);
    }

    return (
        <MyContext.Provider value={{ addedProducts, cartQuantity, onAdd: handleAddProdcutToCart, onRemove: handleRemoveProductFromCart, isInCart, addQuantity, removeQuantity, clear }}>
            {children}
        </MyContext.Provider>
    )
}

export default CartContext