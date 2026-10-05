import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItem(null);
        setLoading(true);
        setError(null);

        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((product) => product.id === id);

                if (found) {
                    setItem(found);
                    return;
                }
                throw new Error("Elemento no encontrado");
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!item) return <p>Producto no encontrado</p>;

    return (
        <section>
            <h1>Detalle del producto</h1>
            <ItemDetail item={item} />
        </section>
    );
};