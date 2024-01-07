import { v4 as uuid } from 'uuid';

export const SideImages = ({
    images=[], 
    classContainer="",
    classItem="",
    classImage=""
}) => (
    <div className={classContainer}>
        {images.map(image => (
            <div className={classItem} key={uuid()}>
                <img 
                    src={`/assets/images/${image}`} 
                    alt={image} 
                    className={classImage}
                />
            </div>
        ))}
    </div>
)