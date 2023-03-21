import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import product from "sanity_ecommerce/schemas/product";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    //Configura todas las caracteristicas para AGREGAR al carrito
    //Recibe el producto y la cantidad
    const onAdd = (product, quantity) => {
        //Se guarda la vetificación si el producto ya extiste en el carrito de compras
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        //Entonces se incrementa el total del precio por la cantidad de productos insertados
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        //Entonces se incrementa la cantidad del producto en la factura
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        //Se verifica si existe:
        if(checkProductInCart) {
            //Se actualiza la cantidad del producto en el carrito de ventas.
            //Por cada recorrida que hace a cada producto: verifica si existe en el carrito
            //Y si existe entonces actualiza la cantidad del mismo
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            });

            setCartItems(updatedCartItems);
        }else{
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        
        toast.success(`${qty} ${product.name} agregado al carrito.`);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems); 
    }

    const toggleCartItemQuantity = (id, value) => {
        //Se obtiene el producto a modificar
        foundProduct = cartItems.find((item) => item._id === id); 
        
        //Se obtiene el indice del producto en el carrito
        index = cartItems.findIndex((product) => product._id === id);
        
        //Se elimina el producto del array del carrito.
        const newCartItems = cartItems.filter((item) => item._id !== id);

        //Si se incrementara la cantidad del producto
        if(value === "inc"){
            //Se actualiza el valor del array del carrito, y se agrega el producto con la cantidad actualizada
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1}]);
            
            //Se actualiza el precio total de la facturación
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            
            //Se actualiza la cantidad total de los productos en compra
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)

        //Si se decrementara la cantidad del producto
        }else if(value === "dec"){
            //Se decrementa siempre y cuando será mayor que uno
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1}]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1) 
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1
            
            return prevQty - 1
        });
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);