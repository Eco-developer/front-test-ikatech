import { LinksContainer } from "../../components";
import {
    OutlinedInput, 
    Typography 
} from "@mui/material";
import { 
    ArrowForwardIos,
    Facebook, 
    Instagram 
} from "@mui/icons-material";
import { 
    LINK_ARRAY, 
    LINK_TITLE, 
    RENDER 
} from "../../const/linksType";
import styles from "./Footer.module.css";

export const footerLinks = [
    {
        type: LINK_ARRAY,
        className: styles.links__container,
        items: [
            {
                text: "Servicio al cliente",
                type: LINK_TITLE,
                props: {
                    textTransform:"uppercase",
                    color: "#000"
                }
            },
            {
                text: "Contáctenos",
                to: "#",
                className: styles.links__item,
            },
            {
                text: "Cambios y Devoluciones",
                to: "#",
                className: styles.links__item,
            },
            {
                text: "Políticas de la tienda",
                to: "#",
                className: styles.links__item,
            },
            {
                text: "Políticas de datos",
                to: "#",
                className: styles.links__item,
            },
        ],
    },
    {
        type: LINK_ARRAY,
        className: styles.links__container,
        items: [
            {
                text: "Mi cuenta",
                type: LINK_TITLE,
                props: {
                    textTransform:"uppercase",
                    color: "#000"
                }
            },
            {
                text: "Mis pedidos",
                to: "#",
                className: styles.links__item,
            },
            {
                text: "Mis devoluciones",
                to: "#",
                className: styles.links__item,
            },
        ],
    },
    {
        type: LINK_ARRAY,
        className: styles.links__container,
        items: [
            {
                text: "Recursos",
                type: LINK_TITLE,
                props: {
                    textTransform:"uppercase",
                    color: "#000"
                }
            },
            {
                text: "Tiendas",
                to: "#",
                className: styles.links__item,
            },
            {
                text: "Devoluciones",
                to: "#",
                className: styles.links__item,
            },
        ],
    },
    {
        type: LINK_ARRAY,
        className: styles.links__container,
        items: [
            {
                text: "Newsletters",
                type: LINK_TITLE,
                props: {
                    textTransform:"uppercase",
                    color: "#000"
                }
            },
            {
                text: "Regístrate para ser el primero en recibir nuestras noticias",
                type: LINK_TITLE,
                props: {
                    textTransform:"uppercase",
                    color: "#909090",
                    fontSize: "12px"
                }
            },
            {
                type: RENDER,
                render: () => (
                    <OutlinedInput
                        endAdornment={<ArrowForwardIos/>}
                        placeholder="E-MAIL"
                        className={styles.newsletter__input}
                    />
                )
            },
        ],
    }
]

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.socials__container}>
            <Typography
                fontSize="30px"
                color="#575656"
            >
                @HUSHPUPPIESCO
            </Typography>
            <div className={styles.socials}>
                <Facebook/>
                <Instagram/>
            </div>
        </div>
        <div className={styles.links}>
            <LinksContainer links={footerLinks}/>
        </div>
        <div className={styles.sponsors}>
            <img 
                alt="sponsors" 
                src="/assets/images/sponsors.png"
                className={styles.sponsors__image}    
            />
        </div>
    </footer>
)