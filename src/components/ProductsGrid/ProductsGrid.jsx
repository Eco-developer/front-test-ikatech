import { Product } from "../Product/Product";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCart } from "../../features/cart/cartSlice";
import { v4 as uuid } from 'uuid';
import styles from "./ProductsGrid.module.css";

export const ProductsGrid = ({recommendations}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className={styles.grid__title}>
                <Typography
                    textTransform="uppercase"
                    color="#333333"
                    fontWeight="bold"
                >
                    Completa tu look
                </Typography>
            </div>
            <div className={styles.grid}>
                {recommendations.map((recomendation) => {
                    const handleAddToCart = () => {
                        dispatch(setCart(recomendation))
                    }
                    return (
                        <Product
                            key={uuid()}
                            image={recomendation.foto}
                            colection={[recomendation.foto]}
                            name={recomendation.nombre}
                            price={recomendation.precio}
                            button={{
                                variant: "contained",
                                className: styles.cart__btn,
                                onClick: handleAddToCart,
                                text:  "AÑADIR AL CARRITO",
                            }}
                        />
                    )
                })}
            </div>
        </>
    )
}