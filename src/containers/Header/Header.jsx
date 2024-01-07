import { LinksContainer } from "../../components";
import { 
    OutlinedInput, 
    Typography 
} from "@mui/material";
import { 
    ArrowForwardIos, 
    ShoppingBag 
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectCartLength } from "../../features/cart/cartSlice";
import styles from "./Header.module.css";

const navLinks = [
    {
        text: "Hombre",
        to: "#",
        className: styles.navbar__item,
    },
    {
        text: "Mujer",
        to: "#",
        className: styles.navbar__item,
    },
    {
        text: "Blog",
        to: "#",
        className: styles.navbar__item,
    },
    {
        text: "Historia",
        to: "#",
        className: styles.navbar__item,
    },
    {
        text: "Tiendas",
        to: "#",
        className: styles.navbar__item,
    },
]

export const Header = () => {
    const cartLength = useSelector(selectCartLength);
    return (
        <header className={styles.header}>
            <div className={styles.logo__container}>
                <img
                    className={styles.logo__img}
                    alt="logo"
                    src={"/assets/images/logo.png"}
                />
                <div className={styles.search__container}>
                    <OutlinedInput
                        endAdornment={<ArrowForwardIos/>}
                        placeholder="BUSCAR"
                        className={styles.search__input}
                    />
                    <Typography
                        textTransform="uppercase"
                        color="#a17f89"
                        
                    >
                        Envío gratis para pedidos superiores a $300.000
                    </Typography>
                </div>
            </div>
            <div className={styles.navbar__container}>
                <nav className={styles.navbar}>
                    <LinksContainer links={navLinks}/>
                </nav>
                <div className={styles.cart}>
                    <ShoppingBag/>
                    <p>
                        CARRITO {cartLength} 
                    </p>
                </div>  
            </div>
        </header>
    )
}