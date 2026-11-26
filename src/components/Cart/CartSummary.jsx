import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
    const { getCartTotal, getTotalItems, checkout } = useCart();

    const total = getCartTotal();
    const totalItems = getTotalItems();

    return (
        <aside className="cart-summary">
            <h2>Resumen de compra</h2>
            <div className="cart-summary-row">
                <span>Productos ({totalItems})</span>
                <span>${total.toLocaleString("es-AR")}</span>
            </div>
            <div className="cart-summary-total">
                <span>Total a pagar</span>
                <span className="cart-total-amount">${total.toLocaleString("es-AR")}</span>
            </div>
            <button className="btn bg-success primary" onClick={checkout}>
                Finalizar Compra
            </button>
        </aside>
    );
};