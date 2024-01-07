import { LinkFactory } from "../LinkFactory/LinkFactory";
import { v4 as uuid } from 'uuid';

export const LinksContainer = ({links}) => (
    links.map(link => (
        <LinkFactory
            key={uuid()} 
            link={link}
        />
    ))
)