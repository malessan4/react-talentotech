import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory } from "../../services/productsService";
import "./ItemListContainer.css";

const categories = ["guitarras", "pianos", "baterias", "bajos", "vientos", "cuerdas"];

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getByCategory(category)
            .then((data) => setProducts(data))
            .catch((error) => setErrors(error.message))
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <p>Cargando...</p>;
    if (errors) return <p>{errors}</p>;

    return (
        <section>
            <h1>{category ? `Categoría: ${category}` : "Instrumentos Musicales"}</h1>

            <div className="categories-bar">
                <Link to={"/"} className={`category-btn ${!category ? "active" : ""}`}>
                    Todos
                </Link>
                {categories.map((cat) => (
                    <Link
                        key={cat}
                        to={`/category/${cat}`}
                        className={`category-btn ${category === cat ? "active" : ""}`}
                    >
                        {cat}
                    </Link>
                ))}
            </div>

            <ItemList products={products} />
        </section>
    );
};