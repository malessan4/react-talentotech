import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//contexto
const CartContext = createContext();

//custom hook
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
}

//proveedor

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // verifica si hay algun item existente en el carrito
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };


    // agrega item al carrito
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya existe en el carrito")
            return;
        }
        setCart([...cart, item]);
        alert("Producto agregado al carrito!");
    };

    //Eliminar del carrito
    const removeItem = (id) => {
        const updateCart = cart.filter((element) => element.id !== id);
        setCart(updateCart);
        alert("Producto eliminado");
    };

    //Vacia el carrito
    const cleanCart = () => {
        setCart([]);
    };

    //Total de items en carrito (sin quantity)
    const getTotalItems = () => {
        return cart.length;
    };

    //Total a pagar
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    //Checkout
    const checkout = () => {
        alert("Su compra ha sido realizada!");
        cleanCart();
        navigate("/");
    };

    const values = {
        cart, addItem, cleanCart, removeItem, getCartTotal, getTotalItems, checkout,
    }


    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

