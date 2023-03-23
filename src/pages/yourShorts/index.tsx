import { useContext } from 'react';
import ShortsComponent from "../../components/shortsComponent";
import { Container } from "./styles";
import { ShortContext } from '../../contexts/shortContext';

function YourShorts() { 
    const { shortUser } = useContext(ShortContext);

    return (
        <div style={{width:'100%'}} >
            <Container>
                {shortUser.map((short: Array<Object>) => (
                    <ShortsComponent short={short} />
                ))}
            </Container>
        </div>
    )
}

export default YourShorts;