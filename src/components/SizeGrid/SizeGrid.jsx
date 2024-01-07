import { Typography } from '@mui/material';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from "./SizeGrid.module.css";

export const SizeGrid = ({sizes, defaultValue=0}) => {
    const [selected, setSelected] = useState(defaultValue);
    return (
        <div className={styles.sizes}>
            {sizes.map((size) => {
                const handleSelected = () => {
                    setSelected(size)
                }
                return  (
                    <div 
                        key={uuid()} 
                        onClick={handleSelected}
                        className={`${styles.sizes__item} ${selected === size ? styles.sizes__item__selected : ""}`}
                    >
                        
                        <Typography 
                            color="#333333"
                            fontWeight="bold"
                        >
                            {size}
                        </Typography>
                    </div>
                )
            })}
        </div>
    )
}