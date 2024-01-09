import { SideImages } from "../SideImages.jsx/SideImages";
import { 
    Button, 
    Typography 
} from "@mui/material";
import styles from "./Product.module.css";

export const Product = ({
    image,
    colection,
    name,
    price,
    button=null,
}) => (
    <div className={styles.product}>
        <div className={styles.product__image}>
            <img 
                src={`/assets/images/${image}`} 
                alt={name} 
                className={styles.image}
            />
        </div>
        <SideImages
            images={colection}
            classContainer={styles.images__side}
            classItem={styles.images__side__item}
            classImage={styles.image}
        />
        <Typography
            color="#424242"
            fontWeight="bold"
            fontFamily="MontserratBold"    
        >
            {name}
        </Typography>
        <Typography 
            color="#7a4a58"
            fontFamily="MontserratRegular"    
        >
            {`$${price}.000`}
        </Typography>
        {button ? 
            <Button
                variant={button.variant}
                className={button.className}
                onClick={button.onClick}
                fullWidth={true}
            >
                {button.text}
            </Button>
        : <hr/>}
    </div>
)