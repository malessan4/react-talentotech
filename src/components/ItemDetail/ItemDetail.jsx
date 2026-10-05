import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    return (
        <div className="detail-wrapper">
            <Item {...item}>
                <button className="btn btn-primary">🛒 Agregar al carrito</button>
            </Item>
        </div>
    );
};