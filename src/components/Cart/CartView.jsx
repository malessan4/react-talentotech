import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";

export const Cartview = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>Tu carrito de compras</h1>

            {cart.length ? (
                <div className="cart-layout">
                    <CartList />
                    <CartSummary />
                </div>
            ) : (
                <div className="cart-empty">
                    <p className="empty-cart">El carrito está vacío</p>
                    <Link className="btn primary bg-primary" to={"/"}>
                        Volver
                    </Link>
                </div>
            )}
        </section>
    );

};