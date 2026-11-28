import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadImage } from "../../../services/uploadImage";
import { createProduct } from "../../../services/productsService";
import "./ProductFormContainer.css"


export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //modificamos los estados para el "loading mientras se procesa"
        setErrors({});
        setLoading(true);

        //validamos inputs
        const newErrors = validateProduct({ ...product, file });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            //subimos la imagen
            const imageUrl = await uploadImage(file);

            //Armamos el producto
            const productData = {
                ...product,
                price: Number(product.price),
                image: imageUrl,

            };

            //Funcion de alta

            const id = await createProduct(productData)

            //Vaciamos el formulario
            setProduct({ name: "", price: "", category: "", description: "" });
            setFile(null);

            //Navegamos a la pagina de exitos
            navigate(`/admin/product/success/${id}`, { replace: true });

        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }
    };



    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
}