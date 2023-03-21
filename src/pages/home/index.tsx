import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import VideoComponent from "../../components/videoComponent";
import { Container, CategoriesContainer, Categories, TitleShorts, ArrowDownButton } from "./styles";
import ShortsComponent from '../../components/shortsComponent';
import Arrow from '../../assets/arrow-down.png'
import Shorts from '../../assets/shorts-color.png'
import { VideoContext } from '../../contexts/videoContext';

const categories = ['Tudo', 'Mixes', 'Submarinos', 'Aviação', 'Forró', 'Ferramentas', 'Música Sertaneja', 'Marcenarias', 'Engenharia Elétrica', 'Voo', 'Copa do Mundo', 'Magníficos']

const shorts = [
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}, 
    {thumb: "https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg", title: "Marília Mendonça - Leão - Decretos Reais 2", views: "109 mi"}
]

function Home() { 
    const { openMenu } = useContext(MenuContext);
    const { videos } = useContext(VideoContext);
    
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
                {shorts.map((short) => (
                    <ShortsComponent short={short} />
                ))}
            </Container>
            <ArrowDownButton>
                <img src={Arrow} alt="arrowdown" />
            </ArrowDownButton>
        </div>
    )
}

export default Home;