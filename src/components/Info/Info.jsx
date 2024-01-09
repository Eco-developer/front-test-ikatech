import { Typography } from "@mui/material"
import styles from "./Info.module.css"

export const Info = ({title, text}) => (
    <div className={styles.info}>
        <Typography
            textTransform="uppercase"
            color="#666666"
            fontWeight="bold"
            fontFamily="glyphicons"
            style={{
                wordSpacing: "-12px"
            }}
        >
            {title}
        </Typography>
        <hr/>
        <Typography
            color="#a1a4a5"
            fontFamily="MontserratRegular" 
        >
            {text}
        </Typography>
    </div>
)