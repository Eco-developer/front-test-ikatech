import { SizeGrid } from "../../components/SizeGrid/SizeGrid";
import { LinkFactory } from "../../components/LinkFactory/LinkFactory";
import { 
    Button, 
    Typography 
} from "@mui/material";
import styles from "./ProductDetails.module.css";
import { Favorite } from "@mui/icons-material";

export const DetailsMain = ({
    name,
    price,
    referece,
    colors,
    sizes,
    handleAddToCart,
}) => (
    <div className={styles.details}>
        <div>
            <Typography
                textTransform="uppercase"
                fontWeight="bold"
                color="#666666"
                fontSize="20px"
            >
                {name}
            </Typography>
            <Typography
                textTransform="uppercase"
                fontWeight="bold"
                color="#7a4a58"
            >
                {`$${price}.000`}
            </Typography>
            <Typography color="#cccacf">
                {`Cod. de producto ${referece}`}
            </Typography>
        </div>
        <div className={styles.color__container}>
            <Typography 
                color="#6e6e6e"
                textTransform="uppercase"
                fontSize="12px"
                fontWeight="bold"
            >
                Color
            </Typography>
            <div className={styles.color}>
                <img 
                    src={`/assets/images/${colors}`} 
                    alt="image_color" 
                    className={styles.color__image}
                />
            </div>
        </div>
        <div className={styles.color__container}>
            <Typography 
                color="#6e6e6e"
                textTransform="uppercase"
                fontSize="12px"
                fontWeight="bold"
            >
                Talla
            </Typography>
            <SizeGrid 
                sizes={sizes} 
                defaultValue={6}
            />
        </div>
        <LinkFactory
            link={{
                to: "#",
                className: styles.link,
                text: "Guía de tallas",
            }}
        />
        <div className={styles.cart__btn__container}>
            <Button
                variant="contained"
                className={styles.cart__btn}
                onClick={handleAddToCart}
            >
                AÑADIR AL CARRITO
            </Button>
            <Favorite/>
        </div>
    </div>
)