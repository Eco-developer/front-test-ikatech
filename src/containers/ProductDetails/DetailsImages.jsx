import { SideImages } from "../../components/SideImages.jsx/SideImages";
import styles from "./ProductDetails.module.css";

export const DetailsImages = ({colection=[], image=""}) => (
    <div className={styles.images}>
        <div className={styles.images__main}>
            <img 
                src={`/assets/images/${image}`} 
                alt="image_main" 
                className={styles.image}
            />
        </div>
        {colection.length ? 
            (
                <SideImages
                    images={colection}
                    classContainer={styles.images__side}
                    classItem={styles.images__side__item}
                    classImage={styles.image}
                />
            )
        : null}
    </div>
)