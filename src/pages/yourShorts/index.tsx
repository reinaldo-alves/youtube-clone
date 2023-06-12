import { useContext } from 'react';
import ShortsComponent from "../../components/shortsComponent";
import { Container } from "./styles";
import { ShortContext } from '../../contexts/shortContext';
import { IShorts } from '../../types/types';

function YourShorts() { 
    const { shortUser } = useContext(ShortContext);

    return (
        <div style={{width:'100%'}} >
            <Container>
                {shortUser.map((short: IShorts) => (
                    <ShortsComponent thumb={short.thumb} title={short.title} views={short.views} />
                ))}
            </Container>
        </div>
    )
}

export default YourShorts;