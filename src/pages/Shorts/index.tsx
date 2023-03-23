import { useContext } from 'react';
import ShortsComponent from "../../components/shortsComponent";
import { Container } from "./styles";
import { ShortContext } from '../../contexts/shortContext';

function Shorts() { 
    const { shorts } = useContext(ShortContext);

    return (
        <div style={{width:'100%'}} >
            <Container>
                {shorts.map((short: Array<Object>) => (
                    <ShortsComponent short={short} />
                ))}
            </Container>
        </div>
    )
}

export default Shorts;