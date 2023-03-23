import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container, CategoriesContainer, Categories, TitleShorts, ArrowDownButton } from "./styles";
import ShortsComponent from '../../components/shortsComponent';
import Arrow from '../../assets/arrow-down.png'
import Shorts from '../../assets/shorts-color.png'
import { VideoContext } from '../../contexts/videoContext';
import { ShortContext } from '../../contexts/shortContext';
import { useNavigate } from 'react-router-dom';

const categories = ['Tudo', 'Mixes', 'Submarinos', 'Aviação', 'Forró', 'Ferramentas', 'Música Sertaneja', 'Marcenarias', 'Engenharia Elétrica', 'Voo', 'Copa do Mundo', 'Magníficos']

function Home() { 
    const { openMenu } = useContext(MenuContext);
    const { videos } = useContext(VideoContext);
    const { shorts } = useContext(ShortContext);
    const navigate = useNavigate();
    
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} >
            <CategoriesContainer openMenu={ openMenu }>
                {categories.map((item) => (
                    <Categories>{item}</Categories>
                ))}
            </CategoriesContainer>
            <Container shorts={false} openMenu={ openMenu }>
                {videos.map((video: Array<Object>) => (
                    <VideoComponent video={video} />
                ))}
            </Container>
            <TitleShorts>
                <img src={Shorts} alt="shorts"/>
                <span>Shorts</span>
            </TitleShorts>
            <Container shorts={true} openMenu={ openMenu }>
                <ShortsComponent short={shorts[0]} />
                <ShortsComponent short={shorts[1]} />
                <ShortsComponent short={shorts[2]} />
                <ShortsComponent short={shorts[3]} />
                <ShortsComponent short={shorts[4]} />
                <ShortsComponent short={shorts[5]} />
            </Container>
            <ArrowDownButton onClick={() => navigate('/shorts')}>
                <img src={Arrow} alt="arrowdown" />
            </ArrowDownButton>
        </div>
    )
}

export default Home;