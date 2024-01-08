import { 
    Info,
    ProductsGrid,
    ProductsSlider 
} from "../../components"
import { DetailsMain } from "./DetailsMain"
import { DetailsImages } from "./DetailsImages"
import { Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCart } from "../../features/cart/cartSlice"
import styles from "./ProductDetails.module.css"

export const ProductDetails = ({product={}, recommendations=[]}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(setCart(product))
    }
    return (
        <section className={styles.section}>
            <div>
                <Typography 
                    fontWeight="bold"
                    color="#989898"
                    textTransform="uppercase"
                >
                    HUSHPUPPIESCO {product.coleccion ? `/ ${product.coleccion }` : ""} {product.nombre ? `/ ${product.nombre }` : ""}
                </Typography>
            </div>
            <div className={styles.section__content}>
                <DetailsImages
                    colection={product.foto_coleccion}
                    image={product.foto}
                />
                <DetailsMain
                    name={product.nombre}
                    price={product.precio}
                    referece={product.referencia}
                    colors={product.color}
                    sizes={product.tallas}
                    handleAddToCart={handleAddToCart}
                />
            </div>
            <Info
                title="Detalles de Producto"
                text={product.descripcion}
            />
            <Info
                title="Tecnologías"
                text={product.tecnologias}
            />
            <ProductsGrid recommendations={recommendations.slice(7, 11)}/>
            <ProductsSlider recommendations={recommendations}/>
        </section>
    )
}