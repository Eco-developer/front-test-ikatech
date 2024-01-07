import { Typography } from "@mui/material"
import styles from "./ProductDetails.module.css"

export const DetailsInfo = ({title, text}) => (
    <div className={styles.info}>
        <Typography
            textTransform="uppercase"
            color="#666666"
            fontWeight="bold"
        >
            {title}
        </Typography>
        <hr/>
        <Typography
            color="#a1a4a5"
        >
            {text}
        </Typography>
    </div>
)