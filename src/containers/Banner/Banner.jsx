import { LinksContainer } from "../../components";
import { Typography } from "@mui/material";
import styles from "./Banner.module.css";

export const bannerLinks = [
    {
        text: "Directorio de tiendas",
        to: "#",
        className: styles.links__item,
    },
    {
        text: "Servicio al cliente",
        to: "#",
        className: styles.links__item,
    },
    {
        text: "Mi cuenta",
        to: "#",
        className: styles.links__item,
    }
]

export const Banner = () => (
    <section className={styles.banner__section}>
        <div className={styles.banner}>
            <Typography
                color="#ffffff"
                fontFamily="MontserratBold"
            >
                HOT SALE -30% EN SANDALIAS
            </Typography>
        </div>
        <div className={styles.links}>
           <LinksContainer links={bannerLinks}/>
        </div>
    </section>
)