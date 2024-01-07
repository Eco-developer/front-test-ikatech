import { Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { 
    LINK_TITLE,
    LINK_ARRAY,
    RENDER,
} from "../../const/linksType";

export const LinkFactory = ({link}) => {
    switch (link.type) {
        case LINK_TITLE: {
            return   (
                <Typography
                    {...link.props}
                >
                    {link.text}
                </Typography>
            )
        }
        case LINK_ARRAY: {
            return (
                <div className={link.className} >
                    {link.items.map(item => (
                        <LinkFactory 
                            key={uuid()} 
                            link={item}
                        />
                    ))}
                </div>
            )
        }
        case RENDER: {
            return link.render()
        }
        default: {
            return (
                <a
                    href={link.to}
                    rel="noreferrer"
                    className={link.className ?? ""}
                >
                    {link.text}
                </a>
            )
        } 
    }
}