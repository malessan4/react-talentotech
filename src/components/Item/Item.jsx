import "./Item.css";

export const Item = ({ name, price, description, image, category, children }) => {
    return (
        <article className="card">
            <img src={image} alt={name} />
            <div className="card-body">
                {category && <span className="card-category">{category}</span>}
                <h3>{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price.toLocaleString("es-AR")}</p>
                {children}
            </div>
        </article>
    );
};