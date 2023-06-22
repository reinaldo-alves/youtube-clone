import { useContext } from 'react';
import ShortsComponent from "../../components/shortsComponent";
import { Container } from "./styles";
import { ShortContext } from '../../contexts/shortContext';
import { IShorts } from '../../types/types';
import { MenuContext } from '../../contexts/menuContext';

function Shorts() { 
    const { shorts } = useContext(ShortContext);
    const { openMenu } = useContext(MenuContext)

    return (
        <div style={{width:'100%'}} >
            <Container openMenu={ openMenu }>
                {shorts.map((short: IShorts) => (
                    <ShortsComponent thumb={short.thumb} title={short.title} views={short.views} />
                ))}
            </Container>
        </div>
    )
}

export default Shorts;