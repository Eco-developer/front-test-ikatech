import { Product } from "../Product/Product";
import { Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';
import styles from "./ProductsSlider.module.css";

export const ProductsSlider = ({recommendations}) => (
    <>
        <div>
            <Typography
                textTransform="uppercase"
                color="#666666"
                fontWeight="bold"
            >
                Productos recomendados
            </Typography>
            <hr/>
        </div>
        <div className={styles.slider}>
            <div className={styles.slider__track}>
                {recommendations.map((recomendation) =>  (
                    <Product
                        key={uuid()}
                        image={recomendation.foto}
                        colection={[recomendation.foto]}
                        name={recomendation.nombre}
                        price={recomendation.precio}
                    />
                ))}
            </div>
        </div>
    </>
)